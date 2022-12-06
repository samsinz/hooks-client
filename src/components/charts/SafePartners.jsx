import { useEffect, useState } from "react";
import "../../styles/Partners/partnersComponents.css";

const SafePartners = ({ partner }) => {
  const [protection, setProtection] = useState(null);

  useEffect(() => {
    if (!partner) {
      return;
    }
    let average = 0;
    partner.hooks.forEach((hook) => (average += (hook.protection * 100) / partner.hooks.length));
    setProtection(Math.round(average));
  }, [partner]);

  if (protection === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="partners-component">
      <h2 className="component-title bold">Protection rate</h2>
      <span className="rate colored-text ">{protection}</span>
      <span className="percent colored-text ">PERCENT</span>
    </div>
  );
};

export default SafePartners;
