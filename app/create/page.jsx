import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodos(data) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/");
}

const CreateTodo = () => {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">Create Todo</h1>
      </header>
      <form action={createTodos} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link href="/" className="btn-primary">
            Cancel
          </Link>
          <button type="submit" className="btn-primary">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
export default CreateTodo;
