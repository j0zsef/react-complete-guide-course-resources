import Sidebar from "./components/Sidebar.jsx";
import { useState, useRef } from "react";
import AddProject from "./components/AddProject.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [showAddProject, setAddProject] = useState(false);
  const [showProject, setProject] = useState(false);
  const [projects, addProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const addProject = function () {
    setAddProject(true);
    setProject(false);
  };

  const handleSubmitProject = function (project) {
    addProjects(function (previousProjects) {
      return [...previousProjects, project];
    });
    setAddProject(false);
    setProject(true);
  };

  const handleSelectedProject = function (selectedProjectID) {
    setSelectedProject(function () {
      return projects.filter((project) => project.id === selectedProjectID)[0];
    });
  };

  const handleDeleteProject = function () {};
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onAddProject={addProject}
          projects={projects}
          onSelectedProject={handleSelectedProject}
        />
        {showAddProject && <AddProject onSubmitProject={handleSubmitProject} />}
        {showProject && (
          <Project project={selectedProject} onDelete={handleDeleteProject} />
        )}
        {!showAddProject && !selectedProject && (
          <GetStarted onAddProject={addProject} />
        )}
      </main>
    </>
  );
}

export default App;
