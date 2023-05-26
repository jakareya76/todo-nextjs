import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  // await prisma.todo.create({ data: { title: "test", complete: false } });

  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">TODOS</h1>
        <Link
          href="/create"
          className="px-4 py-2 border-2 border-slate-700 rounded uppercase duration-200 outline-none hover:bg-slate-700"
        >
          Create Todo
        </Link>
      </header>

      <ul className="pl-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
