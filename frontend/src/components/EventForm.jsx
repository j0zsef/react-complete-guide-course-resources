import {Form, useNavigate, json, redirect} from "react-router-dom";

import classes from "./EventForm.module.css";

export async function newEventLoader({request, params}) {
    const event = await request.formData();

    const eventData = {
        title: event.get("title"),
        image: event.get("image"),
        date: event.get("date"),
        description: event.get("description"),
    };

    if (request.method === "POST") {
        const response = await fetch("http://localhost:8080/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        });
        if (!response.ok) {
            throw json({message: "Failed to create event!"}, {status: 500});
        }

        return redirect("/events");
    } else if (request.method === "PATCH") {
        const response = await fetch(`http://localhost:8080/events/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            throw json({message: "Failed to update event!"}, {status: 500});
        }

        return redirect(`/events/${params.id}`);
    }
}

function EventForm({method, event}) {
    const navigate = useNavigate();

    function cancelHandler() {
        navigate("..");
    }

    return (
        <Form className={classes.form} method={method}>
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" defaultValue={event?.title} required/>
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" defaultValue={event?.image} required/>
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" defaultValue={event?.date} required/>
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" defaultValue={event?.description} rows="5" required/>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
}

export default EventForm;
