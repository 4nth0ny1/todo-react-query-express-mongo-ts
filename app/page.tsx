import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <h1>Todo React Query Mongo Express</h1>
      <hr></hr>
      <CreateTodo />
      <hr></hr>
      <TodoList />
    </main>
  );
}
