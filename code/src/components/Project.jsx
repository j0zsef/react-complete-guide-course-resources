import { useState } from "react";
import Task from "./Task.jsx";

export default function Project({ project }) {
  const [tasks, setTasks] = useState([]);

  const addTask = function () {
    let task = {};
    setTasks(function (previousTasks) {
      return [task, ...previousTasks];
    });
  };

  return (
    <>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-stone-600">
              {project.title}
            </h1>
            <button className="text-stone-700 hover:text-red-500 my-4">
              Delete
            </button>
          </div>
          <h2 className="text-xl font-bold text-stone-500 my-4">
            {project.dueDate}
          </h2>
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.description}
          </p>
        </header>
        <div>
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
          <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
          <button
            className="text-stone-700 hover:text-stone-500 mx-4"
            onClick={addTask}
          >
            Add Task
          </button>
          <div className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {tasks.filter((task) => {
              return <Task task={task} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
