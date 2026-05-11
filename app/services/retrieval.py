from pathlib import Path
from sentence_transformers import SentenceTransformer
import numpy as np

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

model = SentenceTransformer("all-MiniLM-L6-v2")

documents = []

def load_documents():
    global documents

    for file in DATA_DIR.glob("*.txt"):

        with open(file, "r", encoding="utf-8") as f:
            content = f.read()

        documents.append({
            "filename": file.name,
            "content": content,
            "embedding": model.encode(content)
        })

load_documents()

def cosine_similarity(a, b):
    return np.dot(a, b) / (
        np.linalg.norm(a) * np.linalg.norm(b)
    )

def retrieve_context(query, top_k=3):

    query_embedding = model.encode(query)

    scored_docs = []

    for doc in documents:

        score = cosine_similarity(
            query_embedding,
            doc["embedding"]
        )

        scored_docs.append({
            "content": doc["content"],
            "score": score
        })

    scored_docs = sorted(
        scored_docs,
        key=lambda x: x["score"],
        reverse=True
    )

    top_docs = scored_docs[:top_k]

    return "\n\n".join(
        [doc["content"] for doc in top_docs]
    )