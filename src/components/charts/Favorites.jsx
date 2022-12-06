import "../../styles/Dashboard/favorites.css";
import useAuth from "../../auth/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const navigate = useNavigate();
  const regex = /[a-z]/;

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
        {currentUser.favorites.length ? (
          currentUser.favorites.map((favorite) => {
            return (
              <div key={favorite._id} className="favorite-card" onClick={() => navigate(`../partners/${favorite._id}`)}>
                <img
                  src={
                    favorite.image
                      ? favorite.image
                      : regex.test(favorite.name.toLowerCase().slice(0, 1))
                      ? `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/${favorite.name.toLowerCase().slice(0, 1)}.png`
                      : `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/x.png`
                  }
                  alt="favorite"
                  className="border-gradient-circular-og"
                />
                <span>{favorite.name}</span>
                {/* {partner.name} */}
              </div>
            );
          })
        ) : (
          <h3>You don't have any favorite partners yet.</h3>
        )}
      </div>
    </div>
  );
};

export default Favorites;
