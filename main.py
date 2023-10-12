from typing import Union

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from db.database import Base, SessionLocal

app = FastAPI()

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


@app.get("/helloworld")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}