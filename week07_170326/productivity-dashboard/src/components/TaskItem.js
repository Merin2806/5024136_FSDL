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
        <button onClick={() => toggleComplete(task.id)}>
          ✔
        </button>

        <button onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;