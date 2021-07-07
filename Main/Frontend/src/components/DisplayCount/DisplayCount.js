import { getCountData } from "../../Services/GetData";
import { useState, useEffect } from "react";
import "./DisplayCount.css";
import { Link } from "react-router-dom";

const DisplayCount = (props) => {
  // const [total, settotal] = useState();
  // const [noncompliant, setnc] = useState();
  // const [percent, setperc] = useState();
  // useEffect(() => {
  //   getCountData().then((val) => {
  //     settotal(val.total);
  //     setnc(val.noncompliant);
  //     setperc(val.percentage);
  //   });
  // }, []);

  if (props.data4.length != 0) {
    console.log(props.data4)
    var convert = props.data4.rows
    var obj = convert[0];
            var v1=obj.TC
            var v2=obj.Nis
            var v3=v1-v2
            var v4= (v3/v1)*100
            v4 =v4.toFixed(2)

  }

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="card col-lg-12 col-md-12 col-12 p-3">
          {/* <div className=" card-title text-light heading px-3">Splunk dashboard </div> */}
          <div className="card-body count">
            <div className='heading'>We're almost there!!</div>
            <Link to="/table">
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated  bg-success"
                role="progressbar"
                aria-valuenow={v4}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: v4 + "%" , 'background-color': "#191970", 'color':"white" , 'fontStyle':"bold"}}
              >
              {v4}%
              </div>
            </div>
              </Link>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 p-0 d-lg-block d-none">
          <div className="card-body">
            <div className="card-title heading  ">Non-Compliant</div>
            <Link to="/table">
              <div className="card-text count p-0">{v2}</div>
            </Link>
          </div>
        </div>
        <div className=" card col-lg-4 col-md-4  p-0 d-lg-block  d-none">
          <div className="card-body">
            <div className=" card-title  heading ">% Compliance</div>
            <div className="card-text count">{v4}%</div>
          </div>
        </div>
        <div className="card col-lg-4 col-md-4 p-0 d-lg-block  d-none ">
          <div className="card-body">
            <div className=" card-title  heading ">
              Inventory Total
            </div>
            <div className="card-text count">{v1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayCount;
