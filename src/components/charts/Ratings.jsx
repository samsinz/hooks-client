import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import "../../styles/Dashboard/ratings.css";
import { useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Ratings = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    let tempRatings = []
    tempRatings.push({x: 1, y:0})

    for (let i = 0; i < currentUser.partners.length; i++) {
      for (let j = 0; j < currentUser.partners[i].hooks.length; j++) {
        tempRatings.push({
          x: Date.parse(currentUser.partners[i].hooks[j].date),
          y: currentUser.partners[i].hooks[j].rating,
        });
      }
    }
    tempRatings = tempRatings.sort((a, b) => a.x - b.x);
    let cleanedRatings = [];
    // for (let i = 0; i < tempRatings.length; i++){
    //     if (tempRatings[i].date === tempRatings[i-1].date)
    // }

    setRatings((currentValue) => [
      ...currentValue,
      { id: "ratings", data: tempRatings },
    ]);
  }, [currentUser]);

  if (!ratings.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="Ratings">
      {console.log(ratings)}
      <div className="info">
        <h2 className="bold">Ratings</h2>
        <p>
          This graph shows the evolution of your average hook scores from the
          beginning to now.
        </p>
      </div>
      <div className="chart">
        <div className="legend">
          <span>10</span>
          <span>5</span>
          <span>1</span>
        </div>
        <ResponsiveLine
          data={ratings}
          key={["ratings"]}
          margin={{ top: 30, right: 15, bottom: 5, left: 10 }}
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
          pointSize={0}
          pointColor="#98009B"
          pointBorderWidth={2}
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
                { offset: 50, color: "#98009B" },
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
    </div>
  );
};

export default Ratings;
