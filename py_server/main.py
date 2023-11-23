from typing import Union
from fastapi import FastAPI
from openai import OpenAI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
client = OpenAI(
    api_key="",
)

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/chat/{message}')
def read_root(message: str):
    print("mess ", message)
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": message,
            }
        ],
        model="gpt-3.5-turbo",
    )
    print(chat_completion.choices[0].message.content)
    return {"from_server": f'{chat_completion.choices[0].message.content}'}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
