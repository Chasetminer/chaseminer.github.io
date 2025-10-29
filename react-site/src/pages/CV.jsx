export default function CV() {
  return (
    <section className="cv">
      <h1>Curriculum Vitae</h1>
      <div className="cv-container">
        <div className="cv-actions">
          <a 
            href="/Chase_Miner_CV_DRAFT.pdf" 
            download="Chase_Miner_CV.pdf"
            className="cv-download-btn"
          >
            Download PDF
          </a>
          <a 
            href="/Chase_Miner_CV_DRAFT.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cv-view-btn"
          >
            Open in New Tab
          </a>
        </div>
        
        <div className="cv-embed">
          <embed 
            src="/Chase_Miner_CV_DRAFT.pdf" 
            type="application/pdf" 
            width="100%" 
            height="800px"
          />
        </div>
        
        {/* Fallback for browsers that don't support embed */}
        {/* <div className="cv-fallback">
          <p>
            If the PDF doesn't display properly, you can{' '}
            <a href="/Chase_Miner_CV_DRAFT.pdf" target="_blank" rel="noopener noreferrer">
              view it in a new tab
            </a>{' '}
            or{' '}
            <a href="/Chase_Miner_CV_DRAFT.pdf" download="Chase_Miner_CV.pdf">
              download it directly
            </a>.
          </p>
        </div> */}
      </div>
    </section>
  );
}
