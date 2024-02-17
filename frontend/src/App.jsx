import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {path: "/", element: <Root/>, errorElement: <ErrorPage/>, children: [
      { index: true, element: <HomePage />},
      { path: "events", element: <EventsRoot/>, children: [
          { path: "", element: <EventsPage />, loader: eventsLoader },
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
