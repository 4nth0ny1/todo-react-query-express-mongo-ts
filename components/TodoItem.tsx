import { toggleTodo } from "@/lib/actions/todo.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type TodoProps = {
  _id: string;
  content: string;
  done: boolean;
};

export default function TodoItem({ _id, content, done }: TodoProps) {
  const [checked, setChecked] = useState(done);
  const queryClient = useQueryClient();

  const { mutate: toggleMutation } = useMutation({
    mutationFn: async () => {
      const payload = { _id, done: checked };
      return await toggleTodo(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked({ checked: e.target.checked })}
      />
      <h2>{content}</h2>
    </div>
  );
}
