import { ASSETS } from '../constants';

export function initPdfViewer() {
  const container = document.getElementById('pdf-viewer');
  if (!container) {
    throw new Error('PDF viewer container not found');
  }

  // Clear any existing content
  container.innerHTML = '';

  // Create object element for PDF
  const object = document.createElement('object');
  object.data = '/Ad_Impressions_2023.pdf';
  object.type = 'application/pdf';
  object.style.width = '100%';
  object.style.height = '800px';
  
  // Add fallback message
  const fallback = document.createElement('p');
  fallback.textContent = 'Your browser does not support PDF viewing.';
  fallback.style.textAlign = 'center';
  fallback.style.marginTop = '2rem';
  
  // Add elements to container
  container.appendChild(object);
  container.appendChild(fallback);
}
