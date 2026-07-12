# Realtime Chat Application

A real-time chat application built using **React**, **Node.js**, **Express.js**, **Socket.io**, and **SQLite**. The application allows users to exchange messages instantly while storing chat history for persistence.

---

## Features

- Real-time messaging using Socket.io
- Send and receive messages instantly
- View previous chat history after refreshing
- Display message timestamps
- REST API for fetching and sending messages
- SQLite database for persistent message storage
- Clean and modular project structure
- Error handling for API requests

---

## Tech Stack

### Frontend
- React (Vite)
- Axios
- Socket.io Client
- CSS

### Backend
- Node.js
- Express.js
- Socket.io
- SQLite3
- CORS
- dotenv

---

## Project Structure

```
Realtime-Chat-App/

├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── socket/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/Realtime-Chat-App.git
cd Realtime-Chat-App
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```
PORT=5000
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## REST API

### Get Chat History

```
GET /api/messages
```

Returns all previously stored messages.

---

### Send Message

```
POST /api/messages
```

Request Body

```json
{
  "username": "Lucky",
  "text": "Hello Everyone!"
}
```

---

## Real-Time Events

### Client → Server

```
send_message
```

Payload

```json
{
  "username": "Lucky",
  "text": "Hello!"
}
```

---

### Server → Client

```
receive_message
```

Broadcasts the newly stored message to all connected clients.

---

## Database

The project uses **SQLite** for persistent message storage.

Database file:

```
backend/chat.db
```

---

## Design Decisions

- Socket.io is used for instant message delivery.
- SQLite is used for lightweight local data persistence.
- Express REST APIs are used for fetching chat history.
- Modular folder structure improves maintainability and readability.
- Chat history is loaded when the application starts.
- New messages are broadcast to all connected clients without page refresh.

---

## Assumptions

- Users enter a username before chatting.
- Authentication is not implemented.
- All connected users share a common chat room.
- Backend and frontend run locally.

---

## Future Improvements

- User authentication
- Online/Offline status
- Typing indicator
- Read receipts
- Private chats
- File and image sharing
- Message deletion and editing
- Deploy backend and frontend

---

## Author

Moluguri Pranitha
