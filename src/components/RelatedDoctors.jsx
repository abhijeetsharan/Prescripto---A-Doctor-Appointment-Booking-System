import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <section className="my-16 px-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Related Doctors</h1>
        <p className="text-sm text-gray-600 mt-2">
          Browse through our trusted doctors and book your appointment effortlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relDoc.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="group cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 bg-white"
          >
            <img
              className="w-full h-48 object-cover bg-blue-100"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-primary">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedDoctors;
