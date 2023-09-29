import React from 'react'

const Forms = () => {
    const handleDownload1 = () => {

        const pdfFilePath = '/documents/adult-services-application.pdf';

        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'adult-services-application.pdf'; // Specify the desired filename
        link.click();
      };
      const handleDownload2 = () => {

        const pdfFilePath = '/documents/medical-needs.pdf';

        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'medical-needs.pdf'; // Specify the desired filename
        link.click();
      };
      const handleDownload3 = () => {

        const pdfFilePath = '/documents/Home_Help_Agency_Invoice.docx'; // Corrected path

        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'Home_Help_Agency_Invoice.docx'; // Specify the desired filename
        link.click();
      };
  return (
    <div className="forms-container">
        <div className="forms-content">
            <div className="form-card">
                <h2 className="form-title">Adult Services Application</h2>
                <button onClick={handleDownload1} className="download-button">
                    Download
                </button>
            </div>

            <div className="form-card">
                <h2 className="form-title">Medical Needs Form</h2>
                <button onClick={handleDownload2} className="download-button">
                    Download
                </button>
            </div>

            <div className="form-card">
                <h2 className="form-title">Home Help Agency</h2>
                <button onClick={handleDownload3} className="download-button">
                    Download
                </button>
            </div>
        </div>
  </div>
);
};
    
  


export default Forms;