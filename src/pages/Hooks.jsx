import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Tags from "../components/charts/Tags";
import "../styles/Hooks/hooks.css";

const Hooks = () => {
  const { isLoggedIn, currentUser, removeUser, authenticateUser } = useAuth();
  const params = useParams();
  const id = params.id;
  const [partner] = currentUser.partners.filter((partner) => partner._id === params.id);
  const regex = /[a-z]/;
  const navigate = useNavigate();

  return (
    <div className="Hooks">
      <div id="title">
        <h1 className="bold hover" onClick={() => navigate('/partners')}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg> Back to partners</h1>
      </div>
      <div className="partner-container">
        <div className="partner-info">
          <img
            id="partner-image"
            className="border-gradient-circular-og"
            src={
              partner.image
                ? partner.image
                : regex.test(partner.name.toLowerCase().slice(0, 1))
                ? `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/${partner.name.toLowerCase().slice(0, 1)}.png`
                : `https://res.cloudinary.com/dtr9a2dsx/image/upload/v1670273532/alphabet/x.png`
            }
            alt="partner"
          />
          <div className="partner-details">
            <h2 className="bold">
              {partner.name}, {partner.age}
            </h2>
            <h4>{partner.comment}</h4>
            <h4>Hooks: {partner.hooks.length}</h4>
            <div>
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div id='add' className="hover">+</div>
      </div>
      {partner.hooks.map((hook)=> {
        return <div key={hook._id} className="hook">
            <div className="date">
                <h2 className="bold">{hook.date.slice(0,10).replace(/-/g,'.')}</h2>
                <h4>{hook.location}</h4>
            </div>
            <div className="tags"><Tags hook={hook}/></div>
            <div className="rating colored-text"><span>{hook.rating}</span></div>
            <div className="notes"><h4 className="bold">Comments</h4><h4>{hook.notes? hook.notes: 'None.'}</h4></div>
            <div className="buttons">buttons</div>
        </div>
      })}
    </div>
  );
};

export default Hooks;
