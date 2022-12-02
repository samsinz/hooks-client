import { ResponsivePie } from "@nivo/pie";
import { linearGradientDef } from '@nivo/core'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Orgasms = ({data}) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
      keys={['true', 'false']}
      // 1. defining gradients
      defs={[
        // using helpers
        // will inherit colors from current element
        linearGradientDef('gradientC', [
          { offset: 20, color: '#0C009C' },
          { offset: 100, color: '#98009B' },
        ],
          // you may specify transforms for your gradients, e.g. rotations and skews,
          // following the transform attribute format.
          // For instance here we rotate 90 degrees relative to the center of the object.
          {
            gradientTransform: 'rotate(45 0.5 0.5)'
          }),
        // using plain object
        {
          id: 'gradientB',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: '#151A1F', opacity: 0 },
          ],
        },
      ]}
      // 2. defining rules to apply those gradients
      fill={[
        // match using object query
        { match: { id: 'true' }, id: 'gradientC' },
        // match using function
        { match: d => d.id === 'false', id: 'gradientB' },
        // match all, will only affect 'elm', because once a rule match,
        // others are skipped, so now it acts as a fallback
        // { match: 'sass', id: 'gradientC' },
      ]}
    />
  );
};
export default Orgasms;