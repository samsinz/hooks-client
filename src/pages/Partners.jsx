import "../styles/Partners/partners.css";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import AddHookForm from "../components/Forms/AddHookForm";
import { useRef } from "react";
import RatingsPartners from "../components/charts/RatingsPartners";
import RatingPartners from "../components/charts/RatingPartners";
import OrgasmsPartners from "../components/charts/OrgasmsPartners";
import SafePartners from "../components/charts/SafePartners";
import favoriteEmpty from "../assets/images/favorite-empty.png";
import favoriteFill from "../assets/images/favorite-fill.png";
import apiHandler from "../api/apiHandler";

const Partners = () => {
  const { isLoggedIn, currentUser, removeUser, authenticateUser } = useAuth();
  const navigate = useNavigate();
  const addHook = useRef();
  const regex = /[a-z]/;

  const openAddHook = () => {
    addHook.current.showModal();
  };

  const closeAddHook = () => {
    addHook.current.close();
  };

  const handleFavorite = (partnerId, state) => {
    apiHandler
      .toggleFavorite({ partnerId: partnerId, state: state })
      .then(() => authenticateUser())
      .catch((error) => console.error(error));
  };

  if (!currentUser.partners.length) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="Partners">
      <div id="title">
        <h1 className="bold">
          {currentUser.partners.length === 1
            ? currentUser.partners.length + " partner"
            : currentUser.partners.length + " partners"}
        </h1>
        <h3 className="hover" onClick={openAddHook}>
          <span className="add">+</span> Add a new hook
        </h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      {currentUser.partners.map((partner) => {
        return (
          <div key={partner._id} className="partner-card">
            <div className="profile-pic">
              <img
                id="partner-image"
                className="border-gradient-circular-og"
                src={
                  partner.image
                    ? partner.image
                    : regex.test(partner.name.toLowerCase().slice(0, 1))
                    ? `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/${partner.name
                        .toLowerCase()
                        .slice(0, 1)}.png`
                    : `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/x.png`
                }
                alt="partner"
              />
              <img
                className="favorite"
                src={
                  currentUser.favorites.filter(
                    (favorite) => favorite._id === partner._id
                  ).length
                    ? favoriteFill
                    : favoriteEmpty
                }
                alt="favorite"
                onClick={() =>
                  handleFavorite(
                    partner._id,
                    currentUser.favorites.filter(
                      (favorite) => favorite._id === partner._id
                    ).length
                  )
                }
              />
            </div>
            <div className="info">
              <h2 className="bold">
                {partner.name}, {partner.age}
              </h2>
              <h3>{partner.comment}</h3>
              <span
                id="more"
                onClick={() => navigate(`/partners/${partner._id}`)}
              >
                See more
              </span>
            </div>
            <div className="safe">
              <SafePartners partner={partner} />
            </div>
            <div className="orgasms">
              <OrgasmsPartners partner={partner} />
            </div>
            <div className="rating">
              <RatingPartners partner={partner} />
            </div>
            <div className="ratings">
              <RatingsPartners partner={partner} />
            </div>
          </div>
        );
      })}
      <dialog ref={addHook}>
        <AddHookForm closeAddHook={closeAddHook}></AddHookForm>
      </dialog>
    </div>
  );
};

export default Partners;
