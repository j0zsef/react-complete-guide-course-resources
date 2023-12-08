export default function TaskList({ tasks }) {
  const taskList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <b>{task}</b>
        <button>Clear</button>
      </li>
    );
  });
  return <ul>{taskList}</ul>;
}
