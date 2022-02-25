import { SyntheticEvent, useState } from "react";

const AddTask = ({
  onAdd,
}: {
  onAdd: (task: { text: string; day: string; reminder: boolean }) => void;
}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-input">Task</label>
        <input
          id="task-input"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="task-day-time">Day & Time</label>
        <input
          id="task-day-time"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(ev) => setDay(ev.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="task-set-reminder">Set Reminder</label>
        <input
          id="task-set-reminder"
          type="checkbox"
          checked={reminder}
          onChange={(ev) => setReminder(ev.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
