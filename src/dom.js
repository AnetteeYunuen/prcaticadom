import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const getRandomColor = () => {
  const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Domm = () => {
  const [elements, setElements] = useState([]);

  const addElement = () => {
    const newElement = {
      id: Date.now(),
      type: "Nuevo",
      color: getRandomColor(),
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  const clearElements = () => {
    setElements([]);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Anette Yunuen Ruiz Martinez</h2>
      <h2>Manipulación de DOM</h2>
      <Button onClick={addElement} type="primary" icon={<PlusOutlined />}>
        Agregar
      </Button>
      <Button
        onClick={clearElements}
        type="danger"
        icon={<DeleteOutlined />}
        style={{ marginLeft: "10px" }}
      >
        Vaciar 
      </Button>
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
        {elements.map((element) => (
          <li
            key={element.id}
            style={{
              backgroundColor: element.color,
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "#fff",
              margin: "5px 0", 
            }}
            onClick={() => removeElement(element.id)}
          >
            <span style={{ fontWeight: "bold" }}>Nuevo</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Domm;
