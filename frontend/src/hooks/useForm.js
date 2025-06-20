import { useState } from "react";

const useForm = (initialValues= {}, onSubmit) => {

    const [error, SetError] = useState(null);
    const [inputs, setInputs] = useState(initialValues);

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({...values,[name]:value})) ;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await onSubmit(inputs)
          SetError(null);
        } catch(err){
          SetError(err.message);
        }
       
    }

    return {
        inputs,
        error,
        handleChange,
        handleSubmit,
        setInputs,
    }
}

export default useForm;