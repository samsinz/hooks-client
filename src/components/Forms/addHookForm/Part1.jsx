import React from "react";
import "./../../../styles/Forms/addhook.css";

const Part1 = ({
  handlePartnersList,
  partnersName,
  handleChange,
  values,
  setStep,
}) => {
  return (
    <div className="addhook">
      <h2>Find a hook</h2>
      <input type="text" list="partners" onChange={handlePartnersList} />
      <datalist id="partners">
        {partnersName.map((partner) => {
          return <option key={partner.id} value={partner.name} />;
        })}
      </datalist>
      <h2 className="bold">Or add a new one</h2>
      <label htmlFor="name">What is your partner's name?</label>
      <input
        onChange={handleChange}
        value={values.name}
        type="text"
        id="name"
        name="name"
      />
      <label htmlFor="age">How old is he/she?</label>
      <input
        onChange={handleChange}
        value={values.age}
        type="number"
        id="age"
        name="age"
      />

      <p onClick={() => setStep(2)}>next</p>
    </div>
  );
};

export default Part1;
