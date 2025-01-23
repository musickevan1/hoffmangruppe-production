import hoffmangruppeLogo from '/src/assets/HP logo.jpg';
import kbLogo from '/src/assets/K&B.png';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <div className="h-14 w-auto">
                <img
                  src={hoffmangruppeLogo}
                  alt="Hoffmangruppe Promotions"
                  className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                  style={{ maxWidth: '160px' }}
                />
              </div>
              <div className="h-14 w-auto">
                <img
                  src={kbLogo}
                  alt="Kaeser & Blair"
                  className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                  style={{ maxWidth: '160px' }}
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-5 w-5 text-silver" />
                <span className="text-silver">1234 Business Rd, Cincinnati, OH 45242</span>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-5 w-5 text-silver" />
                <a href="tel:+15135551234" className="text-silver hover:text-white transition-colors">+1 (513) 555-1234</a>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-5 w-5 text-silver" />
                <a href="mailto:info@hoffmangruppe.com" className="text-silver hover:text-white transition-colors">info@hoffmangruppe.com</a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/hoffmangruppe" target="_blank" rel="noopener noreferrer">
                  <img src="/src/assets/facebook-logo.png" alt="Facebook" className="h-6 w-6 hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/company/hoffmangruppe" target="_blank" rel="noopener noreferrer">
                  <img src="/src/assets/linkedin-logo.png" alt="LinkedIn" className="h-6 w-6 hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Rest of the footer content remains the same */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-night-600 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-silver text-sm tracking-wide">
              © {currentYear} Hoffmangruppe Promotions. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-silver hover:text-white text-sm transition-colors duration-200 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-silver hover:text-white text-sm transition-colors duration-200 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
