function Message({ message }) {
  return (
    <div className="message">
      <h4>{message.username}</h4>

      <p>{message.text}</p>

      <span>
        {new Date(message.createdAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>
    </div>
  );
}

export default Message;