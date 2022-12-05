import { ResponsivePie } from "@nivo/pie";
import { linearGradientDef } from "@nivo/core";
import useAuth from "../../auth/useAuth";

import { useEffect, useState, useRef } from "react";
import SafeInfo from '../Info/SafeInfo'
import "../../styles/Dashboard/safe.css";

const Safe = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const info = useRef()

  const showInfo = ()=> {
    console.log('hello')
    info.current.showModal()
  }

  const closeInfo = ()=> {
    info.current.close()
  }

  const [protection, setProtection] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    let protectionCounter = 0;
    let hookCounter = 0;

    for (let j = 0; j < currentUser.partners.length; j++) {
      for (let k = 0; k < currentUser.partners[j].hooks.length; k++) {
        setProtection((currentValue) => [...currentValue, currentUser.partners[j].hooks[k].protection]);
        currentUser.partners[j].hooks[k].protection ? protectionCounter++ : true;
        hookCounter++;
      }
    }

    // console.table({ hookCounter, protectionCounter });
    setProtection([
      { id: "true", value: (protectionCounter * 100) / hookCounter },
      { id: "false", value: 100 - (protectionCounter * 100) / hookCounter },
    ]);
  }, [currentUser]);

  if (!protection.length) return <div>Loading</div>;

  return (
    <div className="Safe">
      <div id="info">
        <h2 className="bold">Safe sex</h2>
        <p>Your overall protected sex rate.</p>
      </div>

      <div id="chart">
        <div className="percentage">
          <span className="number">{Math.round(protection[0].value)}</span>
          <span className="percent">PERCENT</span>
        </div>
        <ResponsivePie
          data={protection}
          // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          valueFormat=" >-"
          innerRadius={0.75}
          activeOuterRadiusOffset={8}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextOffset={0}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor="black"
          arcLabel="id"
          arcLabelsRadiusOffset={0}
          arcLabelsSkipAngle={4}
          arcLabelsTextColor="black"
          isInteractive={false}
          enableArcLabels={false}
          transitionMode="startAngle"
          animate={false}
          legends={[]}
          keys={["true", "false"]}
          // 1. defining gradients
          defs={[
            // using helpers
            // will inherit colors from current element

            linearGradientDef(
              "gradientC",
              [
                { offset: 20, color: "#0C009C" },
                { offset: 100, color: "#98009B" },
              ],
              // you may specify transforms for your gradients, e.g. rotations and skews,
              // following the transform attribute format.
              // For instance here we rotate 90 degrees relative to the center of the object.
              {
                gradientTransform: "rotate(45 0.5 0.5)",
              }
            ),
            // using plain object
            {
              id: "gradientB",
              type: "linearGradient",
              colors: [{ offset: 0, color: "#151A1F", opacity: 0 }],
            },
          ]}
          // 2. defining rules to apply those gradients
          fill={[
            // match using object query

            { match: { id: "true" }, id: "gradientC" },
            // match using function
            { match: (d) => d.id === "false", id: "gradientB" },

            // match all, will only affect 'elm', because once a rule match,
            // others are skipped, so now it acts as a fallback
            // { match: 'sass', id: 'gradientC' },
          ]}
        />
        <p className="hover" id="more">
          <span onClick={showInfo}>i</span>
        </p>
      </div>
      <dialog ref={info}>
        <SafeInfo closeInfo={closeInfo}/>
      </dialog>
    </div>
  );
};
export default Safe;
