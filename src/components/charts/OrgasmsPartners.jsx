import { useEffect, useState } from "react";
import "../../styles/Partners/partnersComponents.css";

const OrgasmsPartners = ({ partner }) => {
  const [orgasms, setOrgasms] = useState(null);

  useEffect(() => {
    if (!partner) {
      return;
    }
    let average = 0;
    partner.hooks.forEach((hook) => (average += (hook.orgasm * 100) / partner.hooks.length));
    setOrgasms(Math.round(average));
  }, [partner]);

  if (orgasms === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="partners-component">
      <h2 className="component-title bold">Orgasm rate</h2>
      <span className="rate colored-text ">{orgasms}</span>
      <span className="percent colored-text ">PERCENT</span>
    </div>
  );
};

export default OrgasmsPartners;
