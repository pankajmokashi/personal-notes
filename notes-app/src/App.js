// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getGroups } from "./actions/groupActions";
// import { getNotes } from "./actions/noteActions";
// import GroupForm from "./components/GroupForm";
// import NoteForm from "./components/NoteForm";
// import GroupList from "./components/GroupList";

// const App = () => {
//   const dispatch = useDispatch();
//   const groups = useSelector((state) => state.groups.groups);
//   const notes = useSelector((state) => state.notes.notes);
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   useEffect(() => {
//     dispatch(getGroups());
//   }, [dispatch]);

//   useEffect(() => {
//     if (selectedGroup) {
//       dispatch(getNotes(selectedGroup));
//     }
//   }, [selectedGroup, dispatch]);

//   return (
//     <div className="App">
//       <GroupForm />
//       <GroupList groups={groups} onClick={setSelectedGroup}/>
//       <NoteForm selectedGroup={selectedGroup} />
//       <NoteList notes={notes} />
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import Modal from "react-modal";
import GroupSection from "./components/GroupSection";
import ChatSection from "./components/ChatSection";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="container">
      <GroupSection />
      <ChatSection />
    </div>
  );
}

export default App;
