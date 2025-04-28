import classes from "../styles/MeetupList.module.css";
import MeetupItem from "../components/MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
