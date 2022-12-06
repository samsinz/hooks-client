import React from "react";

const Part2 = () => {
  return (
    <div>
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
          defaultValue={null}
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
        onClick={() => setOrgasm(!orgasm)}
      >
        + You had an orgasm
      </p>

      <p
        className={protection ? "activeTag" : "tag"}
        onClick={() => setProtection(!protection)}
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
    </div>
  );
};

export default Part2;
