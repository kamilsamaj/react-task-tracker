import React, { MouseEventHandler } from "react";
import Task, { TaskIface } from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: TaskIface[];
  onDelete: (id: number) => MouseEventHandler<SVGElement> | undefined;
  onToggle: (id: number) => MouseEventHandler<SVGElement> | undefined;
}) => {
  return (
    <>
      {tasks.map((task: TaskIface) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
