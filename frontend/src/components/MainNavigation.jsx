import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" activeClassName={classes.active}>Home</NavLink>
          </li>
          <li>
            <NavLink to="events" activeClassName={classes.active}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
