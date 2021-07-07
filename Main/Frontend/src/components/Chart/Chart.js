import LineChart from "./LineChart";
import DisplayCount from '../DisplayCount/DisplayCount';
import DoughChart from "./DoughChart";
import React, { useState, useEffect } from 'react';
function Chart() {
  const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data4, setData4] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/access").then(res => res.json()).then((res) => {
            console.log(res)
            setData(res)
        })
        fetch("http://localhost:4000/dough").then(res => res.json()).then((res) => {
            console.log(res)
            setData2(res)
        })
        fetch("http://localhost:4000/dough").then(res => res.json()).then((res) => {
            console.log(res)
            setData4(res)
        })

    }

    
    , [])


  return (
    <div className="container-fluid">
      <div className="row m-5">
      <div className="col-lg-7 col-md-8 col-12">
          <DisplayCount data4={data4}/> 
      </div>
      <div className="col-lg-5 col-md-4 col-12">
            <div>
            <DoughChart data2={data2}/>
            </div>
      </div>
      <div className="col-lg-12 col-md-12 col-12">
      {/* <div className="row"> */}
        <div className="col-lg-12 col-md-12 col-12 px-0 m-0 pt-3">
            <LineChart  data={data}/>
        </div>

        {/* </div> */}
      </div>

      </div>
    </div>
  );
}

export default Chart;
