import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ChartModal from "../../components/Modal/Modal";
import { getData } from "../../Services/GetData";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LineChart = (props) => {

  if (props.data.length != 0) {
    console.log(props.data)
    var convert = props.data.rows
    var labels = []

    var data = []
    for (var i = 0; i < convert.length-1; i++) {
        var obj = convert[i];
        var v1 = obj.Rem
        var v2 = obj.Count
        labels.push(v1)
        data.push(v2)
    }
    console.log(labels)
    console.log(data)
}

  // const [dataS, setDataS] = useState(null);
  // useEffect(() => {
  //   getData().then((val) => {
  //     const x = val;
  //     const y = x[0];
  //     const z = x[1];
      const temp = {
        chartData: {
          labels: labels,
          datasets: [
            {
              label: "Distribution as per Issues",
              data: data,
              backgroundColor: [
                // "#FF4500"
                "#4682B4"
              ],
              // borderColor: ["rgb(54, 162, 235)"],
              borderColor: ["#1E90FF"],
              borderWidth: 1,
            },
          ],
        }
        }

        var dataa= temp.chartData;
  //     };
  //     setDataS(temp.chartData);
  //   });
  // }, []);

  const options = {
    grouped: true,
    maintainAspectRatio: true,
    responsive: true,
    alignToPixels: true,
    scales: {
      x: {
        ticks: {
          // color: ["rgba(23,37,42,1)"],
          color: ["black"],
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };
  // if (dataS) {
    return (
      <div className="pb-1">
        <div className="linechart text-right">
          <div className="d-none d-md-block d-xl-block d-lg-block">
            <Line height="60" data={dataa} options={options} />
          </div>
          {/* <a data-toggle="modal" data-target="#exampleModal">
            Statuswise Count..
          </a> */}
          <div className='d-lg-block d-md-block d-none'>
            <a data-toggle="modal" data-target="#exampleModal">
              <i class="fas fa-expand"></i>
            </a>
          </div>
          <div className='d-lg-none d-md-none d-block text-center'>

            <a data-toggle="modal" data-target="#exampleModal">
              Statuswise Count <i className="fas fa-expand"></i>
            </a>
          </div>
        </div>
        <ChartModal
          id="exampleModal"
          chart={<Line data={dataa} options={options} />}
        ></ChartModal>
      </div>
    );
  // } else {
  //   return (
  //     <div className="pb-1">
  //       <div className="linechart">
  //         <div className="d-none d-md-flex d-xl-flex d-lg-flex justify-content-center">
  //           <LoadingSpinner></LoadingSpinner>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};
export default LineChart;
