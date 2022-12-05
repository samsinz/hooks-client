import useAuth from "../../auth/useAuth";
import { useEffect, useState } from "react";
import "../../styles/age.css";

const Age = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    setAge(0)
    for (let i = 0; i < currentUser.partners.length; i++) {
        setAge((currentValue) => currentValue + currentUser.partners[i].age)
    }
    setAge((currentValue) =>  Math.round(currentValue / currentUser.partners.length))
    console.log('yes')
    console.log(age)

  }, [currentUser]);

  if (!age) return <div>Loading</div>;

  return <div className="Age">
  <h2 className="bold">Average age</h2>
  <span className="colored-text">{age}</span>
  
  </div>;
};

export default Age;
