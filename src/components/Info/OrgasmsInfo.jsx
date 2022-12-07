import React from "react";

const OrgasmsInfo = ({ closeInfo }) => {
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
        <h2>Orgasms</h2>
        <p>
          We've been taught that successful sex ends with an orgasm, so much so
          that we don't feel very comfortable when it doesn't. Knowing how to
          achieve orgasm is not a given. For some people, it can take years of
          sex before they reach orgasm with a partner, or even alone, and that's
          perfectly normal.
        </p>

        <div class="ressourceStats">
          <div class="leftStat">
            <p className="statTop colored-text">18</p>
            <p className="statBottom colored-text">percent</p>
            <p className="statLegend">
              of women achieve orgasm during penetrative sex.
            </p>
          </div>

          <div class="rightStat">
            <p className="statTop colored-text">5-10</p>
            <p className="statBottom colored-text">percent</p>
            <p className="statLegend">of women have never orgasmed</p>
          </div>
        </div>
      </div>
      <h3 className="usefulLinks">Useful links</h3>
      <a href="https://pleasurebetter.com/orgasm-statistics/" target="_blank">
        45 Orgasm Statistics →
      </a>
    </div>
  );
};

export default OrgasmsInfo;
