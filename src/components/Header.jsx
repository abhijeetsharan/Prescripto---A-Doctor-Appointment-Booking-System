import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center py-10 md:py-20 gap-10">
        {/* Header Left */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
            Book Appointment <br />
            With Trusted Doctors
          </h1>
          <p className="text-sm md:text-base font-light mb-6">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            and schedule your appointment hassle-free.
          </p>
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            {/* <img className="w-20" src={assets.group_profiles} alt="Group Profiles" /> */}
            <p className="text-sm md:text-base">
              Join thousands of satisfied users who trust us with their healthcare needs.
            </p>
          </div>
          <a
            href="#speciality"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Book Appointment
            <img className="w-4 ml-2" src={assets.arrow_icon} alt="Arrow Icon" />
          </a>
        </div>

        {/* Header Right */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
            src={assets.header_img}
            alt="Doctor Illustration"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
