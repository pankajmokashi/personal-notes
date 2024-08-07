import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { addGroup } from "../actions/groupActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Poppins",
  },
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const GroupForm = () => {
  const [name, setName] = useState("");
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    const generatedColors = Array.from({ length: 6 }, () => getRandomColor());
    setColors(generatedColors);
  }, []);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(addGroup(name, selectedColor));
      setName("");
      setSelectedColor("");
      closeModal();
    }
  };

  return (
    <div>
      <div className="create-group-btn" onClick={openModal}>
        +
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="title">Create New Group</div>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <div>Create Group</div>
            <input
              type="text"
              placeholder="Group Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-div">
            <div>Choose Color</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {colors.map((color, index) => (
                <div
                  className="color-div"
                  key={index}
                  onClick={() => handleColorClick(color)}
                  style={{
                    backgroundColor: color,
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                    borderRadius: "12px",
                    border:
                      selectedColor === color ? "3px solid black" : "none",
                  }}
                />
              ))}
            </div>
          </div>
          <button className="add-btn" type="submit">
            Add Group
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default GroupForm;
