import Message from "./Message";

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.length === 0 ? (
        <p className="empty">No messages yet.</p>
      ) : (
        messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg}
          />
        ))
      )}
    </div>
  );
}

export default ChatBox;