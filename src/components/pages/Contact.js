import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';
export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
   
      return;
    }
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='md:container md:mx-auto space-y-4'>
      <div className='text-2xl'>Get in Touch!</div>
      <br></br>
      <form>
        <div className='grid grid-rows-4 grid-flow-col gap-2'>
        <label htmlFor="InputName" className="text-lg">Name</label>
        <input
          value={userName}
          name="Name"
          onChange={handleInputChange}
          type="text"
          className="outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="name"
        />
        </div>
        <div className='grid grid-rows-4 grid-flow-col gap-2'>
        <label htmlFor="InputEmail" className="text-lg">Email address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="name@example.com"
        />
        </div>
        <div className='grid grid-rows-4 grid-flow-col'>
        <label htmlFor="InputMessage" className="text-lg">What would you like to talk about?</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className="outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="message"
        />
        </div>
        <button className="rounded-full w-32 h-full bg-cyan-400" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}