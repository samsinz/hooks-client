import { ResponsivePie } from "@nivo/pie";

const data =
  [
    {
      id: "sass",
      label: "sass",
      value: 50,
      color: "hsl(341, 70%, 50%)",
    },
    {
      id: "scala",
      label: "scala",
      value: 50,
      color: "#ffffff",
    },
  ];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Orgasms = () => {

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      valueFormat=" >-"
      innerRadius={0.75}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "pink_yellowGreen" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.1}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      animate={false}
      legends={[]}
    />
  );
};

export default Orgasms;
