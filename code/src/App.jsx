import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
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

        {showAddProject && <AddProject addProjects={addProjects} />}
        {selectedProject}
        {!showAddProject && !selectedProject && (
          <GetStarted onAddProject={addProject} />
        )}
      </main>
    </>
  );
}

export default App;
