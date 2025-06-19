function Message({ id, message, likes, dislikes, like, dislike }) {
  return (
    <div>
      {message}
      <button onClick={() => like(id)}>{likes} 👍</button>
      <button onClick={() => dislike(id)}>{dislikes} 👎</button>
    </div>
  );
}

export default Message;
