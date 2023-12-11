import Sidebar from "./components/Sidebar.jsx";
import { useState, useRef } from "react";
import AddProject from "./components/AddProject.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [showAddProject, setAddProject] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [projects, addProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  const addProject = function () {
    setShowProject(false);
    setAddProject(true);
  };

  const handleSubmitProject = function (project) {
    addProjects(function (previousProjects) {
      return [...previousProjects, project];
    });
    setSelectedProject(project);
    setAddProject(() => false);
    setShowProject(() => true);
  };

  const handleSelectedProject = function (selectedProjectID) {
    setSelectedProject(function () {
      return projects.filter((project) => project.id === selectedProjectID)[0];
    });
    setAddProject(() => false);
    setShowProject(() => true);
  };

  const handleDeleteProject = function () {
    addProjects(function (previousProjects){
      return previousProjects.filter((project) => project.id !== selectedProject.id);
    });
    setSelectedProject({});
    addProject();
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
        {showProject && (
          <Project project={selectedProject} onDeleteProject={handleDeleteProject} />
        )}
        {!showAddProject && !showProject && (
          <GetStarted onAddProject={addProject} />
        )}
      </main>
    </>
  );
}

export default App;
