/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const TodoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    onInsert(input);
    onChangeInput("");
    e.preventDefault();
  };
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};
export default Todos;
