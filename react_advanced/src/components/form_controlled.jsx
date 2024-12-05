import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    console.log(inputValue);
    // Do something with the value
  };

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the state with the new value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border-2 border-pink-500" type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};
export { Form };