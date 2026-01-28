# 📝 Note-App

> A full-stack notes application built with **Django REST Framework** and **React**.  
> Allows user registration, JWT authentication, and personal notes management.

---

## 🚀 Features

- **User Registration** – Create a new account
- **JWT Authentication** – Secure login and token refresh
- **Notes Management** – Authenticated users can:
  - List their notes
  - Create new notes
  - Delete their own notes
- **Permissions**
  - Registration is public
  - Notes endpoints require authentication

---

## 🖥 Project Structure

Note-App/
├── backend/ # Django API backend
├── frontend/ # React app
├── venv/ # Python virtual environment (ignored in git)
├── .gitignore
└── README.md


---

## 📦 Prerequisites

- Python 3.8+
- Node.js & npm (or yarn)
- Git

---

## ⚡ Backend Setup (Django)

1. Navigate to the backend folder:

```bash
cd backend
Create and activate a virtual environment:

python -m venv venv
# macOS / Linux
source venv/bin/activate
# Windows (PowerShell)
venv\Scripts\Activate.ps1
Install dependencies:

pip install -r requirements.txt
Apply migrations:

python manage.py migrate
Run the development server:

python manage.py runserver
The API will be available at: http://localhost:8000

⚡ Frontend Setup (React)
Navigate to the frontend folder:

cd frontend
Install dependencies:

npm install
# or
yarn
Run the development server:

npm start
# or
yarn start
The frontend will open at: http://localhost:3000

Make sure the backend is running so the frontend can fetch data.

🧪 API Endpoints
User Registration
POST /api/user/register/
Request body example:

{
  "username": "yourusername",
  "email": "youremail@example.com",
  "password": "yourpassword"
}
JWT Authentication
Obtain token:

POST /api/token/
{
  "username": "yourusername",
  "password": "yourpassword"
}
Refresh token:

POST /api/token/refresh/
{
  "refresh": "<your-refresh-token>"
}
Notes (Authentication Required)
Method	Endpoint	Description
GET	/api/notes/	List all your notes
POST	/api/notes/	Create a new note
DELETE	/api/notes/<id>/	Delete a specific note
Header example:

Authorization: Bearer <your_access_token>
🛠 VSCode Setup Tips
Add this in .vscode/settings.json:

{
  "python.pythonPath": "backend/venv/bin/python",
  "editor.formatOnSave": true,
  "eslint.validate": ["javascript", "javascriptreact"],
  "files.exclude": {
    "venv/": true
  }
}
🎨 License
MIT License – see the LICENSE file for details.

