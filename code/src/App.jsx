import Sidebar from "./components/Sidebar.jsx";
import { useState, useRef } from "react";
import AddProject from "./components/AddProject.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [showAddProject, setAddProject] = useState(false);
  const [projects, addProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  const handleShowAddProject = function () {
    setAddProject(() => true);
    setSelectedProject(() => {});
  };

  const handleAddProject = function (project) {
    addProjects(function (previousProjects) {
      return [...previousProjects, project];
    });
    setSelectedProject(() => project);
    setAddProject(() => false);
  };

  const handleCancelProject = function () {
    setAddProject(() => false);
  };

  const handleSelectedProject = function (selectedProjectID) {
    setSelectedProject(function () {
      return projects.filter((project) => project.id === selectedProjectID)[0];
    });
    setAddProject(() => false);
  };

  const handleDeleteProject = function () {
    addProjects(function (previousProjects) {
      return previousProjects.filter(
        (project) => project.id !== selectedProject.id,
      );
    });
    setSelectedProject(() => {});
  };

  function isObjEmpty(obj) {
    if (obj === undefined || obj === null) {
      return true;
    }
    return Object.keys(obj).length === 0;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onAddProject={handleShowAddProject}
          projects={projects}
          onSelectedProject={handleSelectedProject}
        />
        {showAddProject && (
          <AddProject
            onCancelProject={handleCancelProject}
            onAddProject={handleAddProject}
          />
        )}
        {!isObjEmpty(selectedProject) && (
          <Project
            project={selectedProject}
            onDeleteProject={handleDeleteProject}
          />
        )}
        {!showAddProject && isObjEmpty(selectedProject) && (
          <GetStarted onAddProject={handleShowAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
