from typing import Union

from fastapi import Depends, FastAPI

from fastapi.middleware.cors import CORSMiddleware

# from sqlalchemy.orm import Session

import pymssql

app = FastAPI(version="1.0.2")

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


# async def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


@app.get("/helloworld")
def test():
    return {"Hello": "World"}

@app.get("/clients/{client_id}/get_all_cases")
async def get_client_cases(client_id: int):
    con = pymssql.connect(server='whizbang-db-server.database.windows.net', database='whizbang-database', user='whizbangadmin', password='WA@123456')
    cur = con.cursor()
    cur.execute(f'SELECT top(1) * FROM cases WHERE user_id={client_id} order by updated_at asc')
    # cur.execute("SELECT Distinct TABLE_NAME FROM information_schema.TABLES")
    # print(res)
    results = cur.fetchall()    
    for row in results:
            print(row)
    return results

