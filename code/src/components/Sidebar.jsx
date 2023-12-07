export default function Sidebar({ onAddProject, projects, onSelectedProject }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h2>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onAddProject}
        >
          + Add Project
        </button>

        {projects.length > 0 && (
          <ul>
            {projects?.map((project) => (
              <li
                className="my-4 rounded-md p-4 mt-8 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-stone-100"
                key={project.id}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  );
}
