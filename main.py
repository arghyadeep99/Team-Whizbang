import json
from typing import Union

from fastapi import Depends, FastAPI
from pydantic import BaseModel
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


class input_data(BaseModel):
    body: dict

def connection_cursor():
    con = pymssql.connect(server=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASSWORD)
    return con.cursor()


@app.get("/helloworld")
def test():
    return {"Hello": "World"}


@app.get("/clients/{client_id}/get_all_cases")
async def get_client_all_cases(client_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM cases WHERE user_id={client_id} order by updated_at asc')
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/sessions/{session_id}/get_details")
async def get_all_session_details(session_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM sessions WHERE session_id={session_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/users/{user_id}/get_details")
async def get_user_details(user_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM users WHERE user_id={user_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/clients/{client_id}/get_details")
async def get_client_details(client_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM client WHERE user_id={client_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/cases/{case_id}/get_details")
async def get_case_details(case_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM cases WHERE case_id={case_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/cases/{case_id}/get_all_session_details")
async def get_all_sessions_details(case_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM sessions WHERE case_id={case_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/sessions/{session_id}/get_details")
async def get_session_details(session_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM sessions WHERE session_id={session_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.get("/therapist/{user_id}/get_details")
async def get_therapist_details(user_id: int):
    cur = connection_cursor()
    cur.execute(f'SELECT * FROM therapist WHERE user_id={user_id}')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.post("/cases/{case_id}/therapist/{user_id}")
async def create_adhoc_session(request: Request):
    body = await request.json()
    cur = connection_cursor()
    cur.execute(f'INSERT INTO sessions VALUES ()')
    results = cur.fetchall()    
    for row in results:
        print(row)
    return results


@app.post("/sessions/{session_id}/checkin")
def checkin_therapist(session_id: int, request: input_data):
    cur = connection_cursor()
    try:
        query = f"UPDATE [sessions] SET checkin_time=\'{request.body['checkin_time']}\', checkin_loc=\'{request.body['checkin_loc']}\' WHERE session_id={session_id}"
        print(query)
        cur.execute(query)
        results = cur.fetchall()
        for row in results:
            print(row)
        return results
    except Exception as err:
        print(f"Exception: {err}")


@app.post("/sessions/{session_id}/checkout")
def checkout_therapist(session_id: int, request: input_data):
    cur = connection_cursor()
    cur.execute(f"UPDATE sessions SET checkout_time={request.body['checkout_time']}, checkout_loc={request.body['checkout_loc']} WHERE session_id={session_id}")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.post("/sessions/{session_id}/sos")
def sos_therapist(session_id: int, request: input_data):
    cur = connection_cursor()
    cur.execute(f"UPDATE sessions SET sos_time={request.body['sos_time']}, sos_loc={request.body['sos_loc']} WHERE session_id={session_id}")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/cases/referred")
async def cases_referred():
    cur = connection_cursor()
    cur.execute(f"SELECT COUNT([dbo].[cases].[case_id]) FROM [dbo].[cases] where [dbo].[cases].[case_status] = 'referred to nhs'")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/cases/closed")
async def cases_closed():
    cur = connection_cursor()
    cur.execute(f"SELECT COUNT([dbo].[cases].[case_id]) FROM [dbo].[cases] where [dbo].[cases].[case_status] = 'closed'")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/cases/funds")
async def cases_funds():
    cur = connection_cursor()
    cur.execute(f"SELECT COUNT([dbo].[cases].[case_id]) FROM [dbo].[cases] where [dbo].[cases].[case_status] = 'waiting for funds'")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/cases/counsellor")
async def cases_counsellor():
    cur = connection_cursor()
    cur.execute(f"SELECT COUNT([dbo].[cases].[case_id]) FROM [dbo].[cases] where [dbo].[cases].[case_status] = 'waiting for counsellor'")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results


@app.get("/cases/highrisk")
async def cases_highrisk():
    cur = connection_cursor()
    cur.execute(f"SELECT COUNT(*) FROM [dbo].[client] FULL OUTER JOIN (SELECT user_id, lateststatusdate = max(updated_at) FROM [dbo].[cases]  group by user_id) as a ON [dbo].[client].[user_id] = a.[user_id] JOIN [dbo].[cases] ON [dbo].[client].[user_id] = [dbo].[cases].[user_id] WHERE total_riskscore > 70 and [dbo].[cases].[case_status] in ('waiting for funds')")
    results = cur.fetchall()
    for row in results:
        print(row)
    return results