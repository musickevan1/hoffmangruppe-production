import { ASSETS } from '../constants';

export function initPdfViewer() {
  const container = document.getElementById('pdf-viewer');
  if (!container) {
    throw new Error('PDF viewer container not found');
  }

  // Clear any existing content
  container.innerHTML = '';

  // Create iframe element
  const iframe = document.createElement('iframe');
  iframe.src = ASSETS.adImpressionsPdf;
  iframe.style.width = '100%';
  iframe.style.height = '800px';
  iframe.style.border = 'none';
  
  // Add iframe to container
  container.appendChild(iframe);
}
