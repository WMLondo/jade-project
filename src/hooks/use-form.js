import { useCallback, useState } from "react";

export const useForm = (formObj) => {
  const [data, setData] = useState(formObj?.values || {});
  const [error, setError] = useState({ status: false, message: null });

  const handleUpdateForm = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    console.log(data);
  };

  const handleClearForm = () => {
    setData(formObj?.values);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      formObj?.validation();
      setError({ status: false, message: null });
      if (formObj?.onSubmit && error.status) {
        formObj.onSubmit();
      }
    } catch (e) {
      setError({ status: true, nessage: e.message });
      console.log(e.message);
    }
  };

  return { data, error, handleUpdateForm, handleClearForm, handleSubmit };
};
