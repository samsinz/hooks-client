import React, { useEffect, useState } from "react";
import service from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import "../../styles/achievements.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    service
      .get(`/api/achievements/${currentUser._id}`)
      .then(({ data }) => {
        console.log("data");
        setAchievements(data);
      })
      .catch((error) => console.error(error));
  }, [currentUser]);

  if (!achievements.length) return <div>Loading</div>;

  return (
    <div className="Achievements">
      {achievements.map((achievement) => {
        return (
            <img className="border-gradient-circular" src={achievement.image} alt={achievement.name} />
        );
      })}
      {console.log(achievements)}
    </div>
  );
};

export default Achievements;
