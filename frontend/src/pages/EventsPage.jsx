import EventsList from "../components/EventsList";
import {json, useLoaderData, defer, Await} from "react-router-dom";
import {Suspense} from "react";
import PageContent from "../components/PageContent";

const EventsPage = () => {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
            <Await resolve={events}>
                {
                    (loadedEvents) => {
                        return (
                            <PageContent title="Events Page">
                                <EventsList events={loadedEvents}/>
                            </PageContent>
                        );
                    }
                }
            </Await>
        </Suspense>
    );
};

export default EventsPage;

export function eventsLoader() {
    return defer({
        events: fetchEvents()
    });
}

async function fetchEvents() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw json({message: "Failed to fetch events!"}, {status: 500});
    }
    const resData = await response.json();
    return resData.events;
}
