import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import '../App.css';


class Pg1 extends Component {
  render() {
    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Expenses', 'Income'],
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7],
        ]}
        options={{
          title: 'Expenses vs. Income comparison',
          hAxis: { title: 'Expenses', minValue: 0, maxValue: 15 },
          vAxis: { title: 'Income', minValue: 0, maxValue: 15 },
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}

export default Pg1;
