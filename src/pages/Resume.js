// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../index.css';

const Resume = () => {
  const pdfURL = '/images/Resume.pdf';

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <>
      <h1>Resume</h1>
      <button id="downloadBtn" onClick={onButtonClick} value="download">Download</button>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <div id="resume">
          <Viewer fileUrl={pdfURL} />
        </div>
      </Worker>
    </>
    
  );
};

export default Resume;
