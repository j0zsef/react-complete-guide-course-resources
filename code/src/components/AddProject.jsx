import { useRef } from "react";

export default function AddProject({ onAddProject, onCancelProject }) {
  const projectTitle = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleAddProject = function () {
    onAddProject({
      title: projectTitle.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      id: Math.random(),
      tasks: [],
    });
  };

  return (
    <>
      <menu className="w-[35rem] mt-16">
        <div className="mt-4 text-right">
          <div className="space-x-4">
            <button
              onClick={onCancelProject}
              className="text-stone-500 hover:text-stone-950"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </div>
          <div className="mt-4 text-left">
            <label className="text-sm font-bold uppercase text-stone-500">
              Title
            </label>
            <input
              ref={projectTitle}
              type="text"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
          <div className="mt-4 text-left">
            <label className="text-sm font-bold uppercase text-stone-500">
              Description
            </label>
            <textarea
              ref={description}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
          <div className="mt-4 text-left">
            <label className="text-sm font-bold uppercase text-stone-500">
              Due Date
            </label>
            <input
              ref={dueDate}
              type="date"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
        </div>
      </menu>
    </>
  );
}
