function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <tr>
      <td className={task.completed ? "completed" : ""}>
        {task.text}
      </td>

      <td>
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </td>

      <td>
  <button
    className="action-btn complete"
    onClick={() => toggleComplete(task.id)}
  >
    ✔
  </button>

  <button
    className="action-btn delete"
    onClick={() => deleteTask(task.id)}
  >
    ❌
  </button>
</td>
    </tr>
  );
}

export default TaskItem;