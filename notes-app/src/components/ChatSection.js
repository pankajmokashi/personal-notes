import React from "react";
import { useSelector } from "react-redux";
import ShowNotes from "../components/ShowNotes";

function ChatSection() {
  const selectedGroup = useSelector((state) => state.groups.selectedGroup);

  return (
    <div className="chat-sec">
      {selectedGroup ? (
        <ShowNotes group={selectedGroup} />
      ) : (
        <div className="no-group">
          <img src="./img.png" alt="no-group" />
          <div className="title">Pocket Notes</div>
          <div>
            Send and receive messages without keeping your phone online.
          </div>
          <div>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatSection;
