import "../../styles/Partners/partnersComponents.css";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { useEffect, useState } from "react";

const RatingsPartners = ({ partner }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (!partner) {
      return;
    }

    let tempRatings = [];
    tempRatings.push({ x: 1, y: 0 });

    for (let j = 0; j < partner.hooks.length; j++) {
      tempRatings.push({
        x: Date.parse(partner.hooks[j].date),
        y: partner.hooks[j].rating,
      });
    }

    tempRatings = tempRatings.sort((a, b) => a.x - b.x);
    tempRatings.push({ x: Infinity, y: 0 });

    let tempSum = 0;
    let tempCount = 0;
    let cleanedRatings = [];
    for (let i = 0; i < tempRatings.length - 1; i++) {
      if (tempRatings[i].x === tempRatings[i + 1].x) {
        tempSum += tempRatings[i].y;
        tempCount++;
      } else {
        tempSum += tempRatings[i].y;
        tempCount++;
        cleanedRatings.push({ x: tempRatings[i].x, y: tempSum / tempCount });
        tempSum = 0;
        tempCount = 0;
      }
    }

    setRatings((currentValue) => [...currentValue, { id: "ratings", data: cleanedRatings }]);
  }, []);

  if (!ratings.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="ratings-component">
    {console.log(ratings)}
      <div className="legend">
        <span>10</span>
        <span>5</span>
        <span>1</span>
      </div>
      <ResponsiveLine
        data={ratings}
        key={partner._id}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 10,
          stacked: true,
          reverse: false,
        }}
        colors="#98009B"
        lineWidth={3}
        yFormat=">-.2f"
        curve="monotoneX"
        //   axisTop={{
        //     orient: "top",
        //     tickSize: 0,
        //     tickPadding: 18,
        //     tickRotation: 0,
        //     legend: "",
        //     legendOffset: 36,
        //   }}
        axisTop={null}
        theme={{ textColor: "#b3b3b3" }}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        pointSize={1}
        pointColor="#98009B"
        pointBorderWidth={0}
        pointBorderColor="#98009B"
        pointLabel={function (t) {
          return t.x + ": " + t.y;
        }}
        pointLabelYOffset={-12}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        useMesh={false}
        isInteractive={false}
        enableDots={false}
        enableSlices="x"
        defs={[
          // using helpers
          // will inherit colors from current element

          linearGradientDef(
            "gradientD",
            [
              { offset: 40, color: "#98009B" },
              { offset: 115, color: "#0C009C", opacity: 0.5 },
            ],
            // you may specify transforms for your gradients, e.g. rotations and skews,
            // following the transform attribute format.
            // For instance here we rotate 90 degrees relative to the center of the object.
            {
              gradientTransform: "rotate(0 0.5 0.5)",
            }
          ),
          // using plain object
          {
            id: "gradientB",
            type: "linearGradient",
            colors: [{ offset: 0, color: "#151A1F" }],
          },
        ]}
        // 2. defining rules to apply those gradients
        fill={[
          // match using object query
          { match: { id: "ratings" }, id: "gradientD" },
          // match using function

          // match all, will only affect 'elm', because once a rule match,
          // others are skipped, so now it acts as a fallback
          // { match: 'sass', id: 'gradientC' },
        ]}
      />
    </div>
  );
};

export default RatingsPartners;
