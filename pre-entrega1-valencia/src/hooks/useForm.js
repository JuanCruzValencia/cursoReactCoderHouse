import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event, form) => {
    event.preventDefault();
    console.log(JSON.stringify(form));
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};
