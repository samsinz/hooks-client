import React from "react";

const Part1 = () => {
  return (
    <div>
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
    </div>
  );
};

export default Part1;
