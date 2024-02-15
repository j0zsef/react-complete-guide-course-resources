import classes from "./EventItem.module.css";
import {Link, useNavigate} from "react-router-dom";

function EventItem({ event }) {
const navigate = useNavigate();
  function startDeleteHandler() {
      fetch(`http://localhost:8080/events/${event.id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      }).then(() => {
          navigate("..");
      }).catch((error) => {
          console.error("Delete Error:", error);
      });
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
