"use client";

import { createTodo, getAllTodos } from "@/lib/actions/todo.actions";
import { ApiRequest } from "@/lib/validators/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Data {
  content: string;
  done: boolean;
}

export default function CreateTodo() {
  const [content, setContent] = useState<string | any>("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const payload: ApiRequest = { content, done: false };
      return await createTodo(payload);
    },
    onSettled: () => {
      setContent("");
      queryClient.invalidateQueries();
    },
  });
  return (
    <form
      className="flex gap-4 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        mutate(content);
      }}
    >
      <input
        placeholder="add todo..."
        type="text"
        className="rounded-xl p-2 text-black w-80"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="p-2 border-white border-2 rounded-xl">create</button>
    </form>
  );
}
