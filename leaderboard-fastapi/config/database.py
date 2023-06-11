from pymongo.mongo_client import MongoClient

uri = "mongodb://database:27017/triviagame_app"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.triviagame_app
collection_name = db["leaderboard"]

def seed_collection():
    collection_name.delete_many({})
    data = [
        {"username": "user-test@gmail.com", "correct_answers": 4, "date": ""},
        {"username": "email@email.com", "correct_answers": 5, "date": ""}
    ]
    
    for document in data:
        collection_name.insert_one(document)

seed_collection()