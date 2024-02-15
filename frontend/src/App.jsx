import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  {path: "/", element: <Root/>, children: [
      { index: true, element: <HomePage />},
      { path: "events", element: <EventsRoot/>, children: [
              { path: "", element: <EventsPage />},
              { path: ":id", element: <EventDetailPage />},
              { path: "new", element: <NewEventPage />},
              { path: ":id/edit", element: <EditEventPage />},
          ]}
    ],
  }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
