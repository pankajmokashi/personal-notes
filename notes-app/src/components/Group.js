import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGroup } from "../actions/groupActions";
import { getNotes } from "../actions/noteActions";

function Group({ group }) {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.groups.selectedGroup);

  const handleGroupClick = () => {
    dispatch(setSelectedGroup(group));
    dispatch(getNotes(group._id));
  };

  const handleExtractPrefixes = (words) => {
    words = words.split(" ");
    const extractedPrefixes = words.map((word) => word[0].toUpperCase());
    return extractedPrefixes;
  };

  return (
    <div
      className="group"
      onClick={handleGroupClick}
      style={{
        backgroundColor:
          selectedGroup?._id === group._id ? "#DCDCDC" : "#FFFFFF",
      }}
    >
      <div className="prefix" style={{ backgroundColor: `${group.color}` }}>
        {handleExtractPrefixes(group.name)}
      </div>
      <div className="name">{group.name}</div>
    </div>
  );
}

export default Group;
