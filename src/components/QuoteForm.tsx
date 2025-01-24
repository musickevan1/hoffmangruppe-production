import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateForm } from '@utils/validation';

interface QuoteFormProps {
  className?: string;
}

export default function QuoteForm({}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    catalog: '',
    itemNumber: '',
    color: '',
    quantity: '',
    explanation: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        catalog: formData.catalog,
        item_number: formData.itemNumber,
        color: formData.color,
        quantity: formData.quantity,
        explanation: formData.explanation
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

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        catalog: '',
        itemNumber: '',
        color: '',
        quantity: '',
        explanation: ''
      });
    } catch (err) {
      setError('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="quote-form-title">
      <h2 id="quote-form-title" className="sr-only">Quote Request Form</h2>
      <div>
        <label htmlFor="name" className="block text-base font-medium text-night mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          aria-required="true"
          aria-describedby="name-error"
          className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
          value={formData.name}
          onChange={handleChange}
        />
        {error && error.includes('Name') && (
          <span id="name-error" className="text-red-600 text-sm mt-1" role="alert">
            {error}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-medium text-night mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="catalog" className="block text-base font-medium text-night mb-2">
          Product Catalog
        </label>
        <select
          name="catalog"
          id="catalog"
          required
          className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
          value={formData.catalog}
          onChange={handleChange}
        >
          <option value="">Select a catalog</option>
          <option value="one-stop">One Stop Shop</option>
          <option value="sportswear">Sportswear Collection</option>
          <option value="casuals">Company Casuals</option>
        </select>
      </div>

      <div>
        <label htmlFor="itemNumber" className="block text-base font-medium text-night mb-2">
          Item Number
        </label>
        <input
          type="text"
          name="itemNumber"
          id="itemNumber"
          required
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
          required
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
          required
          min="1"
          className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="explanation" className="block text-base font-medium text-night mb-2">
          Brief Explanation
        </label>
        <textarea
          name="explanation"
          id="explanation"
          rows={4}
          className="mt-1 block w-full rounded-md border-silver shadow-sm focus:border-air-blue focus:ring focus:ring-air-blue/20 bg-white text-night text-lg p-3"
          value={formData.explanation}
          onChange={handleChange}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          Quote request submitted successfully!
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-air-blue text-white px-6 py-4 rounded-md hover:bg-air-blue-600 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : 'Submit Quote Request'}
        </button>

        <button
          type="button"
          onClick={() => {
            setFormData({
              name: '',
              email: '',
              catalog: '',
              itemNumber: '',
              color: '',
              quantity: '',
              explanation: ''
            });
            setError('');
            setSuccess(false);
          }}
          className="w-1/3 bg-gray-100 text-night px-6 py-4 rounded-md hover:bg-gray-200 transition-colors text-lg font-medium"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
