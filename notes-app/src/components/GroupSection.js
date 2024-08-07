import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupForm from "./GroupForm";
import { getGroups, setSelectedGroup } from "../actions/groupActions";
import Group from "./Group";

function GroupSection() {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div className="group-sec">
      <div className="logo" onClick={() => dispatch(setSelectedGroup(""))}>
        Pocket Notes
      </div>
      <div className="group-list">
        {groups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>
      <GroupForm />
    </div>
  );
}

export default GroupSection;
