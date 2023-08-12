"use client";

import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { getAllTodos } from "@/lib/actions/todo.actions";

type Data = {
  _id: number;
  content: string;
  done: boolean;
};

export default function TodoList() {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await getAllTodos();
      return data;
    },
  });

  return (
    <div>
      {todos?.map((todo) => {
        return (
          <TodoItem key={todo._id} content={todo.content} done={todo.done} />
        );
      })}
    </div>
  );
}
function fetchTodos(): { data: any } | PromiseLike<{ data: any }> {
  throw new Error("Function not implemented.");
}
