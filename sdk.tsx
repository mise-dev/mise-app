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
    const [state, dispatch] = useReducer(stateReducer, {});
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
}

export { MiseContext };
export default SdkProvider;