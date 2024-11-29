import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-12 bg-primary text-white">
        <h1 className="text-3xl font-bold">About <span className="text-gray-200">Us</span></h1>
        <p className="mt-2 text-lg">
          Learn more about who we are and what drives us at <b>CareCanvas</b>.
        </p>
      </header>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <img
          className="w-full rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Welcome to <b>CareCanvas</b>, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            We understand the challenges individuals face when scheduling doctor appointments and managing their health records.
          </p>
          <p>
            At <b>CareCanvas</b>, we are committed to excellence in healthcare technology. We continuously strive to enhance our platform, 
            integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment 
            or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
            <p>
              Our vision at <b>CareCanvas</b> is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients 
              and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 lg:px-20">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-primary hover:text-white">
            <h3 className="text-xl font-bold mb-4">Efficiency</h3>
            <p className="text-center text-gray-600 md:text-gray-400">
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-primary hover:text-white">
            <h3 className="text-xl font-bold mb-4">Convenience</h3>
            <p className="text-center text-gray-600 md:text-gray-400">
              Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-primary hover:text-white">
            <h3 className="text-xl font-bold mb-4">Personalization</h3>
            <p className="text-center text-gray-600 md:text-gray-400">
              Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
