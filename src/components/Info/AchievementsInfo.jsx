import React, { useRef } from "react";
import useAuth from "../../auth/useAuth";
import apiHandler from "../../api/apiHandler";

const AchievementsInfo = ({ closeAchievement, id }) => {
  const { currentUser, authenticateUser } = useAuth();

  if (!id) {
    return <div>Loading</div>;
  }

  // return (console.log(currentUser.achievement.name))
  return (
    <div className="AchievementInfo">
      <span onClick={closeAchievement} className="svgButton hover">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.13184 2.13184L10.2636 10.2636M10.2636 10.2636L18.3953 18.3953M10.2636 10.2636L2.13184 18.3953M10.2636 10.2636L18.3953 2.13184"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <div className="big-achievement circle-animation">
        <img className="infoImg" src={id.image} alt="info" />
      </div>
      <h1 className="bold">{id.name}</h1>
      <p style={(textAlign= 'center')}>{id.description}</p>
    </div>
  );
};

export default AchievementsInfo;
