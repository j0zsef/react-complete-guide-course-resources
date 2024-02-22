import EventItem from "../components/EventItem";
import {json, useRouteLoaderData} from "react-router-dom";

const EventDetailPage = () => {
    const loaderData = useRouteLoaderData("event-detail");
    const event = loaderData.event;
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Event Detail {event.id} Page</h1>
            <EventItem event={event} />
        </div>
    );
};

export default EventDetailPage;

export async function eventDetailsLoader({params}) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`);
    if (!response.ok){
        throw json({message: "Failed to fetch event details!"}, {status: 500});
    }
    return response;
}
