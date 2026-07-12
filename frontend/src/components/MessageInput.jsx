import { useState } from "react";

function MessageInput({ socket, username }) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", {
      username,
      text,
    });

    setText("");
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default MessageInput;