import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;