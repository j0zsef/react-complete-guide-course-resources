import classes from './EventsNavigation.module.css';
import {NavLink, useLocation} from "react-router-dom";

function EventsNavigation() {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={location.pathname === "" ? classes.active : ""} end>All Events</NavLink>
          </li>
          <li>
            <NavLink to="new" className={location.pathname === "new" ? classes.active : ""}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
