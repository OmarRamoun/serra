import { PASSWORD_REGEX, EMAIL_REGEX } from '../Validations/regex';
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
  const setFieldValid = (field, value) => {
    setForm(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        valid: value
      }
    }));
  };
  const getValue = field => form[field].fieldValue;

  return [
    form,
    handleChange,
    resetForm,
    getValue,
    setFieldValid // only for signup form (optional)
  ];
};

export const getFieldProps = (field, fieldAriaText) => ({
  validate: true,
  value: field.fieldValue,
  valid: field.valid,
  focus: field.focus,
  "aria-invalid": !field.valid,
  "aria-describedby": fieldAriaText + "-error-msg",
  ariaId: fieldAriaText + "-error-msg"
});

export const usePasswordRegex = (password) => {

  const passwordRegex = {
    length: false,
    uppercase: false,
    lowercase: false,
    digits: false,
    specialChar: false,
    noSpace: false,
    result: false
  };

  Object.keys(passwordRegex).forEach(key => {
    if (key !== "result") {
      const test = PASSWORD_REGEX[key].test(password);
      passwordRegex[key] = key === "noSpace" ? !test : test;
    }
  });
  passwordRegex.result = Object.entries(passwordRegex).filter(([k,v]) => k !== "result"
  ).reduce((acc, [k,v]) => acc && v, true);

  return passwordRegex;
};

