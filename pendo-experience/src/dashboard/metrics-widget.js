import React from 'react';
import './dashboard.css';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { Card } from 'antd';
const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];





const MetricsWidget = () => (
	<Card title="Metrics" extra={<a>More</a>}>
	</Card>
);	


export default MetricsWidget;