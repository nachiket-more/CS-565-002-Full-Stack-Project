from pydantic import BaseModel

class Leaderboard(BaseModel):
    username: str
    correct_answers: int
    date: str

