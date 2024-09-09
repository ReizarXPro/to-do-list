import React, { useState, useEffect } from "react";
import Card from "./Card";
import tasks from "./taskes";

function App() {
  const [Tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [TaskInfo, setTaskInfo] = useState({
    name: "",
    description: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInfo({
      ...TaskInfo,
      [name]: value,
    });
  };

  const handleAddTask = () => {
    setTasks([...Tasks, TaskInfo]);
    setTaskInfo({
      name: "",
      description: "",
    });
  };

  const handleUpdateTask = () => {
    if (editingIndex !== null) {
      const updatedTasks = Tasks.map((task, index) =>
        index === editingIndex ? TaskInfo : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setTaskInfo({
        name: "",
        description: "",
      });
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = Tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setTaskInfo(Tasks[index]);
    setEditingIndex(index);
  };

  const handleBoth = () => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, TaskInfo];
      setTimeout(() => {
        setEditingIndex(updatedTasks.length - 1);
        setTaskInfo(updatedTasks[updatedTasks.length - 1]);
      }, 0);
      return updatedTasks;
    });

    setTaskInfo({
      name: "",
      description: "",
    });
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/STATIC7.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
    minHeight: "675px",
    width: "1455px",
  };

  return (
    <div style={backgroundImageStyle}>
      <div
        hidden={editingIndex === null}
        style={{
          position: "sticky",
          height: "50rem",
          width: "90rem",
          opacity: "80%",

          top: "1px",
          left: "1px",
          zIndex: "9999",
          backgroundColor: "black",
        }}
      >
        <div
          hidden={editingIndex === null}
          style={{
            height: "20rem",
            width: "20rem",
            backgroundColor: "#008080",
            border: "solid",
            borderColor: "rgb(22, 16, 35)",
            margin: "10px",
            borderTopLeftRadius: "30%",
            borderTopRightRadius: "10%",
            borderBottomRightRadius: "30%",
            borderBottomLeftRadius: "10%",
            position: "sticky",
            zIndex: "9999",
            top: "30%",
            left: "40%",
            opacity: "100%",
          }}
        >
          <center>
            <button
              style={{
                marginTop: "0px",
                borderRadius: "10%",
                width: "5rem",
                height: "3rem",
                backgroundColor: "#FF6347",
                border: "solid",
                borderBlockColor: "rgb(22, 16, 35)",
                margin: "10px",
                float: "right",
                color: "black",
              }}
              type="button"
              onClick={handleUpdateTask}
              disabled={editingIndex === null}
            >
              Update Task
            </button>
          </center>
          <center>
            <input
              type="text"
              onChange={handleChange}
              value={TaskInfo.name}
              name="name"
              placeholder="Title"
              style={{
                margin: "20px",
                color: "white",
                height: "30px",
                width: "60%",
                borderRadius: "10px",
                backgroundColor: "black",
                opacity: "70%",
              }}
            />
          </center>

          <input
            type="text"
            onChange={handleChange}
            value={TaskInfo.description}
            name="description"
            placeholder="Description"
            style={{
              marginLeft: "15px",
              color: "white",
              marginTop: "30px",
              height: "40px",
              width: "90%",
              backgroundColor: "black",
              opacity: "70%",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {tasks.map((task, index) => (
          <Card
            key={index}
            task={task}
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
        <div
          style={{
            height: "20rem",
            width: "20rem",
            backgroundColor: "#008080",
            border: "solid",
            borderColor: "rgb(22, 16, 35)",
            margin: "10px",
            borderTopLeftRadius: "30%",
            borderTopRightRadius: "10%",
            borderBottomRightRadius: "30%",
            borderBottomLeftRadius: "10%",
            opacity: "0.6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleBoth}
        >
          <div
            style={{
              borderRadius: "30%",
              height: "15rem",
              width: "15rem",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white", fontSize: "100px" }}>+</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
