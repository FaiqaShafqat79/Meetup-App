import { Link } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> All Meetups </Link>
          </li>
          <li>
            <Link to={"/create-meetup"}> New Meetup </Link>
          </li>
          <li>
            <Link to={"favourite-meetups"}> Favourite Meetups </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
