"use client";

const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
  deleteTodoFromState,
}) => {
  return (
    <li className="flex items-center gap-1 py-2">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="text-xl cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <span
        className="border px-1 cursor-pointer hover:bg-red-500 hover:border-red-500"
        onClick={() => {
          deleteTodo(id);
          deleteTodoFromState(id);
        }}
      >
        Delete
      </span>
    </li>
  );
};
export default TodoItem;
