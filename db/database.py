from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
import pymssql

load_dotenv('db\\.env')

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

from sqlalchemy import URL

# url_object = URL.create(
#     "mssql+pymssql",
#     username=DB_USER,
#     password=DB_PASSWORD,  # plain (unescaped) text
#     host=DB_HOST,
#     database=DB_NAME,
# )



# engine = create_engine(url_object, echo=True)
# print(engine)
# connection = engine.connect()
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()