from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://user-nachiket:Jv75Nrir7d7yT7lG@cluster0.gclgp9o.mongodb.net/?retryWrites=true&w=majority"

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