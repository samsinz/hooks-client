import React from "react";
import "../../styles/Dashboard/ressource.css";

const DurationInfo = ({ closeInfo }) => {
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
        <h2>Sex duration</h2>
        <p>
          Despite what many people may believe, there is no normal or correct
          length of sex. The most important thing is that all partners are
          satisfied with the length and quality of their sexual experiences.
          However, there are factors that can affect the length of sex, such as
          age, physical condition and general health. Pay attention to your own
          sexual satisfaction and communicate with your partner about what you
          enjoy and what you would like to change or improve. Overall, the
          length of time you have sex is only one aspect of sexual health.
        </p>

        <div class="ressourceStats">
          <div class="leftStat">
            <p className="statTop colored-text">5'25</p>
            <p className="statBottom colored-text">minutes</p>
            <p className="statLegend">
              is the average duration of sexual intercourse, from penetration to
              ejaculation.
            </p>
          </div>

          <div class="rightStat">
            <p className="statTop colored-text">3 to 7</p>
            <p className="statBottom colored-text">minutes</p>
            <p className="statLegend">
              is the ideal length of sexual intercourse (not including
              foreplay).
            </p>
          </div>
        </div>
      </div>
      <h3 className="usefulLinks">Useful links</h3>
      <a
        href="https://www.durex.co.uk/blogs/explore-sex/how-long-should-sex-last"
        target="_blank"
      >
        How long should sex last →
      </a>
    </div>
  );
};

export default DurationInfo;
