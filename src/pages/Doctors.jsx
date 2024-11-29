import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800">Doctors</h1>
      <p className="text-gray-600 mt-2">
        Browse through our extensive list of specialists and find the right doctor for you.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6 mt-8">
        {/* Filters Section */}
        <div className="w-full sm:w-48">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`sm:hidden py-2 px-4 border rounded text-sm font-medium ${
              showFilter ? 'bg-primary text-white' : 'bg-white text-gray-700'
            }`}
          >
            Filters
          </button>
          <div
            className={`mt-4 sm:mt-0 flex flex-col gap-4 transition-all duration-300 ${
              showFilter ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {[
              'General physician',
              'Gynecologist',
              'Dermatologist',
              'Pediatricians',
              'Neurologist',
              'Gastroenterologist',
            ].map((filter) => (
              <div
                key={filter}
                onClick={() =>
                  speciality === filter
                    ? navigate('/doctors')
                    : navigate(`/doctors/${filter}`)
                }
                className={`flex items-center justify-between px-4 py-3 border rounded-lg text-sm cursor-pointer transition-all ${
                  speciality === filter
                    ? 'bg-primary text-white shadow'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{filter}</span>
                {speciality === filter && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Cards Section */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  window.scrollTo(0, 0);
                }}
                className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img className="bg-indigo-50" src={item.image} alt={item.name} />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
                  <p className="text-zinc-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No doctors available for the selected speciality.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
