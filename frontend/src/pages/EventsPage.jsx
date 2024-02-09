import EventsList from "../components/EventsList";
import {useEffect, useState} from "react";

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch('http://localhost:8080/events');
            if (!response.ok){
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setEvents(data.events);
        }

        fetchEvents();
    }, []);

    return (
        <div>
        <h1 style={{textAlign: 'center'}}>Events</h1>
        <EventsList events={events} />
        </div>
    );
}

export default EventsPage;
