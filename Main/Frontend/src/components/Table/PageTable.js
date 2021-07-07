import "./PageTable.css";
// import { dataTable } from "../../Services/DataTable";
// import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useState, useEffect } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

function PageTable(props) {
    const [data, setData] = useState([]);

    console.log(props.data2)
    if (props.data3.length != 0) {
        console.log(props.data3)
        var convert = props.data3.rows
        console.log(convert)


    }
    const datatable = {
        columns: [
            {
                label: "IP",
                field: "IP",
                width: 150
                
            },
            {
                label: "Hostname",
                field: "Hostname",
                sort: "disabled",
                width: 270
                
            },
            {
                label: "OS",
                field: "OS",
                width: 200
            },
            {
                label: "Environment",
                field: "Environment",
                sort: "disabled",
                width: 100
            },
            {
                label: "Issues",
                field: "Issues",
                sort: "disabled",
                width: 100
            },
            {
                label: "Status",
                field: "Status",
                sort: "disabled",
                width: 150
            }

        ],
        rows: convert
    };


  // const [heading, setHeading] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   let isSubscribed = true;
  //   dataTable().then((val) => {
  //     console.log(val);
  //     if (isSubscribed) {
  //       setHeading(val.heading);
  //       setData(val.dataR);
  //     }
  //   });
  //   return () => (isSubscribed = false);
  // }, []);

  // if (data) {
  //   const arr = [];
  //   data.forEach((val) => {
  //     const ABC = {};
  //     heading.forEach((v, index) => {
  //       ABC[v] = val[index];
  //     });
  //     arr.push(ABC);
  //   });
  //   const datatable = {
  //     columns: [
  //       {
  //         label: heading[0],
  //         field: heading[0],
  //         width: 150,
  //         attributes: {
  //           "aria-controls": "DataTable",
  //           "aria-label": "Name",
  //         },
  //         // fontSize:100,
  //       },
  //       {
  //         label: heading[1],
  //         field: heading[1],
  //         width: 270,
  //       },
  //       {
  //         label: heading[2],
  //         field: heading[2],
  //         width: 200,
  //       },
  //       {
  //         label: heading[3],
  //         field: heading[3],
  //         width: 100,
  //       },
  //       {
  //         label: heading[4],
  //         field: heading[4],
  //         sort: "disabled",
  //         width: 150,
  //       },
  //       {
  //         label: heading[5],
  //         field: heading[5],
  //         sort: "disabled",
  //         width: 100,
  //       },
  //     ],
  //     rows: arr,
  //   };
    return (


      <div className=" row">
        <div className="page-table-body col-lg-10 col-md-10 col-10 m-auto py-0">
          <div className='col-lg-12 col-md-12 col-12 text-right file-export'>
            <Link to='/filedownload' className=' file-export-text'>
              Export Sheet <i class="fas fa-file-export"></i>
            </Link>
          </div>

          <MDBDataTableV5
            striped
            hover
            entriesOptions={[10, 20, 25]}
            entries={10}
            data={datatable}
            searchBottom={false}
            className="your-custom-styles"
            pagingTop
            searchTop
          />
        </div>
      </div>

    );
  // }
  // else {
  //   return (
  //     <div className="container-fluid">
  //       <div className=" row">
  //         <div className="page-table-body col-lg-10 col-md-10 col-10 m-auto py-0 d-flex justify-content-center">
  //           <LoadingSpinner />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
}

export default PageTable;
