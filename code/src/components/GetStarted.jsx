import icon from "../assets/no-projects.png";

export default function GetStarted({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={icon} alt="" />
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-4">
        Selected a project or get started with a new one
      </p>
      <button
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={onAddProject}
      >
        Create new project
      </button>
    </div>
  );
}
