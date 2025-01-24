import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import hoffmangruppeLogo from '../assets/HP logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Why Promo?', id: 'why-promo' },
    { name: 'Contact', id: 'contact', isButton: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <img
                src={hoffmangruppeLogo}
                alt="Hoffmangruppe Promotions"
                className="h-12 w-auto object-contain rounded-lg"
                style={{ backgroundColor: 'transparent' }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  item.isButton
                    ? isScrolled
                      ? 'bg-air-blue text-white hover:bg-air-blue-600 shadow-md hover:shadow-lg'
                      : 'bg-white text-air-blue hover:bg-white/90'
                    : isScrolled 
                      ? 'text-night hover:text-air-blue' 
                      : 'text-white hover:text-silver'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-night hover:text-air-blue hover:bg-air-blue/5'
                  : 'text-white hover:text-silver hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-lg font-medium ${
                  item.isButton
                    ? 'bg-air-blue text-white hover:bg-air-blue-600'
                    : 'text-night hover:text-air-blue hover:bg-air-blue/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
