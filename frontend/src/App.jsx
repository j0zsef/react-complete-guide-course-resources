import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {eventDetailsLoader} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import {newEventLoader} from "./components/EventForm";

const router = createBrowserRouter([
  {path: "/", element: <Root/>, errorElement: <ErrorPage/>, children: [
      { index: true, element: <HomePage />},
      { path: "events", element: <EventsRoot/>, children: [
          { path: "", element: <EventsPage />, loader: eventsLoader },
          { path: ":id", id: "event-detail", loader: eventDetailsLoader, children: [
                { index: true, element: <EventDetailPage />},
                { path: "edit", element: <EditEventPage />, action: newEventLoader},
          ]},
          { path: "new", element: <NewEventPage />, action: newEventLoader},
      ]}
    ],
  }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
