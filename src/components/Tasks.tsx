import React, { MouseEventHandler } from "react";
import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
}: {
  tasks: { id: number; text: string; day: string; reminder: boolean }[];
  onDelete: (id: number) => MouseEventHandler<SVGElement> | undefined;
}) => {
  return (
    <>
      {tasks.map((task: any) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
