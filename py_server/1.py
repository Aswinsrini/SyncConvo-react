from openai import OpenAI

client = OpenAI(
    api_key="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",
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "2+4",
        }
    ],
    model="gpt-3.5-turbo",
)
print(chat_completion.choices[0].message.content)
