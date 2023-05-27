"use client";

const TodoItem = ({ id, title, complete, toggleTodo }) => {
  return (
    <li className="flex items-center gap-1 ">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};
export default TodoItem;
