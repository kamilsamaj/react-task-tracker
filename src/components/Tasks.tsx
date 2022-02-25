import React, { MouseEventHandler } from "react";
import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: { id: number; text: string; day: string; reminder: boolean }[];
  onDelete: (id: number) => MouseEventHandler<SVGElement> | undefined;
  onToggle: (id: number) => MouseEventHandler<SVGElement> | undefined;
}) => {
  return (
    <>
      {tasks.map(
        (task: {
          id: number;
          text: string;
          day: string;
          reminder: boolean;
        }) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
      )}
    </>
  );
};

export default Tasks;
