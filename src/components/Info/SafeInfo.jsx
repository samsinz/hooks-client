import React, { useRef } from "react";

const SafeInfo = ({ closeInfo }) => {
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

      {/* <div>
        <h1>Safe Sex</h1>
        <h2>What to do in case of unprotected sex?</h2>
        <p>
          If you've had unprotected sex, taking action now can help safeguard
          your health now and in the future.
        </p>
        <p>
          Whether your protection mode has failed or you haven't used one,
          having unprotected sex can happen. There is then a risk of pregnancy
          and contracting a sexually transmitted infection (STI). This can cause
          stress and anxiety. However, do not panic, there are solutions.
        </p>

        <h3>What are the risks after unprotected sex?</h3>
        <p>*Sexually Transmitted Infections</p>
        <p>*Unwanted pregnancy</p>

        <h2>What to do right after unprotected sex?</h2>
        <p>
          Although it doesn't protect against STIs, urinating after sex can help
          reduce your risk of getting a UTI.
        </p>

        <h2>What to do the day after unprotected sex?</h2>
        <p>
          *If you are not using contraception and there is a risk of unwanted
          pregnancy, you can take emergency contraception within 3 to 5 days
          after unprotected sex.
        </p>
        <p>*Discussing HIV exposure with your doctor</p>
        <p>*Take the time to know how you feel</p>

        <h2>What to do 2 weeks to 1 month later?</h2>
        <p>*Take a pregnancy test</p>
        <p>*Getting tested for STIs</p>

        <h2>What to do 2 to 6 months later?</h2>
        <p>
          Get tested again. Some STIs take longer to detect. During this period,
          it is important not to have unprotected sex.
        </p>

        <ul>
          <li>
            <a>useful link about unprotected sex</a>
          </li>
          <li>
            <a>useful link about unwanted pregnancy</a>
          </li>
          <li>
            <a>useful link about STIs</a>
          </li>
        </ul>
      </div>
    </div>
 */}

      <div>
        <h2>Safe sex</h2>
        <p>
          Whether your protection mode has failed or you haven't used one,
          having unprotected sex can happen. There is then a risk of pregnancy
          and contracting a sexually transmitted infection (STI), event for oral
          sex. However, do not panic, there are solutions. If you are not using
          contraception and there is a risk of unwanted pregnancy, you can take
          emergency contraception within 3 to 5 days after unprotected sex, of
          alternatives after this delay. Tell him or her about your risk of
          exposure to an STD and remember to get tested regularly.
        </p>

        <div className="ressourceStats">
          <div className="leftStat">
            <p className="statTop colored-text">1 in 5</p>
            <p className="statBottom colored-text">people</p>
            <p className="statLegend">
              in the USA was living with an STI in 2018
            </p>
          </div>

          <div className="rightStat">
            <p className="statTop colored-text">53</p>
            <p className="statBottom colored-text">percent</p>
            <p className="statLegend">
              of chlamydia infected people are between 14 and 25 years old
            </p>
          </div>
        </div>
      </div>
      <h3 className="usefulLinks">Useful links</h3>
      <a href="https://www.familyplanning.org.nz/news/2016/had-unprotected-sex">
        What to do in case of unsafe sex →
      </a>
    </div>
  );
};

export default SafeInfo;
