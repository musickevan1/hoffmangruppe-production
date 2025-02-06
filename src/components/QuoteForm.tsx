import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateForm } from '../utils/validation';

interface QuoteFormProps {
  className?: string;
}

export default function QuoteForm({ className }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    catalog: '',
    itemNumber: '',
    color: '',
    quantity: '',
    explanation: '',
    customSupplier: '' // New field for custom supplier name
  });
  const [showCustomSupplier, setShowCustomSupplier] = useState(false); // State for custom supplier input visibility
  const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        catalog: formData.catalog,
        item_number: formData.itemNumber,
        color: formData.color,
        quantity: formData.quantity,
        explanation: formData.explanation,
        custom_supplier: formData.customSupplier // Include custom supplier in the email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...templateParams,
          to_email: import.meta.env.VITE_EMAILJS_TEST_EMAIL
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormData({
        name: '',
        email: '',
        catalog: '',
        itemNumber: '',
        color: '',
        quantity: '',
        explanation: '',
        customSupplier: '' // Reset custom supplier field
      });

      setShowPopup(true); // Show the pop-up after successful submission
      setErrorMessage(''); // Clear any previous error messages
    } catch (err) {
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Show custom supplier input if "Other" is selected
    if (name === 'catalog') {
      setShowCustomSupplier(value.toLowerCase() === 'other');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="quote-form-title">
        <h2 id="quote-form-title" className="sr-only">Quote Request Form</h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-base font-medium text-night mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-medium text-night mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="catalog" className="block text-base font-medium text-night mb-2">
            Catalog
          </label>
          <select
            name="catalog"
            id="catalog"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.catalog}
            onChange={handleChange}
          >
            <option value="">Select a catalog</option>
            <option value="onestop">One Stop Shop</option>
            <option value="quarterly">Quarterly Sales Flyer</option>
            <option value="sscollection">S&S Collection</option>
            <option value="sanmar">SanMar Collection</option>
            <option value="other">Other</option>
          </select>
        </div>
        {showCustomSupplier && (
          <div>
            <label htmlFor="customSupplier" className="block text-base font-medium text-night mb-2">
              Custom Supplier Name
            </label>
            <input
              type="text"
              name="customSupplier"
              id="customSupplier"
              className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
              value={formData.customSupplier}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="itemNumber" className="block text-base font-medium text-night mb-2">
            Item Number
          </label>
          <input
            type="text"
            name="itemNumber"
            id="itemNumber"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.itemNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="color" className="block text-base font-medium text-night mb-2">
            Color
          </label>
          <input
            type="text"
            name="color"
            id="color"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-base font-medium text-night mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="explanation" className="block text-base font-medium text-night mb-2">
            Explanation
          </label>
          <textarea
            name="explanation"
            id="explanation"
            className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
            value={formData.explanation}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-air-blue hover:bg-air-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-air-blue"
        >
          Submit
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p>Thank you for requesting a quote. We will get back to you as soon as possible!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-air-blue hover:bg-air-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-air-blue"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
