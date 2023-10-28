import requests
import pprint
import json

url = "http://localhost:8000/users"

result = requests.get(url).content.decode("utf-8")

result = json.loads(result)
pprint.pprint(result)
