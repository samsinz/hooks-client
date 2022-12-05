import React, { useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import "../../styles/achievements.css";

const Achievements = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <div className="Achievements">
      {currentUser.achievements.map((achievement) => {
        return <img key={achievement.name} className="border-gradient-circular" src={achievement.image} alt={achievement.name} />;
      })}
    </div>
  );
};

export default Achievements;
