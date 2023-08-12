type TodoProps = {
  content: string;
  done: boolean;
};

export default function TodoItem({ content, done }: TodoProps) {
  return (
    <div>
      <input type="checkbox" checked={done} />
      <h2>{content}</h2>
    </div>
  );
}
