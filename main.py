from typing import Union

from fastapi import Depends, FastAPI

from fastapi.middleware.cors import CORSMiddleware

# from sqlalchemy.orm import Session
from dotenv import load_dotenv
import pymssql
import os

app = FastAPI(version="1.0.2")

load_dotenv()

origins = [
    "https://codefest-ui.azurewebsites.net",
    "http://localhost",
    "http://localhost:8000",
    "https://localhost:4200"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

# async def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

def connection_cursor():
    con = pymssql.connect(server=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASSWORD)
    return con.cursor()

# @app.get("/helloworld")
# def test():
#     return {"Hello": "World"}

@app.get("/clients/{client_id}/get_all_cases")
async def get_client_cases(client_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT top(1) * FROM cases WHERE user_id={client_id} order by updated_at asc')
    results = cur.fetchall()    
    for row in results:
            print(row)
    return results

