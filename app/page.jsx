import Link from "next/link";
import { prisma } from "@/db";

import TodoItem from "@/components/TodoItem";

const getTodos = () => {
  return prisma.todo.findMany();
};

async function toggleTodo(id, complete) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">TODOS</h1>
        <Link href="/create" className="btn-primary">
          Create Todo
        </Link>
      </header>

      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
