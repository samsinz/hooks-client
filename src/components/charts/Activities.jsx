import { ResponsiveCalendar } from "@nivo/calendar";
import { useEffect, useState, useRef } from "react";
import useAuth from "../../auth/useAuth";
import "../../styles/Dashboard/activities.css";
import ActivityInfo from "../Info/ActivityInfo";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Activities = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  const info = useRef();

  const showInfo = () => {
    console.log("hello");
    info.current.showModal();
  };

  const closeInfo = () => {
    info.current.close();
  };

  const [dates, setDates] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    let tempCalendar = [];
    for (let i = 0; i < currentUser.partners.length; i++) {
      for (let j = 0; j < currentUser.partners[i].hooks.length; j++) {
        // increment month by one
        const date = `${new Date(
          Date.parse(currentUser.partners[i].hooks[j].date)
        ).getFullYear()}-${(
          "0" +
          (new Date(
            Date.parse(currentUser.partners[i].hooks[j].date)
          ).getMonth() +
            1)
        ).slice(-2)}-${(
          "0" +
          new Date(Date.parse(currentUser.partners[i].hooks[j].date)).getDate()
        ).slice(-2)}`;
        console.log(date);
        tempCalendar.push({ value: 1, day: date });
      }
    }
    setDates(tempCalendar);
  }, [currentUser]);

  const from = year + "-01-01";
  const to = year + "-07-12";

  if (!dates.length) return <div>Loading</div>;

  return (
    <div className="Activities">
      <div className="info">
        <h2 className="bold">Sexual activity</h2>
        <p>
          An overview of your sexual activity periods during the year {year}.
        </p>
      </div>
      <div className="chart">
        {console.log(dates)}

        <ResponsiveCalendar
          isInteractive={false}
          theme={{ textColor: "#b3b3b3" }}
          data={dates}
          from={from}
          to={to}
          emptyColor="#11161C"
          colors={["#7E24FF"]}
          minValue={-38}
          maxValue={100}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          yearLegendOffset={100}
          monthBorderWidth={0}
          // monthBorderColor="#444444"
          monthBorderColor="#151A1F"
          // dayBorderColor="#192229"
          dayBorderColor="#151A1F"
          legends={[
            {
              anchor: "bottom-right",
              justify: false,
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,

              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
      <p className="hover" id="more">
        <span onClick={showInfo}>i</span>
      </p>

      <dialog ref={info}>
        <ActivityInfo closeInfo={closeInfo} />
      </dialog>
    </div>
  );
};

export default Activities;
