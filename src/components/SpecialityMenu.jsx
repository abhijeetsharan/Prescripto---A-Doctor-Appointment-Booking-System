import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <section id="speciality" className="py-16 px-6 sm:px-10 text-gray-800 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Find by Speciality</h1>
        <p className="sm:w-2/3 lg:w-1/2 mx-auto text-sm text-gray-600 mt-2">
          Browse our extensive list of trusted doctors and schedule your appointment with ease.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
          >
            <img
              className="w-16 sm:w-20 mb-4 object-contain"
              src={item.image}
              alt={item.speciality}
            />
            <p className="text-sm font-medium text-gray-700 hover:text-primary">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
