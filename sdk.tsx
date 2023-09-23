import { createContext, useReducer } from "react";

type ContextType = {
    readonly data: any,
    dispatch: React.Dispatch<any>
}

const MiseContext = createContext<ContextType>(null);

const SdkProvider = ({ children }) => {
    const sdk = new MiseSdk();

    const updateNameAction = (state: any, _: any) => {
        if (state.name) {
            state.name += "1";
        } else state.name = "Mike";
    }
    const resetNameAction = (state: any, _: any) => {
        for (let key of Object.keys(state)) delete state[key];
    };

    sdk.registerAction("set_name", updateNameAction);
    sdk.registerAction("reset", resetNameAction);

    // wrapping the sdk.stateReducer in another function
    // so it references the most up-to-date version 
    // of the state reducer method from the sdk
    const stateReducer = (s, a) => sdk.stateReducer(s, a);
    const [state, dispatch] = useReducer(stateReducer, {
        cart: {},
        explore: {},
        user: {},
        shopProfiile: {}, // the profile of the shop the user is currently viewing,
        editShop: {}, // the state of the shop currently being edited/created 
        // -- perhaps it makes sense to have this data localized
        product: {}, // the product currently being viewed 
        editProduct: {}, // the product currently being editor by the user
    });

    return (
        <MiseContext.Provider value={{ data: state, dispatch }}>
            {children}
        </MiseContext.Provider>
    )
}


class MiseSdk {
    private actions: any;
    constructor() {
        this.actions = {};

        // handles adding a new value to a parent
        this.registerAction("add_key", this.addKeyAction);

        // returns a value stored in a prent
        this.registerAction("get_key", this.getKeyAction);
    }

    // making a new copy of the state object
    // and then ignoring the previous one 
    // will trigger the GC very often
    // affecting the performance of the app
    // but I couldn't care less at this moment 😛    
    registerAction(name: string, handler: Function) {
        this.actions[name] = (state: any, action: any) => {
            const newState = { ...state };
            handler(newState, action);
            return newState;
        }
    }

    stateReducer(state: any, action: { type: string }) {
        return this.actions[action.type](state, action);
    }
    
    // stores a new value under a parent
   addKeyAction(state: any, action:any)  {
    state[action.parent][action.key] = action.value; 
   }

   // gets a value from the parent
   getKeyAction(state: any, action: any): any {
    return state[action.parent][action.key];
   }
}

export { MiseContext };
export default SdkProvider;