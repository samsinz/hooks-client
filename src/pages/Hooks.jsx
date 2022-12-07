import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Tags from "../components/charts/Tags";
import editImage from "../assets/images/edit.png";
import deleteImage from "../assets/images/delete.png";
import apiHandler from "../api/apiHandler";

import "../styles/Hooks/hooks.css";
import { useState } from "react";

const Hooks = () => {
  const { isLoggedIn, currentUser, removeUser, authenticateUser } = useAuth();
  const params = useParams();
  const id = params.id;
  const [partner] = currentUser.partners.filter(
    (partner) => partner._id === params.id
  );
  const regex = /[a-z]/;
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);

  const [name, setName] = useState(partner.name);
  const [age, setAge] = useState(partner.age);
  const [comment, setComment] = useState(partner.comment);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleEdit = (partnerId) => {
    if (edit) {
      apiHandler
        .editPartner({
          partnerId: partnerId,
          name: name,
          age: age,
          comment: comment,
        })
        .then(async () => {
          await authenticateUser();
        })
        .catch((error) => console.error(error));
    }
    setEdit((currentValue) => !currentValue);
  };

  const handleDeleteHook = (hookId, partnerId) => {
    apiHandler
      .deleteHook({ hookId: hookId, partnerId: partnerId })
      .then(async () => await authenticateUser())
      .catch((error) => console.error(error));
  };

  const handleDeletePartner = (partnerId) => {
    apiHandler
      .deletePartner({ partnerId: partnerId })
      .then(async () => {
        await authenticateUser();
        navigate("/partners");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Hooks">
      <div id="title">
        <h1 className="bold hover" onClick={() => navigate("/partners")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>{" "}
          Back to partners
        </h1>
      </div>
      <div className="partner-container">
        <div className="partner-info">
          <img
            id="partner-image"
            className={partner.image ? true : "border-gradient-circular-og"}
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
          <div className="partner-details">
            <div style={{ display: "flex" }}>
              {/* <h2 className="bold">
              {partner.name}, {partner.age}
            </h2>
      */}
              <input
                className={edit ? "change" : ""}
                type="text"
                value={name}
                size={name.length}
                id="name"
                name="name"
                onChange={handleName}
                placeholder="Name"
              />
              <input
                className={edit ? "change" : ""}
                type="text"
                value={age}
                size="3"
                id="age"
                name="age"
                onChange={handleAge}
                placeholder="Age"
              />
            </div>
            {/* <h4>{partner.comment}</h4> */}
            <input
              className={edit ? "change" : ""}
              type="text"
              value={comment}
              size={comment.length}
              id="comment"
              name="comment"
              onChange={handleComment}
              placeholder="Add comment"
            />
            <h4>Hooks: {partner.hooks.length}</h4>
            <div className="buttons-container">
              <img
                src={editImage}
                alt="edit"
                className="hover"
                onClick={() => handleEdit(partner._id)}
              />
              <img
                src={deleteImage}
                alt="delete"
                className="hover"
                onClick={() => handleDeletePartner(partner._id)}
              />
            </div>
          </div>
        </div>
        <div id="add" className="hover">
          +
        </div>
      </div>
      {partner.hooks
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        .map((hook) => {
          return (
            <div key={hook._id} className="hook">
              <div className="date">
                <h2 className="bold">
                  {hook.date.slice(0, 10).replace(/-/g, ".")}
                </h2>
                <h4>{hook.location}</h4>
              </div>
              <div className="tags">
                <Tags hook={hook} />
              </div>
              <div className="rating colored-text">
                <span>{hook.rating}</span>
              </div>
              <div className="notes">
                <h4 className="bold">Comments</h4>
                <h4>{hook.notes ? hook.notes : "None."}</h4>
              </div>
              <div className="buttons">
                <img
                  src={deleteImage}
                  alt="delete"
                  className="hover"
                  onClick={() => handleDeleteHook(hook._id, partner._id)}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Hooks;
