import { useEffect, useState } from "react";
import "../../styles/Partners/partnersComponents.css";

const RatingPartners = ({ partner }) => {
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    if (!partner) {
      return;
    }
    let average = 0;
    partner.hooks.forEach((hook) => (average += hook.rating / partner.hooks.length));
    setRatings(Math.round(average));
  }, [partner]);

  if (ratings === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="partners-component">
      <h2 className="component-title bold">Average rating</h2>
      <span className="rate-special colored-text ">{ratings}</span>
      {/* <span className="percent colored-text ">PERCENT</span> */}
    </div>
  );
};

export default RatingPartners;
