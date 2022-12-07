import React, { useState } from "react";
import useAuth from "../../../auth/useAuth";
import "./../../../styles/Forms/addhook.css";

const Part1 = ({ handlePartnersList, partnersName, handleChange, values, setStep }) => {
  const { currentUser, authenticateUser } = useAuth();

  const handleNext = () => {
    if (values.name && values.age) {
      setStep(2);
    }
  };

  return (
    <div className="part1">
      {currentUser.partners.length ? (
        <div>
          <h2>Find an existing partner</h2>
          <div className="searchPartner">
            <input type="text" list="partners" onChange={handlePartnersList} />
            <datalist id="partners">
              {partnersName.map((partner) => {
                console.log(partner._id)
                return <option key={partner.id} value={partner.name} />;
              })}
            </datalist>
          </div>
        </div>
      ) : (
        true
      )}
      <h2 className="bold">{currentUser.partners.length ? "Or add a new one" : "Add a new partner"}</h2>
      <label htmlFor="name">What is your partner's name?</label>
      <input onChange={handleChange} value={values.name} type="text" id="name" name="name" />
      <label htmlFor="age">How old are they?</label>
      <input onChange={handleChange} value={values.age} type="number" id="age" name="age" />

      <div className="nextStep" onClick={handleNext}>
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.3177 20L11.6771 18.3807L18.4314 11.6264H0.938477V9.28267H18.4314L11.6771 2.54972L13.3177 0.909091L22.8632 10.4545L13.3177 20Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Part1;
