import Sidebar from "./components/Sidebar.jsx";
import { useState, useRef } from "react";
import AddProject from "./components/AddProject.jsx";
import GetStarted from "./components/GetStarted.jsx";

function App() {
  const [showAddProject, setAddProject] = useState(false);
  const [projects, addProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const addProject = function () {
    setAddProject(true);
    setSelectedProject(undefined);
  };

  const handleSubmitProject = function (project) {
    addProjects(function (previousProjects) {
      return [...previousProjects, project];
    });
    setAddProject(false);
  };

  const handleSelectedProject = function (selectedProject) {
    setSelectedProject(selectedProject);
  };
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onAddProject={addProject}
          projects={projects}
          onSelectedProject={handleSelectedProject}
        />
        {showAddProject && <AddProject onSubmitProject={handleSubmitProject} />}
        {selectedProject}
        {!showAddProject && !selectedProject && (
          <GetStarted onAddProject={addProject} />
        )}
      </main>
    </>
  );
}

export default App;
