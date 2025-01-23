import React, { useState } from 'react';

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
    explanation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-base font-medium text-night mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
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

      <button
        type="submit"
        className="w-full bg-air-blue text-white px-6 py-4 rounded-md hover:bg-air-blue-600 transition-colors text-lg font-medium"
      >
        Submit Quote Request
      </button>
    </form>
  );
}
