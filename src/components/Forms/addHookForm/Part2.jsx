import React, { useState } from "react";
import "./../../../styles/Forms/addhook.css";

const Part2 = ({
  handleChange,
  values,
  setStage,
  orgasm,
  protection,
  setOrgasm,
  setProtection,

  setStep,
}) => {
  const [sexIsActive, setSexIsActive] = useState(false);
  const [foreplayIsActive, setForeplayIsActive] = useState(false);
  const [kissingIsActive, setKissingIsActive] = useState(false);

  const current = new Date().toISOString().split("T")[0];
  const minimumDate = new Date("1970-01-01").toISOString();

  return (
    <div className="addhook">
      <div className="sameLine">
        <div className="left">
          <label htmlFor="location">Where</label>
          <input
            onChange={handleChange}
            value={values.location}
            type="text"
            id="location"
            name="location"
          />
        </div>
        <div className="right">
          <label htmlFor="date">When</label>
          <input
            onChange={handleChange}
            value={values.date}
            max={current}
            min={minimumDate}
            type="date"
            id="date"
            name="date"
          />
        </div>
      </div>
      <label htmlFor="type">Stage</label>
      <div className="stage">
        <p
          className={kissingIsActive ? "activeStage" : "stageItem"}
          onClick={() => {
            setStage("Kissing");
            setKissingIsActive((current) => !current);
            setForeplayIsActive(false);
            setSexIsActive(false);
          }}
        >
          Kissing
        </p>
        <p
          className={foreplayIsActive ? "activeStage" : "stageItem"}
          onClick={() => {
            setStage("Foreplay");
            setForeplayIsActive((current) => !current);
            setKissingIsActive(false);
            setSexIsActive(false);
          }}
        >
          Foreplay
        </p>
        <p
          className={sexIsActive ? "activeStage" : "stageItem"}
          onClick={() => {
            setStage("Sex");
            setSexIsActive((current) => !current);
            setKissingIsActive(false);
            setForeplayIsActive(false);
          }}
        >
          Sex
        </p>
      </div>
      <div className="newHookDuration">
        <label htmlFor="duration">Timing</label>
        <input
          onChange={handleChange}
          value={values.duration}
          min="0"
          max="2"
          type="range"
          id="duration"
          name="duration"
        />
        <div className="legendTiming">
          <p>Too short</p>
          <p>Perfect</p>
          <p>Too long</p>
        </div>
      </div>
      <p
        className={orgasm ? "activeTag" : "tag"}
        onClick={() => {
          setOrgasm(!orgasm);
          // setScore(score += 50)
        }}
      >
        + You had an orgasm
      </p>
      <p
        className={protection ? "activeTag" : "tag"}
        onClick={() => {
          // setScore(score += 50)
          setProtection(!protection);
        }}
      >
        + You used protection
      </p>
      <label htmlFor="rating">Rating</label>
      <input
        onChange={handleChange}
        value={values.rating}
        type="number"
        id="rating"
        name="rating"
      />

      <p onClick={() => setStep(3)}> next</p>
    </div>
  );
};

export default Part2;
