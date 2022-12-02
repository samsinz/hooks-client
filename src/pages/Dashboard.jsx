import React, { useEffect, useState } from "react";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Orgasms from "../components/charts/Orgasms";

const Dashboard = () => {
  const [userStats, setUserStats] = useState(null);
  const [orgasms, setOrgasms] = useState([]);
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    // console.log("current user");
    console.log(currentUser);
    service
      .get(`/api/dashboard/${currentUser._id}`)
      .then(({ data }) => {
        setUserStats(data);
      })
      .catch((error) => console.error(error));
  }, [currentUser]);

  useEffect(() => {
    if (!userStats) {
      return;
    }
    let orgasmCounter = 0;
    let hookCounter = 0;

      for (let j = 0; j < userStats.partners.length; j++) {
        for (let k = 0; k < userStats.partners[j].hooks.length; k++) {
          setOrgasms((currentValue) => [...currentValue, userStats.partners[j].hooks[k].orgasm]);
          userStats.partners[j].hooks[k].orgasm ? orgasmCounter++ : true;
          hookCounter++;
        }
      }
    
	console.table({hookCounter, orgasmCounter})
    setOrgasms([
      { id: "true", value: (orgasmCounter * 100) / hookCounter },
      { id: "false", value: 100 - (orgasmCounter * 100) / hookCounter },
    ]);
  }, [userStats]);

console.log(userStats);
  if (!userStats || !orgasms.length) return <div>Loading</div>;

  return (
    <div className="Home">
	{console.log(userStats)}
	{console.log(orgasms)}
      <h1>Welcome 🏡</h1>
      {/* {users.map((user) => {
        return (
          <div key={user._id}> */}
            <p>User: {userStats.name}</p>
            {userStats.partners.map((partner) => {
              return (
                <div key={partner._id}>
                  <p>Partner: {partner.name}</p>
                  {partner.hooks.map((hook) => {
                    return (
                      <div key={hook._id}>
                        <p>{hook.orgasm ? "Orgasm true" : "Orgasm false"}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          {/* </div>
        );
      })} */}
      {/* {orgasms.map((orgasm) => {
        return <div>{orgasm ? "true" : "false"}</div>;
      })} */}
      <Orgasms data={orgasms} />
    </div>
  );
};

export default Dashboard;
