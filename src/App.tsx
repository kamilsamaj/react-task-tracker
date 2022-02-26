import React, { MouseEventHandler, useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import Header from "./components/Header";
import { TaskIface } from "./components/Task";

const backendUrl = "http://localhost:5000"; // local API json server

function App() {
  const initTasks: TaskIface[] = [];
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(initTasks);

  const fetchTasks = async () => {
    const res = await fetch(`${backendUrl}/tasks`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const addTask = async (task: {
    text: string;
    day: string;
    reminder: boolean;
  }) => {
    console.log(task);
    const res = await fetch(`${backendUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data: TaskIface = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = (
    id: number
  ): MouseEventHandler<SVGElement> | undefined => {
    fetch(`${backendUrl}/tasks/${id}`, {
      method: "DELETE",
    }).then();
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
