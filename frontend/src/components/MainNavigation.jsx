import classes from "./MainNavigation.module.css";
import {NavLink, useLocation} from "react-router-dom";

function MainNavigation() {
  const location = useLocation();

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={location.pathname === "" ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="events" className={location.pathname === "events" ? classes.active : undefined}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
