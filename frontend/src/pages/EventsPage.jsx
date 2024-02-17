import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
    const loaderData = useLoaderData();
    const events = loaderData.events;

    return (
        <div>
        <h1 style={{textAlign: "center"}}>Events</h1>
        <EventsList events={events} />
        </div>
    );
};

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok){
        throw new Error("Could not fetch events!");
    }
    return response;
}
