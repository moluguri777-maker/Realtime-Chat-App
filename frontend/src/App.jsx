import { useEffect, useState } from "react";
import { getMessages } from "./api/chatApi";
import socket from "./hooks/useSocket";

import ChatBox from "./components/ChatBox";
import MessageInput from "./components/MessageInput";

function App() {
  const [messages, setMessages] = useState([]);

  const [username] = useState(() => {
    const name = prompt("Enter your username");
    return name || "Anonymous";
  });

  useEffect(() => {
    loadMessages();

    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const loadMessages = async () => {
    try {
      const res = await getMessages();
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">

      <h1>Realtime Chat App</h1>

      <ChatBox messages={messages} />

      <MessageInput
        socket={socket}
        username={username}
      />

    </div>
  );
}

export default App;