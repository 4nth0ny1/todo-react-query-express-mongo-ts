type TodoProps = {
  content: string;
  done: boolean;
};

export default function TodoItem({ content, done }: TodoProps) {
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => console.log(e.target.checked)}
      />
      <h2>{content}</h2>
    </div>
  );
}
