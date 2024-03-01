import EventItem from "../components/EventItem";
import {json, useRouteLoaderData} from "react-router-dom";
import PageContent from "../components/PageContent";

const EventDetailPage = () => {
    const loaderData = useRouteLoaderData("event-detail");
    const event = loaderData.event;
    return (
        <PageContent title={`Event Detail ${event.id} Page`}>
            <EventItem event={event} />
        </PageContent>
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
