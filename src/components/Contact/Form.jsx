import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

export default function Form() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    from_name: false,
    from_email: false,
    message: false
  });

  const sendNotification = () => {
    toast.success('Message Sent Successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const form = useRef();

  const validateForm = () => {
    let valid = true;
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = true;
        valid = false;
      }
    }
    setFormErrors(errors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm('service_q2wqptz', 'template_93fu805', form.current, {
        publicKey: 'UT0rVXJoSaVmTyhTJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          sendNotification();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  return (
    <div className="mx-2 sm:mx-20 text-left">
      <form ref={form} onSubmit={sendEmail}>

        <div className="flex flex-col sm:flex-row gap-2">

          <div className="flex flex-col text-left w-full">
            <label htmlFor="name" className="text-white text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name"
              className={`p-2 mb-2 border-2 border-gray-300 rounded-md ${formErrors.from_name ? 'border-red-500' : ''}`}
              required
            />
          </div>

          <div className="flex flex-col text-left w-full">
            <label htmlFor="email" className="text-white text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your email"
              className={`p-2 mb-2 border-2 border-gray-300 rounded-md ${formErrors.from_email ? 'border-red-500' : ''}`}
              required
            />
          </div>

        </div>
        <div className="flex flex-col text-left w-full">
          <label htmlFor="message" className="text-white text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here...."
            className={`p-2 mb-2 border-2 border-gray-300 rounded-md ${formErrors.message ? 'border-red-500' : ''}`}
            required
          />
        </div>
        <button
          type="submit"
          className='rounded border-2 border-primary text-lg px-4 pt-1 pb-1 text-primary
          hover:bg-primary hover:text-white transition duration-300 ease-in-out
          my-3 '
        >
          Send &nbsp;<i className="fa-regular fa-paper-plane"></i>
        </button>

        <ToastContainer />

      </form>
    </div>
  );
}
