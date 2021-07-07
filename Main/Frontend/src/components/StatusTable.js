import "bootstrap/dist/css/bootstrap.min.css";
import * as Table from "react-bootstrap";
import { useState, useEffect } from "react";

import {dataTable}  from "./DataTable";

const StatusTable = () => {
    const [len,setLen]=useState(0);
    const [heading,setHeading]=useState([]);
    const [tableLen,settableLen]=useState(0);
    const [data,setData]=useState(Array<[]>[]);
    
        useEffect(() => {
        let isSubscribed=true;
        dataTable().then((val)=>{
            console.log(val);
            if(isSubscribed){
               setLen(val.len);
               setHeading(val.heading);
               settableLen(val.tablelen);
               setData(val.dataR);
            }
        })
        
        return () =>isSubscribed=false
    }, [])
    if(data){
   
    return (
        <div>
            <Table.Table className='responsive'>
                <thead>
                <tr>
                    {Array.from({ length: len }).map((_, index) => (
                    <th key={index}>{heading[index]}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
            
                {Array.from({ length: tableLen }).map((_, index) => (
                    <tr key={index}>
                    {Array.from({ length: len }).map((_, index1) => (
                        <td key={index1}>{data[index][index1]}</td>
                    ))}
                    </tr>
                ))} 
                </tbody> 
            </Table.Table>
        </div>
    );
    }
    else{
        return (
            <h1>Still loading</h1>
        )
    }
};

export default StatusTable;








