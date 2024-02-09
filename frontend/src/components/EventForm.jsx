import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  function handleOnSubmit(event) {
      if (method === 'post') {
        const title = event.target.title.value;
        const image = event.target.image.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const newEvent = {
          title,
          image,
          date,
          description,
        };
        fetch('http://localhost:8080/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        }).then(() => {
          navigate('/events');
        });
      } else if (method === 'patch') {
        const title = event.target.title.value;
        const image = event.target.image.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const updatedEvent = {
          title,
          image,
          date,
          description,
        };
        fetch(`http://localhost:8080/events/${event.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEvent),
        }).then(() => {
          navigate(`/events/${event.id}`);
        });
      }
  }

  return (
    <form className={classes.form} onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event?.title} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event?.image} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event?.date} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" defaultValue={event?.description} rows="5" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
