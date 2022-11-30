import React, { useEffect, useState } from "react";
import service from "../api/apiHandler";
import Orgasms from "../components/charts/Orgasms";

const Home = () => {
  const [users, setUsers] = useState(null);
  const [orgasms, setOrgasms] = useState([]);

  useEffect(() => {
    service
      .get("/api/dashboard")
      .then(({ data }) => {
        setUsers(data);
        for (let i = 0; i < users.length; i++) {
          for (let j = 0; j < users[i].partners.length; j++) {
            for (let k = 0; k < users[i].partners[j].hooks.length; k++) {
              console.log(users[i].partners[j].hooks[k].orgasm);
              setOrgasms((currentValue) => [...currentValue, users[i].partners[j].hooks[k].orgasm]);
            }
          }
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (!users || !orgasms) return <div>Loading</div>;

  return (
    <div className="Home">
      {console.log(orgasms)}
      <h1>Welcome 🏡</h1>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <p>User: {user.name}</p>
            {user.partners.map((partner) => {
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
          </div>
        );
      })}
      {/* {orgasms.map((orgasm) => {
        return <div>{orgasm ? "true" : "false"}</div>;
      })} */}
      <Orgasms />
    </div>
  );
};

export default Home;
