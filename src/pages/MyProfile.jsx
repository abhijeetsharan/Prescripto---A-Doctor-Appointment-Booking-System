import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: 'Abhijeet Sharan',
    image: assets.profile_pic,
    email: 'abhijeetsharan@gmail.com',
    phone: '+91 7004824980',
    address: {
      line1: 'Krishnapuri Road No. 4',
      line2: 'Matwari, Hazaribag, Jharkhand',
    },
    gender: 'Male',
    dob: '2001-05-15',
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full border-4 border-primary shadow-lg"
            src={userData.image}
            alt="Profile"
          />
          {isEdit ? (
            <input
              className="text-2xl font-semibold text-gray-700 mt-4 text-center border border-gray-300 rounded-lg p-2 focus:outline-none"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={userData.name}
            />
          ) : (
            <p className="text-2xl font-semibold text-gray-800 mt-4">
              {userData.name}
            </p>
          )}
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Contact Information */}
        <div className="text-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-primary">
            Contact Information
          </h2>
          <div className="grid grid-cols-2 gap-y-4">
            <p className="font-medium">Email:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={userData.phone}
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input
                  className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <input
                  className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="text-gray-700 mt-6">
          <h2 className="text-lg font-semibold mb-4 text-primary">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-y-4">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 p-2 border border-gray-300 rounded focus:outline-none"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
