import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams(); // Get the id from the URL

    useEffect(() => {
        async function fetchEvent() {
            const response = await fetch(`http://localhost:8080/events/${id}`);
            if (!response.ok){
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setEvent(data.event);
        }

        fetchEvent();
    }, [id]);
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>Edit Event</h1>
        {event && <EventForm method={'patch'} event={event} />}
        </div>
    );
}

export default EditEventPage;
