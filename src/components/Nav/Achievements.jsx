import React, { useRef, useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import "../../styles/achievements.css";
import AchievementsInfo from "../Info/AchievementsInfo";

const Achievements = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [id, setId] = useState(null);

  const achievement = useRef();

  const showAchievement = (achid) => {
    console.log(achid);
    setId(achid);
    achievement.current.showModal();
  };

  const closeAchievement = () => {
    achievement.current.close();
  };

  return (
    <div className="Achievements">
      {currentUser.achievements.map((achievement) => {
        return (
          <div key={achievement.name} className="border-gradient-circular hover" onClick={() => showAchievement(achievement)}>
            <img className="petit" src={achievement.image} alt={achievement.name} />
          </div>
        );
      })}
      <dialog ref={achievement}>
        <AchievementsInfo closeAchievement={closeAchievement} id={id} />
      </dialog>
    </div>
  );
};

export default Achievements;
