const useChangeHandler = setFunction => {
  return (event, field, value) => {
    const { name, type, checked } = event.target;
    console.log("value: ", value);
    setFunction(prevForm => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ?
                  checked :
                  { ...prevForm[name], [field]: value }
      };
    });
  };
}

export default useChangeHandler;
