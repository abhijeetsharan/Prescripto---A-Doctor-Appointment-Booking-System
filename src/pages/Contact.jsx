import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus('Thank you! Your message has been successfully sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="text-gray-200 mt-2">We’d love to hear from you! Drop us a message.</p>
      </header>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Contact Details */}
        <div className="flex flex-col justify-center">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="w-full rounded-lg shadow-lg mb-6 lg:max-w-[500px]"
          />
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Our Office</h2>
              <p className="text-gray-600 mt-1">
                R&D Building, BIT Mesra, Ranchi, Jharkhand, India
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Contact Info</h2>
              <p className="text-gray-600 mt-1">
                Tel: +91 000-000-0000 <br />
                Email: care@carecanvas.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="text-center text-green-600 font-medium mt-4">
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
