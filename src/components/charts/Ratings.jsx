import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.




const data = [
    {
        "id": "japan",
        "color": "#B62AFF",
        "data": [
            {
                "x": "Jan.",
                "y": 10
            },

            {
                "x": "Fev.",
                "y": 6
            },
            {
                "x": "Mar.",
                "y": 6
            },
            {
                "x": "Apr.",
                "y": 6
            },
            {
                "x": "May",
                "y": 10
            },
            {
                "x": "Jun.",
                "y": 0
            },
            {
                "x": "Jul.",
                "y": 2
            },
            {
                "x": "Aug.",
                "y": 7
            },
            {
                "x": "Sep.",
                "y": 7
            },
            {
                "x": "Oct.",
                "y": 9
            },
            {
                "x": "Nov.",
                "y": 1
            },
            {
                "x": "Dec.",
                "y": 2
            }
        ]
    },




]






const Ratings = () => (
    <ResponsiveLine
        data={data}
        key={['japan']}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 0,
            max: 10,
            stacked: true,
            reverse: false
        }}
        colors='#98009B'
        lineWidth={3}
        yFormat=">-.2f"
        curve="monotoneX"
        axisTop={{
            orient: 'top',
            tickSize: 0,
            tickPadding: 18,
            tickRotation: 0,
            legend: '',
            legendOffset: 36
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={8}
        pointColor='#98009B'
        pointBorderWidth={2}
        pointBorderColor='#98009B'
        pointLabel={function (t) { return t.x + ": " + t.y }}
        pointLabelYOffset={-12}
        enableGridX={false}
        enableGridY={false}

        enableArea={true}
        useMesh={true}
        enableDots={false}
        enableSlices='x'

        defs={[


            // using helpers
            // will inherit colors from current element

            linearGradientDef('gradientC', [
                { offset: 20, color: '#98009B' },
                { offset: 80, color: '#0C009C' },

            ],
                // you may specify transforms for your gradients, e.g. rotations and skews,
                // following the transform attribute format.
                // For instance here we rotate 90 degrees relative to the center of the object.
                {
                    gradientTransform: 'rotate(40 0.5 0.5)'
                }),
            // using plain object
            {
                id: 'gradientB',
                type: 'linearGradient',
                colors: [

                    { offset: 0, color: '#151A1F' },
                ],
            },
        ]}
        // 2. defining rules to apply those gradients
        fill={[
            // match using object query
            { match: { id: 'japan' }, id: 'gradientC' },
            // match using function

            // match all, will only affect 'elm', because once a rule match,
            // others are skipped, so now it acts as a fallback
            // { match: 'sass', id: 'gradientC' },
        ]}
    />
)

export default Ratings;