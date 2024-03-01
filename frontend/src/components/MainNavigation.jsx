import classes from "./MainNavigation.module.css";
import {NavLink, useLocation} from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

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
            <NavLink to="events"
                     className={location.pathname === "events" ? classes.active : undefined}>Events</NavLink>
          </li>
          <li>
            <NavLink
                to="newsletter"
                className={({isActive}) =>
                    isActive ? classes.active : undefined
                }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
