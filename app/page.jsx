import Link from "next/link";
import { prisma } from "@/db";

import TodoList from "@/components/TodoList";

const getTodos = () => {
  return prisma.todo.findMany();
};

async function toggleTodo(id, complete) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function deleteTodo(id) {
  "use server";

  await prisma.todo.delete({ where: { id } });
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

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
