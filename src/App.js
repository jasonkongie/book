import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function App() {
  const [pdfFiles, setPdfFiles] = useState(["pdf1.pdf", "pdf2.pdf"]); // replace with your actual PDF file names

  return (
    <div>
      {pdfFiles.map(pdf => (
        <Document file={pdf} key={pdf}>
          <Page pageNumber={1} />
        </Document>
      ))}
    </div>
  );
}

export default App;
