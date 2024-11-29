import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "Abhijeet",
    email: "abhijeetsharan@gmail.com",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAppointments([
        {
          id: 1,
          doctor: "Dr. Abhijeet Sharan",
          speciality: "General Physician",
          date: "2024-11-28",
          time: "10:00 AM",
          status: "Upcoming",
        },
        {
          id: 2,
          doctor: "Dr. Krati Gupta",
          speciality: "Gynecologist",
          date: "2024-11-20",
          time: "03:00 PM",
          status: "Completed",
          prescription: "Prescribed Antibiotics.",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Function to generate PDF
  const generatePDF = (appointment) => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text("Prescription", 20, 20);

    doc.setFontSize(12);
    doc.text(`Doctor: ${appointment.doctor}`, 20, 40);
    doc.text(`Speciality: ${appointment.speciality}`, 20, 50);
    doc.text(`Date: ${appointment.date}`, 20, 60);
    doc.text(`Time: ${appointment.time}`, 20, 70);
    doc.text(`Prescription:`, 20, 90);
    doc.text(appointment.prescription || "No prescription available.", 20, 100);

    // Save the PDF
    doc.save(`Prescription-${appointment.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {userDetails.name}
        </h1>
        <p className="text-gray-600">Email: {userDetails.email}</p>
      </div>

      {/* Prescription History Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Prescriptions
        </h2>

        {appointments.filter((appt) => appt.prescription).length === 0 ? (
          <p className="text-center text-gray-600">
            No prescriptions found yet.
          </p>
        ) : (
          appointments
            .filter((appt) => appt.prescription)
            .map((appointment) => (
              <div
                key={appointment.id}
                className="flex justify-between items-center border-b py-4 last:border-none"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {appointment.doctor} - {appointment.speciality}
                  </p>
                  <p className="text-sm text-gray-600">
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="text-sm text-green-600">
                    Prescription: {appointment.prescription}
                  </p>
                </div>
                <button
                  onClick={() => generatePDF(appointment)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-500"
                >
                  Download PDF
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
