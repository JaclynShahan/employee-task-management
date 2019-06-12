import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


class PieChart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const data = {
            labels: [
                'Tasks Completed',
                'Tasks Incomplete'
            ],
            datasets: [{
                data: [20, 21],
                backgroundColor: [
                    '#36A2EB',
                    '#FFCE56',
                ],
                hoverBackgroundColor: [
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }
        return(
          <div className="graphContainer">
              <Pie width={400} height={400} data={data} />
          </div>
               
           
        )
    }
}

export default PieChart;