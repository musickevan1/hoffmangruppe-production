export interface FormData {
  name: string;
  email: string;
  catalog: string;
  itemNumber: string;
  color: string;
  quantity: string;
  explanation: string;
}

export const validateForm = (formData: FormData): string => {
  if (!formData.name.trim()) return 'Name is required';
  if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email address';
  if (!formData.catalog) return 'Please select a catalog';
  if (!formData.itemNumber) return 'Item number is required';
  if (!formData.color) return 'Color is required';
  if (!formData.quantity || Number(formData.quantity) < 1) return 'Quantity must be at least 1';
  return '';
};
