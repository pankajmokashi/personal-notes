import React, { useState } from "react";
import Icon from "../assets/Vector.js";
import Note from "./Note.js";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../actions/noteActions.js";

function ShowNotes({ group }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const handleExtractPrefixes = (words) => {
    words = words.split(" ");
    const extractedPrefixes = words.map((word) => word[0].toUpperCase());
    return extractedPrefixes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && group._id) {
      dispatch(addNote(text, group._id));
      setText("");
    }
  };

  return (
    <div className="show-notes">
      <div className="group header">
        <div className="prefix" style={{ backgroundColor: `${group.color}` }}>
          {handleExtractPrefixes(group.name)}
        </div>
        <div className="name">{group.name}</div>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <Note note={note} key={note._id} />
        ))}
      </div>
      <div className="enter-notes">
        <div className="text-sec">
          <textarea
            placeholder="Enter your text here ....."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button disabled={text === "" ? true : false} onClick={handleSubmit}>
            <Icon fillColor={text === "" ? "#ABABAB" : "#001f8b"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowNotes;
