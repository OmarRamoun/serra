import { useState } from 'react';

export const useForm = (initialForm) => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (event, field, value) => {
    const { name, type, checked } = event.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ?
          checked :
          { ...prevForm[name], [field]: value }
      };
    });
  };

  const resetForm = () => setForm(initialForm);

  const validateForm = (field, value) => {
    setForm(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        valid: value
      }
    }));
  };

  return [
    form,
    handleChange,
    resetForm,
    validateForm // only for signup form (optional)
  ];
};
