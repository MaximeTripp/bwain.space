import { useState } from "react";

const useForm = (initialValues= {}, onSubmit) => {
    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({...values,[name]:value})) ;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputs)
    }

    return {
        inputs,
        handleChange,
        handleSubmit,
        setInputs,
    }
}

export default useForm;