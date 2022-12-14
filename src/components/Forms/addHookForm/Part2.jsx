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

  const [error, setError] = useState(false);

  const handleNext = () => {
    if (
      values.location &&
      values.date &&
      (sexIsActive || foreplayIsActive || kissingIsActive) &&
      values.rating
    ) {
      setStep(3);
    } else {
      setError(true);
    }
  };

  return (
    <div className="part2">
      <h2>About your hook</h2>
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
      <div className="optionTags">
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
      </div>

      {/* <div className="newHookDuration">
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
      </div> */}
      <div className="newHookDuration">
        <label htmlFor="rating">Rating</label>
        <input
          onChange={handleChange}
          value={values.rating}
          min="0"
          max="10"
          type="range"
          id="rating"
          name="rating"
        />
        <div className="legendTiming">
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
      </div>
      {error && <p>Please fill out the entire form.</p>}
      <div className="nextStep" onClick={handleNext}>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3177 20L11.6771 18.3807L18.4314 11.6264H0.938477V9.28267H18.4314L11.6771 2.54972L13.3177 0.909091L22.8632 10.4545L13.3177 20Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Part2;
