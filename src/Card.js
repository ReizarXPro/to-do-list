import React, { useState, useEffect } from "react";

export default function Card({ task, index, handleEdit, handleDelete }) {
  return (
    <div
      key={index}
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
      }}
    >
      <div>
        <button
          style={{
            borderRadius: "10%",
            width: "5rem",
            height: "3rem",
            backgroundColor: "#FF6347",
            border: "solid",
            borderBlockColor: "rgb(22, 16, 35)",
            margin: "10px",
            float: "right",
          }}
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          style={{
            borderRadius: "10%",
            width: "5rem",
            height: "3rem",
            backgroundColor: "#FF6347",
            border: "solid",
            borderBlockColor: "rgb(22, 16, 35)",
            float: "right",
            margin: "10px",
          }}
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>

      <h1
        style={{
          marginLeft: "15px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          height: "40px",
          width: "90%",
        }}
      >
        {task.name}
      </h1>
      <h3 style={{ margin: "10px", color: "white", marginLeft: "10px" }}>
        {task.description}
      </h3>
    </div>
  );
}
