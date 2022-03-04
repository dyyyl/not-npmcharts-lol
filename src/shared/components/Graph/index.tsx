import { GitCommit } from 'react-feather';
import { ResponsiveLine } from '@nivo/line';

import { generateColor } from 'shared/utils';

export const Graph = ({ data }: Record<string, any>) => (
  <ResponsiveLine
    data={data}
    enableSlices="x"
    sliceTooltip={({ slice }) => {
      // Hack to get the correct week from the data
      const day = 1 - ((slice.points[0].data.x as number) - 1) * 7;
      const year = new Date().getFullYear();

      const date = new Date(year, 0, day);

      const fullMonth = date.toLocaleString('default', { month: 'long' });

      const weekOf = `Week of ${fullMonth} ${date.getDay()}, ${date.getFullYear()}`;

      // Total commits are shown on y axis
      const commits = slice.points[0].data.y;

      return (
        <div
          style={{
            color: '#6D6D90',
            fontSize: '1.4rem',
            background: 'white',
            display: 'grid',
            placeItems: 'center',
            padding: '0.8rem',
            boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.08)',
            borderRadius: '4px',
          }}
        >
          {weekOf}
          <span
            style={{
              color: '#37374A',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            <GitCommit /> {commits} commits
          </span>
        </div>
      );
    }}
    curve="cardinal"
    margin={{ top: 30, right: 35, bottom: 50, left: 65 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    areaBaselineValue={0}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Week',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Total Commits',
      legendOffset: -45,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    layers={[
      'axes',
      'markers',
      'areas',
      'lines',
      'points',
      'mesh',
      'slices',
      'crosshair',
    ]}
    colors={data.map((repo: any) => generateColor(repo.id))}
  />
);
