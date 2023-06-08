from fastapi import FastAPI
from routes.leaderboard_routes import leaderboard_app_router

app = FastAPI()

app.include_router(leaderboard_app_router)