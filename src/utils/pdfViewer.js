export function initPdfViewer() {
  const container = document.getElementById('pdf-viewer');
  if (!container) return;

  const pdfIframe = document.createElement('iframe');
  pdfIframe.src = '/src/assets/Ad_Impressions_2023.pdf';
  pdfIframe.width = '100%';
  pdfIframe.height = '800px';
  pdfIframe.className = 'w-full h-[80vh] border-2 border-air-blue';
  pdfIframe.setAttribute('title', 'Ad Impressions 2023 PDF Report');
  pdfIframe.setAttribute('aria-label', 'Ad Impressions 2023 PDF Report');
  
  container.appendChild(pdfIframe);
}
