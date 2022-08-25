import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Nov 21', uv: 14000 },
  { name: 'Dec 21', uv: 13000 },
  { name: 'Jan 22', uv: 12000 },
  { name: 'Feb 22', uv: 7200 },
  { name: 'Mar 22', uv: 11890 },
  { name: 'Apr 22', uv: 12390 },
  { name: 'May 22', uv: 13490 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-connect-nulls-sqp96';

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="70%" height={200} className="linechart">
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
