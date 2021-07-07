import React, { useState } from 'react';
// import { Document, Page,pdfjs } from 'react-pdf';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from './roughsplunkdoc.pdf'
import './documentation.css'
  

  
export default function Documentation() {
  const [data, setData] = useState([]);


return (
  <div className ='pdfhello'>
    <Document file={pdfFile}>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
      <Page pageNumber={3} />
    </Document>
  </div>
);
}
