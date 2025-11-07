import cvData from '../data/cvData';
import Sidebar from '../components/Sidebar';
import { parseContent, renderBlocks } from '../utils/parseContent.jsx';

export default function CV() {
  // Use direct path for PDF since it's in the public folder
  const cvPath = cvData.pdfPath;
  const structured = parseContent(cvData.content);
  const renderedBlocks = renderBlocks(structured);

  return (
    <article className="post">
      {/* CV Actions Bar */}
      <div className="cv-actions-bar">
        <a 
          href={cvPath} 
          download="Chase_Miner_CV.pdf"
          className="cv-download-btn"
        >
          📄 Download PDF
        </a>
        <a 
          href={cvPath} 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-view-btn"
          onClick={(e) => {
            // Ensure proper navigation to PDF
            e.preventDefault();
            window.open(cvPath, '_blank', 'noopener,noreferrer');
          }}
        >
          🔗 Open PDF
        </a>
      </div>

      <div className="post-layout">
        <Sidebar />
        <div className="post-inner">
          <h1>{cvData.title}</h1>
          <div className="post-body">
            {renderedBlocks}
          </div>
        </div>
      </div>
    </article>
  );
}
