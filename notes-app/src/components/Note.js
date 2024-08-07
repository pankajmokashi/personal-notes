import React from "react";

const Note = ({ note }) => {
  const time = new Date(note.createdAt).toLocaleString().split(",")[1];

  const date = new Date(note.createdAt).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="note">
      <div className="text">{note.text}</div>
      <small className="date-time">
        {date} <span className="dot"></span>
        {time}
      </small>
    </div>
  );
};

export default Note;
