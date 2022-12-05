import "../../styles/Dashboard/favorites.css";
import useAuth from "../../auth/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const navigate = useNavigate();
  // const [favorites, setFavorites] = useState([])

  // useEffect(()=> {
  //     if(!currentUser){
  //         return;
  //     }
  //     for(let i = 0; i < currentUser.partners.length; i++){
  //         setFavorites((currentValue)=> [...currentValue, currentUser.partners.name])
  //     }
  // },[currentUser])

  return (
    <div className="Favorites">
      <h2 className="bold">Favorites</h2>
      <div className="favorites-scroll">
        {currentUser.favorites.length ? currentUser.favorites.map((favorite) => {
          return (
            <div key={favorite._id} className="favorite-card" onClick={() => navigate(`../partners/${favorite._id}`)} >
              <img src={favorite.image} alt="favorite" className="border-gradient-circular2" />
              <span>{favorite.name}</span>
              {/* {partner.name} */}
            </div>
          );
        }) : <h3>You don't have any favorite partners yet.</h3>}
      </div>
    </div>
  );
};

export default Favorites;
