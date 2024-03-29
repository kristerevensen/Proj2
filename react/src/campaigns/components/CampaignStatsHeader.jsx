import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default function Untitled2() {
  const data = [
    {
      id: 'sessions',
      data: [
        { x: '2022-03-06', y: 300 },
        { x: '2022-03-07', y: 320 },
        { x: '2022-03-08', y: 380 },
        { x: '2022-03-09', y: 410 },
        { x: '2022-03-10', y: 390 },
        { x: '2022-03-11', y: 360 },
        { x: '2022-03-12', y: 340 },
      ],
    },
  ];

  const theme = {
    fontFamily: 'Arial',
    textColor: '#555',
    axis: {
      legend: {
        text: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
      ticks: {
        line: {
          stroke: '#555',
        },
        text: {
          fontSize: 12,
        },
      },
    },
  };

  return (
    <div style={{ height: '400px' }} className="border-b-2">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  );
}
