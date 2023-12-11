export default function TaskList({ tasks, onTaskDelete }) {
  const handleTaskDelete = function(index) {
      return () => onTaskDelete(index);
  }

  const taskList = tasks.map((task, index) => {
    return (
      <li className="flex justify-between my-4" key={index}>
        <b>{task}</b>
        <button onClick={handleTaskDelete(index)} className="text-stone-700 hover:text-red-500">Clear</button>
      </li>
    );
  });
  return <ul>{taskList}</ul>;
}
