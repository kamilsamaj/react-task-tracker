import { FaTimes } from "react-icons/fa";
import { MouseEventHandler } from "react";

const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: { id: number; text: string; day: string; reminder: boolean };
  onDelete: (id: number) => MouseEventHandler<SVGElement> | undefined;
  onToggle: (id: number) => MouseEventHandler<SVGElement> | undefined;
}) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={(ev) => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={(ev) => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
