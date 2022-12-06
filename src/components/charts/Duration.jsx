import "../../styles/Dashboard/duration.css";
import useAuth from "../../auth/useAuth";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DurationInfo from "../Info/DurationInfo";

const Duration = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  const info = useRef()

  const showInfo = ()=> {
    console.log('hello')
    info.current.showModal()
  }

  const closeInfo = ()=> {
    info.current.close()
  }



  useEffect(() => {
    if (!currentUser) {
      return;
    }
    let hooksCounter = 0;
    let durationCounter = 0;
    for (let i = 0; i < currentUser.partners.length; i++) {
      for (let j = 0; j < currentUser.partners[i].hooks.length; j++) {
        durationCounter += currentUser.partners[i].hooks[j].duration;
        hooksCounter++;
      }
    }

    setDuration(Math.round((durationCounter * 50) / hooksCounter));
  }, [currentUser]);

  return (
    <div className="Duration">
      <div className="title">
        <h2 className="bold">Duration</h2>
        <p className="hover" id="more">
          <span onClick={showInfo}>𝑖</span>
        </p>
      </div>
      <p>This graph represents how you feel about the average length of your sexual encounters.</p>
      <div className="gauge">
        <div className="level" style={{ width: `${duration}%` }}></div>
      </div>
      <div className="legend">
        <h3>Too short</h3>
        <h3>Perfect</h3>
        <h3>Too long</h3>
      </div>

      <dialog ref={info}>
        <DurationInfo closeInfo={closeInfo}/>
      </dialog>
    </div>
  );
};

export default Duration;
