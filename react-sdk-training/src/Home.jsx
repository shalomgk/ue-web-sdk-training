import "./Home.css";
import { useState } from "react";
import image from "./assets/gallery.png";
import { useNavigate } from "react-router-dom";

function Home() {

  const handleLogEvent = () => {
    // To log an event
      // window.ue.logEvent(eventName, eventProperties);
  }

  const handleRestartSession = () => {
    //To restart the session
    //window.ue.restartSession();
    navigate('/login');
  }

  const navigate = useNavigate()

  return (

    <div className="Home">
      <h1 className="heading">React App with Various Elements</h1>
      <div className="input-section">
        <label className="form-label" htmlFor="fname">First name:</label>
        <input className="form-control" type="text" id="fname" name="fname" /><br /><br />
        <label className="form-label" htmlFor="lname">Last name:</label>
        <input className="form-control" type="text" id="lname" name="lname" /><br /><br />
        <button onClick={handleLogEvent} className="btn btn-primary">Log Event</button>
        <button onClick={handleRestartSession} className="btn btn-primary">Restart Session</button>

      </div>

      <div className="image-section">
        {/* You can add "ue-block" class in img tag to cease is from recording. You can try it out with other element tags as well */}
        <img className="" src={image} alt="Placeholder 1" height="150px" width="150px" />
      </div>



    </div>
  );
}

export default Home;
