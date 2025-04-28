import { useLoaderData } from "react-router-dom";
import MeetupList from "../components/MeetupLIst";

function Meetups() {
  const meetups = useLoaderData();
  return (
    <section>
      <h1>All Meetups</h1>
      {meetups.length > 0 ? <MeetupList meetups={meetups} /> : <div> <h3>No Meetups found</h3> <p>Please add atleast one meetup</p> </div>}
    </section>
  );
}

export default Meetups;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/meetups");
  const resData = await response.json();
  return resData.meetups;
};
