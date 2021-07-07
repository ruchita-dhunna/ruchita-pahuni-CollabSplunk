import { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact'
import { dataTable } from "../../Services/dataTable";
import "./StatusTable.css";

const StatusTable = () => {
  const [len, setLen] = useState(0);
  const [heading, setHeading] = useState([]);
  const [tableLen, settableLen] = useState(0);
  const [data, setData] = useState(Array < [] > []);
  const [dataTableData, setDataTableData] = useState([]);
  const [datatable, setDatatable] = useState({});

  useEffect(() => {
    const dataTable = {
      columns: [
        {
          label: heading[0],
          field: heading[0],
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: heading[1],
          field: heading[1],
          width: 270,
        },
        {
          label: heading[2],
          field: heading[2],
          width: 200,
        },
        {
          label: heading[3],
          field: heading[3],
          // sort: 'asc',
          width: 100,
        },
        {
          label: heading[4],
          field: heading[4],
          sort: 'disabled',
          width: 150,
        },
        {
          label: heading[5],
          field: heading[5],
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: dataTableData
    }
    setDatatable(dataTable);
  }, [data, dataTableData])

  useEffect(() => {
    let isSubscribed = true;

    dataTable().then((val) => {
      if (isSubscribed) {
        setLen(val.len);
        setHeading(val.heading);
        settableLen(val.tablelen);
        setData(val.dataR);
        setDataTableData(val.dataTable)

      }
    })

    return () => isSubscribed = false
  }, [])
  if (data) {
    return (
      <div className="col-lg-11 col-md-10 col-sm-11 m-auto  ">
        <div className="overflow-auto mb-3 bg-white">

          <MDBDataTableV5
            className="dataTable"
            hover
            striped
            entriesOptions={[5, 10, 20, 30, 40]}
            entries={5}
            pagesAmount={10}
            data={datatable}
            pagingTop
            searchTop
            searchBottom={false}
            barReverse
          />
        </div>
      </div>
    );
  }
  return (<span>Loading....</span>)
};
export default StatusTable;








