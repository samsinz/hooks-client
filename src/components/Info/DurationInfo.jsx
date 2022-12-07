import React from "react";
import '../../styles/Dashboard/ressource.css'

const DurationInfo = ({ closeInfo }) => {
  return (
    <div className="safeInfoDuration">
      <span onClick={closeInfo} className="svgButton">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.13184 2.13184L10.2636 10.2636M10.2636 10.2636L18.3953 18.3953M10.2636 10.2636L2.13184 18.3953M10.2636 10.2636L18.3953 2.13184"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <div>
        <h1>Sex duration</h1>
        <p>
          Despite what many people may believe, there is no normal or right duration for sex. What is most important is that all partners are satisfied with the
          duration and quality of their sexual experiences. However, there are some factors that can affect the duration of sex, such as age, physical fitness,
          and overall health.
        </p>
        <p>
          In addition to the duration of sex, it is also important to consider the overall health of a person's sexual experiences. Pay attention to your own
          sexual satisfaction and communicate with your partner about what you enjoy and what you would like to change or improve.
        </p>
        <p>
          Overall, the duration of sex is just one aspect of sexual health. By focusing on overall health and satisfaction, individuals and couples can enjoy
          fulfilling and satisfying sexual experiences.
        </p>
      </div>
    </div>
  );
};

export default DurationInfo;
