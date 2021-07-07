import { registerables } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getData} from "../../Services/GetData";

const BarChart = () => {
  const [dataS, setDataS] = useState(null);
  useEffect(() => {
    getData().then((val) => {
      const x = val;
      const y = x[0];
      const z = x[1];
      const temp = {
        chartData: {
          labels: y,
          datasets: [
            {
              label: "Count of the status",
              data: z,
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
      setDataS(temp.chartData);
    });
  }, []);

  return (
    <Bar
      width='150'
       height='25'
      data={dataS}
      options={{
        indexAxis: 'y',
        grouped: true,
        maintainAspectRatio: true,
        responsive: true,
        legend:{
          position:'bottom',
          display:true
        },
        scales: {
          x: {
              grid: {
                display:false,
                // drawTicks: false
              },
              ticks: {
                color: ['rgba(23,37,42,1)'],
                
              }
          },
          y: {
              grid: {
                display:false,
                
              }   ,
              ticks:{
                padding : 0,
                backdropPadding: 0,
                font:{
                  // family: 'fantasy',
                  size: 12,

                },

              }
          }
        }

      }}
    />
  );
};
export default BarChart;
