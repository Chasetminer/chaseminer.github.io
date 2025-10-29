import { getAssetPath } from '../utils/assetPath.js';

export default function CV() {
  const cvPath = getAssetPath('/Chase_Miner_CV_DRAFT.pdf');
  
  return (
    <section className="cv">
      <h1>My CV</h1>
      <div className="cv-container">
        <div className="cv-actions">
          <a 
            href={cvPath} 
            download="Chase_Miner_CV.pdf"
            className="cv-download-btn"
          >
            Download PDF
          </a>
          <a 
            href={cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cv-view-btn"
          >
            Open in New Tab
          </a>
        </div>
        
        <div className="cv-embed">
          <embed 
            src={cvPath} 
            type="application/pdf" 
            width="100%" 
            height="800px"
          />
        </div>
        
        {/* Fallback for browsers that don't support embed */}
        <div className="cv-fallback">
          <p>
            If the PDF doesn't display properly, you can{' '}
            <a href={cvPath} target="_blank" rel="noopener noreferrer">
              view it in a new tab
            </a>{' '}
            or{' '}
            <a href={cvPath} download="Chase_Miner_CV.pdf">
              download it directly
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
