import EventItem from "../components/EventItem";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const EventDetailPage = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams(); // Get the id from the URL

    useEffect(() => {
        async function fetchEvent() {
            const response = await fetch(`http://localhost:8080/events/${id}`);
            if (!response.ok){
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            setEvent(data.event);
        }

        fetchEvent();
    }, [id]);
    return (
        <div>
            {event && <h1 style={{textAlign: "center"}}>Event Detail {event.id} Page</h1>}
            {event && <EventItem event={event} />}
        </div>
    );
};

export default EventDetailPage;
