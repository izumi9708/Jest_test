import React, { ChangeEvent, FormEventHandler, MouseEvent, useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e:MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
};

export default SimpleForm;
