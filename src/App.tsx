import React from 'react';
import './styles/scroll-padding.css';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import QuoteForm from './components/QuoteForm';
import { ASSETS } from './constants';
import { PRODUCTS } from './data/products';
import InfographicCarousel from './components/InfographicCarousel';

import { 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Target, 
  Megaphone, 
  BarChart3,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-air-blue text-white">
        <div className="absolute inset-0">
          <picture>
            <source 
              srcSet={ASSETS.beachBackground} 
              media="(min-width: 768px)"
            />
            <source
              srcSet={ASSETS.bgResponsive}
              media="(max-width: 767px)"
            />
            <img
              src={ASSETS.bgResponsive}
              alt="Beach background with promotional products"
              className="w-full h-full object-cover object-[center_top] opacity-20 md:object-cover md:object-[center_top] sm:object-contain sm:object-center"
              loading="lazy"
              sizes="100vw"
            />
          </picture>
        </div>
        <AnimatedSection className="relative h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Your Partner in Promotional Excellence
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl">
              Discover our extensive range of promotional products designed to elevate your brand and make lasting impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-6">
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-air-blue px-8 py-4 sm:px-8 sm:py-4 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center justify-center w-full sm:w-auto text-lg sm:text-lg text-center"
                >
                  <span>Browse Our Catalogs</span>
                  <ArrowRight className="ml-2 h-6 w-6 sm:h-6 sm:w-6" />
                </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 sm:px-8 sm:py-4 rounded-md font-medium hover:bg-white hover:text-air-blue transition-colors text-lg sm:text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
          </div>
        </AnimatedSection>
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-center animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowRight className="h-10 w-10 sm:h-10 sm:w-10 text-white transform rotate-90 hover:scale-110 transition-transform" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
              Hoffmangruppe Promotions is your trusted partner for innovative marketing solutions and high-quality promotional products. With over a decade of experience, we specialize in helping businesses create lasting impressions through creative branding strategies and custom merchandise.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-8 sm:mb-12">
                  <img src={ASSETS.hpLogo} alt="HP Logo" className="h-16 sm:h-20 w-auto mb-6 sm:mb-8 mx-auto" />
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-air-blue">Our Story</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
                    <i>"I started Hoffmangruppe Promotions in 2010 as an Authorized Kaeser & Blair Dealer to provide
                    specialty marketing solutions to my friends, family, and my organizations at discounted prices. 
                    I am grateful to have received countless referrals from my initial market. I am committed to 
                    saving my clients' marketing budgets for the same quality products they can get elsewhere. 
                    I look forward to connecting and becoming your marketing partner!"</i>
                    <br />
                    - Chris Hoffman, Owner/Founder
                  </p>
                </div>

                <div className="bg-gradient-to-br from-air-blue to-air-blue-700 p-8 sm:p-12 rounded-xl">
                  <div className="mb-8 sm:mb-12">
                  <img src={ASSETS.kbLogo} alt="Kaeser & Blair Logo" className="h-16 sm:h-20 w-auto mb-6 sm:mb-8 mx-auto" />
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-white">Our Partnership</h3>
                    <p className="text-gray-100 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
                      Kaeser and Blair is a family owned company that has been a leader in the industry for 130 years! 
                      They have long lasting relationships with all of the industry suppliers. What that means for our 
                      clients is hundreds of preferred vendors offering YOU better pricing, reduced setup fees, and 
                      faster turnaround times!
                    </p>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="w-4 h-4 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      <p className="text-lg sm:text-lg text-gray-100">130+ Years in Business</p>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="w-4 h-4 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      <p className="text-lg sm:text-lg text-gray-100">Preferred Vendor Network</p>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="w-4 h-4 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      <p className="text-lg sm:text-lg text-gray-100">Faster Turnaround Times</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12 sm:mt-16">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-air-blue text-white px-10 py-5 sm:px-12 sm:py-6 rounded-xl hover:bg-air-blue-600 transition-colors text-lg sm:text-xl font-semibold"
                  >
                    Let's Work Together
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
              Explore our comprehensive collection of promotional products designed to make your brand stand out.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:gap-8 sm:px-0">
            {PRODUCTS.map((item) => (
              <AnimatedSection
                key={item.title}
                animation="zoom-in"
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all"
              >
                <div className="flex flex-col h-full p-4 sm:p-6">
                    {item.title === "S&S Collection" && (
                    <img
                      src={ASSETS.ssbrands}
                      alt="Top brands featured in the S&S Collection"
                      className="w-full h-auto mb-4 sm:mb-6 rounded-lg"
                    />
                    )}
                    {item.title === "Sanmar" && (
                    <img
                      src={ASSETS.sanmarbrands}
                      alt="Popular brands in the Sanmar catalog"
                      className="w-full h-auto mb-4 sm:mb-6 rounded-lg"
                    />
                    )}
                  {React.createElement(item.icon, { className: "h-8 w-8 sm:h-10 sm:w-10 text-air-blue mb-4 sm:mb-6" })}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-lg sm:text-lg mb-4 sm:mb-6 flex-grow">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-air-blue hover:text-air-blue-600 group-hover:translate-x-2 transition-all text-lg sm:text-lg"
                  >
                    View Catalog <ExternalLink className="ml-2 h-6 w-6 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom Search Box */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-air-blue to-air-blue-600 p-8 sm:p-10 rounded-xl text-center max-w-2xl mx-auto">
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-white mx-auto mb-6 sm:mb-8" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Didn't find what you're looking for?</h3>
              <p className="text-white/90 mb-6 sm:mb-8 text-lg sm:text-xl">Search our extensive database of products and supplier catalogs</p>
              <a 
                href="https://www.zoomcatalog.com/catalogsearch/HoffmangruppePromotions#list/all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-air-blue px-8 py-4 sm:px-10 sm:py-5 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center text-lg sm:text-xl"
              >
                Search Database <ArrowRight className="ml-2 h-6 w-6 sm:h-6 sm:w-6" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Promotional Products Section */}
      <section id="why-promo" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">Why Promotional Products?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
              Discover how promotional products can elevate your brand and create lasting impressions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
            {[
              {
                title: 'Brand Recognition',
                description: 'Increase visibility and create lasting brand awareness',
                icon: Target
              },
              {
                title: 'Customer Engagement',
                description: 'Create meaningful connections with your audience',
                icon: Megaphone
              },
              {
                title: 'Measurable ROI',
                description: 'Track the success of your promotional campaigns',
                icon: BarChart3
              }
            ].map((item) => (
              <AnimatedSection
                key={item.title}
                animation="zoom-in"
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
              >
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-air-blue mb-6 sm:mb-8" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{item.title}</h3>
                <p className="text-gray-600 text-lg sm:text-lg">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>

        </div>

              {/* Infographic Carousel Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfographicCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
            <AnimatedSection animation="fade-right">
              <div className="space-y-8 sm:space-y-10">
                <div className="mb-8 sm:mb-10">
                  <img
                    src={ASSETS.hpLogo}
                    alt="HP Logo"
                    className="h-16 sm:h-20 w-auto rounded-lg"
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
                <p className="text-gray-600 text-lg sm:text-xl">
                  Ready to elevate your brand? Get in touch with us today.
                </p>
                <div className="space-y-6 sm:space-y-8">
                  <p className="flex items-center text-gray-600 text-lg sm:text-xl">
                    <User className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                    Chris Hoffman
                  </p>
                  <p className="flex items-center text-gray-600 text-lg sm:text-xl">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                    Springfield, MO
                  </p>
                  <p className="flex items-center text-gray-600 text-lg sm:text-xl">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                    <a href="tel:4172004633" className="hover:text-air-blue-600">417.200.4633</a>
                  </p>
                  <p className="flex items-center text-gray-600 text-lg sm:text-xl">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                    <a href="mailto:info@hoffmangruppe.com" className="hover:text-air-blue-600">info@hoffmangruppe.com</a>
                  </p>
                  <div className="flex space-x-6 sm:space-x-8 pt-6">
                    <a href="https://www.facebook.com/profile.php?id=100063604969915" target="_blank" rel="noopener noreferrer">
                      <img src={ASSETS.facebookLogo} alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition-opacity" />
                    </a>
                    <a href="https://www.linkedin.com/in/chris-hoffman-62473a29" target="_blank" rel="noopener noreferrer">
                      <img src={ASSETS.linkedinLogo} alt="LinkedIn" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-sky-50 p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[rgb(3_105_161)]">
                <h3 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-10 text-sky-700">Request a Quote</h3>
                <QuoteForm className="[&_input]:shadow-sm [&_textarea]:shadow-sm" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-air-blue">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3">
            
            {/* Company Info */}
            <div className="space-y-8 sm:space-y-8 mb-12 sm:mb-0">
              <div className="flex items-center space-x-6 sm:space-x-8">
                <img 
                  src={ASSETS.hoffmangruppeLogo} 
                  alt="Hoffmangruppe Promotions" 
                  className="h-16 sm:h-20 w-auto rounded-lg"
                />
                <img 
                  src={ASSETS.kbLogo} 
                  alt="Kaeser & Blair" 
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
              <p className="text-gray-300 text-lg sm:text-lg">
                Your trusted partner in promotional products and brand marketing solutions.
              </p>
              <div className="flex space-x-8 sm:space-x-8">
                <a href="https://www.facebook.com/profile.php?id=100063604969915" target="_blank" rel="noopener noreferrer">
                  <img src={ASSETS.facebookLogo} alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/chris-hoffman-62473a29" target="_blank" rel="noopener noreferrer">
                  <img src={ASSETS.linkedinLogo} alt="LinkedIn" className="h-8 w-8 sm:h-10 sm:w-10 hover:opacity-75 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8 sm:space-y-8 mb-12 sm:mb-0">
              <h3 className="text-white font-semibold text-xl sm:text-2xl">Quick Links</h3>
              <nav className="space-y-4 sm:space-y-4">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-lg sm:text-lg text-left w-full"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-lg sm:text-lg text-left w-full"
                >
                  About Us
                </button>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-lg sm:text-lg text-left w-full"
                >
                  Products
                </button>
                <button 
                  onClick={() => document.getElementById('why-promo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-lg sm:text-lg text-left w-full"
                >
                  Why Promo?
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-lg sm:text-lg text-left w-full"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 sm:space-y-8">
              <h3 className="text-white font-semibold text-xl sm:text-2xl">Contact Info</h3>
              <div className="text-gray-300 text-lg sm:text-lg space-y-4 sm:space-y-4">
                <p className="flex items-center">
                  <User className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                  Chris Hoffman
                </p>
                <p className="flex items-center">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                  Springfield, MO
                </p>
                <p className="flex items-center">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                  <a href="tel:4172004633" className="text-gray-300 hover:text-white">417.200.4633</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                  <a href="mailto:info@hoffmangruppe.com" className="text-gray-300 hover:text-white">info@hoffmangruppe.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-air-blue-600 mt-12 sm:mt-16 pt-12 sm:pt-16">
            <p className="text-center text-gray-300 text-lg sm:text-lg">
              &copy; {new Date().getFullYear()} Hoffmangruppe Promotions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
