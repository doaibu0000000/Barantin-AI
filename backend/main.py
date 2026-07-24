import random
import string
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Barantin AI API")

# Setup CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for captchas (in production, use redis or DB)
captchas = {}

class LoginRequest(BaseModel):
    username: str
    password: str
    captcha_id: str
    captcha_value: str

@app.get("/")
def read_root():
    return {"message": "Welcome to Barantin AI API"}

@app.get("/api/auth/captcha")
def generate_captcha():
    chars = string.ascii_uppercase + string.digits
    captcha_val = ''.join(random.choice(chars) for _ in range(5))
    captcha_id = ''.join(random.choice(chars) for _ in range(10))
    
    captchas[captcha_id] = captcha_val
    
    return {
        "captcha_id": captcha_id,
        "captcha_value": captcha_val  # Note: normally we'd return an image, returning text for simplicity based on previous implementation
    }

@app.post("/api/auth/login")
def login(request: LoginRequest):
    # Validate Captcha
    if request.captcha_id not in captchas or captchas[request.captcha_id] != request.captcha_value.upper():
        raise HTTPException(status_code=400, detail="Captcha salah atau sudah kedaluwarsa")
    
    # Dummy authentication logic
    if request.username == "admin" and request.password == "admin":
        # Remove used captcha
        del captchas[request.captcha_id]
        return {"message": "Login berhasil", "token": "dummy-token-12345"}
    
    raise HTTPException(status_code=401, detail="Username atau password salah")

@app.get("/api/dashboard/summary")
def get_dashboard_summary():
    return {
        "dokumen_diproses": 142,
        "recent_activities": [
            {
                "id": "K-1029",
                "title": "Verifikasi Dokumen #K-1029",
                "time": "Hari ini, 09:41 WIB",
                "status": "success",
                "status_text": "Selesai"
            },
            {
                "id": "K-1030",
                "title": "Pengajuan Karantina #K-1030",
                "time": "Kemarin, 14:20 WIB",
                "status": "pending",
                "status_text": "Proses"
            }
        ]
    }
