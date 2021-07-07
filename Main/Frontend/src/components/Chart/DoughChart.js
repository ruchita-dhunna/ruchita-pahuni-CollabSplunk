import "./chart.css";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getDataDough, getData } from "../../Services/GetData";
import ChartModal from '../../components/Modal/Modal';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const DoughChart = (props) => {

  console.log(props.data2)
    if (props.data2.length != 0) {
        console.log(props.data2)
        var convert = props.data2.rows
        var labels = []

        var datas = []
            var obj = convert[0];
            var v1=obj.TC
            var v2=obj.Nis
            var v3=v1-v2

            datas.push(v3)
            datas.push(v2)
        // }
        console.log(labels)
        console.log(datas)
    }


  // getData();
  // const [dataD, setData] = useState(null);
  // useEffect(() => {
  //   getDataDough().then((val) => {
  //     const data = val;
  //     setData(data);
  //     console.log(val);
  //   });
  // }, []);

  const datah = {
    datasets: [
      {
        data: datas,
        backgroundColor: ["#52D726", "#ffff33" ],
        // circumference: 10,

      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Compliant", "Non-Compliant"],
  };
  const options = {
    cutout: '70%',
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        // display:true,
        position: "right",
      },
    },
    plugins: {
      legend: {
        // display:true,
        position: "right",
      },
      title: {
        display: true,
        text: 'Compliance Reach',
        font:{
          size:16,
          weight:'bold',
        },
        align:'left'
      }
    },
    radius: '90%',
    // innerRadius:95,
  };
  // if (dataD) {
    return (
      <div className="">
        <div className=" doughnutchart text-right">
          <div className="  d-none d-md-block d-xl-block d-lg-block pr-0 pb-0">
            <Doughnut data={datah} options={options} />
          </div>
          <div className='modal-box'>
            <div className='d-lg-block d-md-block d-none'>
              <a data-toggle="modal" data-target="#doughnutModal">
                <i class="fas fa-expand"></i>
              </a>
            </div>
            <div className='d-lg-none d-md-none d-block text-center'>

              <a data-toggle="modal" data-target="#doughnutModal">
                Compliance Reach <i class="fas fa-expand"></i>
              </a>
            </div>
          </div>
        </div>


        <ChartModal id="doughnutModal" chart={<Doughnut data={datah} options={options} />}></ChartModal>
      </div>
    )
  // }
  // else {
  //   return (
  //     <div className="">
  //       <div className="doughnutchart">
  //         <div className=" d-none d-md-flex d-xl-flex d-lg-flex justify-content-center pr-0 ">
  //           <LoadingSpinner></LoadingSpinner>
  //         </div>

  //       </div>
  //     </div>
  //   )
  // }
};

export default DoughChart;
