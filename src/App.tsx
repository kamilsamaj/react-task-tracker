import React, { MouseEventHandler, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import Header from "./components/Header";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task: { text: string; day: string; reminder: boolean }) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (
    id: number
  ): MouseEventHandler<SVGElement> | undefined => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
    return undefined;
  };

  const toggleReminder = (
    id: number
  ): MouseEventHandler<SVGElement> | undefined => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    return undefined;
  };

  return (
    <div className="container">
      <Header
        onAdd={() => {
          console.log("Setting showAddTask to:", !showAddTask);
          setShowAddTask(!showAddTask);
        }}
        title="Hello"
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
