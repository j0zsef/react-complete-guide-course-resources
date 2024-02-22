import {useRouteLoaderData} from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
    const loaderData = useRouteLoaderData("event-detail");
    const event = loaderData.event;

    return (
        <div>
        <h1 style={{textAlign: "center"}}>Edit Event</h1>
        {event && <EventForm method='patch' event={event} />}
        </div>
    );
};

export default EditEventPage;
