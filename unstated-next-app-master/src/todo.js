import React, { useEffect, useState } from "react";
import { StoreContainer } from "./store";
import { axios } from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TodoComponent = () => {
  const todo = StoreContainer.useContainer();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    todo.deneme = event.target.value;
  };

  useEffect(() => {
    todo.getDeneme();
  }, []);

  console.log(todo.bolum);

  return (
    <div>
      <p> Add Todos </p>
      <p>Deneme</p>
      <input type="text" value={todo.item} onChange={todo.handleTodo} />{" "}
      <button onClick={todo.handleSubmit}> Add </button>{" "}
      <button onClick={todo.updateDeneme}> Deneme</button>{" "}
      <div>
        <p> Dear {todo.name}, here are your current tasks; </p>{" "}
        {todo.todos.map((item) => {
          return (
            <ul key={item.id}>
              <li> {item.title} </li>{" "}
            </ul>
          );
        })}{" "}
      </div>{" "}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={todo.age}
            label="Age"
            onChange={todo.handleInputAge}
          >
            {todo.bolum && todo.bolum.length > 0 ? (
              todo.bolum.map((deneme) => (
                <MenuItem value={deneme.categoryName}>
                  {deneme.categoryName}
                </MenuItem>
              ))
            ) : (
              <div></div>
            )}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default TodoComponent;
