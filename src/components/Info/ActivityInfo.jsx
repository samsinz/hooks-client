import React from "react";

const ActivityInfo = ({ closeInfo }) => {
  return (
    <div className="ressource">
      <span onClick={closeInfo} className="svgButton">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.13184 2.13184L10.2636 10.2636M10.2636 10.2636L18.3953 18.3953M10.2636 10.2636L2.13184 18.3953M10.2636 10.2636L18.3953 2.13184"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <div>
        <h2>Sexual activity</h2>
        <p>
          Sex is a natural and normal part of life that nearly everyone
          experiences at some point. However, sex statistics reveal that people
          have different opinions and experiences about the various aspects of
          sex. Whether it’s vaginal, anal, or oral sex we’re talking about, you
          can bet that each person will have their own story to tell.
        </p>

        <div className="ressourceStats">
          <div className="leftStat">
            <p className="statTop colored-text">8</p>
            <p className="statBottom colored-text">percent</p>
            <p className="statLegend">
              of hookups happens with complete strangers
            </p>
          </div>

          <div className="rightStat">
            <p className="statTop colored-text">63</p>
            <p className="statBottom colored-text">percent</p>
            <p className="statLegend">
              of current college relationships started as a casual hookup.
            </p>
          </div>
        </div>
      </div>
      <h3 className="usefulLinks">Useful links</h3>
      <a href="https://bedbible.com/hookup-culture-statistics/">
        Hookup Culture Statistics →
      </a>
    </div>
  );
};

export default ActivityInfo;
