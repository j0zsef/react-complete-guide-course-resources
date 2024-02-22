import EventsList from "../components/EventsList";
import {json, useLoaderData} from "react-router-dom";

const EventsPage = () => {
    const loaderData = useLoaderData();
    const events = loaderData.events;

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Events</h1>
            <EventsList events={events}/>
        </div>
    );
};

export default EventsPage;

export async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw json({message: "Failed to fetch events!"}, {status: 500});
    }
    return response;
}
