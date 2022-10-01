import { useState, useEffect } from 'react';
import useApiCall from './hooks/useApiCall';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    domainname: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiCaller = useApiCall();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };


  const handleSubmit = () => {
      setErrors(validate(values));
      setIsSubmitting(true);
  };

  useEffect(
    () => {

      const submitData = async () => {
        const response = await apiCaller({endpoint: 'signup', query: {}},{username : values.username, email : values.email, domain: values.domainname , password : values.password}, 'POST', 'application/json');
        if(!response.errors){
          callback();
        }
      }

      if (Object.keys(errors).length === 0 && isSubmitting) {
        submitData();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
