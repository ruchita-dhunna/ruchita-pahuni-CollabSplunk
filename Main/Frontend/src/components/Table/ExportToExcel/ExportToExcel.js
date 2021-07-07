import React from 'react'
// import FileSaver from "file-saver";
// import * as XLSX from "xlsx";
// import axios from 'axios';
// import PageTable from '../PageTable'

import testinv from '../../../assets/test.csv';

export const ExportToExcel = () => {

  return (
    <div>
      <iframe src={testinv} title="excel" />
      <h2 style={{ height: '70vh' }}>Sheet has been downloaded. Please check</h2>
    </div>
    // <button onClick={(e) => exportToCSV(apiData, fileName)}>Export <i class="fas fa-file-export"></i></button>
  );
};
