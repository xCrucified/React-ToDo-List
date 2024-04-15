import React from "react";
import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"
import "./App.css"

export default function App() {

  return (
    <>
      <h1>My To Do List</h1>
      <TaskList />
      <AddTask />
    </>
  );
}
