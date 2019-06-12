import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class BarChart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const data = {
            type: "line",
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            datasets: [{
                label: "YTD Tasks Complete",
                data: [72, 85, 29, 47, 98, 24, 12, 88, 47, 97, 44, 70],
                backgroundColor: [
                    '#FF6384' 
                ],
                hoverBackgroundColor: [
                    '#FF6384'
                ]
            }],
           
        
        }

        return(
            <div className="chartContainer">
                <Line height={400} width={700} data={data} />
            </div>
            
        )
    }
}

export default BarChart;