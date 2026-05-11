import os

from groq import Groq
from dotenv import load_dotenv

from pathlib import Path

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

BASE_DIR = Path(__file__).resolve().parent.parent

PROMPT_PATH = BASE_DIR / "prompts" / "lumi_prompt.txt"

with open(PROMPT_PATH, "r", encoding="utf-8") as file:
    SYSTEM_PROMPT = file.read()

def generate_response(user_message: str, context: str):

    final_prompt = f"""
    Knowledge Base Context:
    {context}

    User Message:
    {user_message}
    """

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": final_prompt
            }
        ],
        temperature=0.8,
        max_tokens=700,
    )

    return completion.choices[0].message.content