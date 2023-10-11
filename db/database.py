from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

from sqlalchemy import URL

url_object = URL.create(
    "mysql+mysqlconnector",
    username=DB_USER,
    password=DB_PASSWORD,  # plain (unescaped) text
    host=DB_HOST,
    database=DB_NAME,
    # ssl_ca="C:\\Users\\Dell\\Downloads\\DigiCertGlobalRootG2.crt.pem"
)

#SQLALCHEMY_DATABASE_URL = f"mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
# print(SQLALCHEMY_DATABASE_URL)

engine = create_engine(url_object, echo=True)
print(engine)
connection = engine.connect()
print(connection)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()