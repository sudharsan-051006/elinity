from fastapi import APIRouter
from pydantic import BaseModel

from app.services.retrieval import retrieve_context
from app.services.groq_service import generate_response

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
async def chat(req: ChatRequest):
    context = retrieve_context(req.message)

    response = generate_response(
        user_message=req.message,
        context=context
    )

    return {
        "response": response
    }