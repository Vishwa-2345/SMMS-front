

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaClock,
  FaChartBar,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import TrueFocus from "../components/TrueFocus";
import { Student } from "../data/studentsData";
import StuTime from "../components/StuTime"; // <-- Added Timetable Component
import StuMark from "../components/StuMark";  // <-- Import your new marks/exam component
import StuSta from "../components/StuSta";



const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student: Student = location.state?.student;

  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/");
  };
  const cancelLogout = () => setShowLogoutModal(false);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg text-indigo-900 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">📋 Student Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <p><strong>👤 Name:</strong> {student.name}</p>
              <p><strong>🎓 Class:</strong> {student.className}</p>
              <p><strong>🏷️ Section:</strong> {student.section}</p>
              <p><strong>👨 Father:</strong> {student.fatherName}</p>
              <p><strong>👩 Mother:</strong> {student.motherName}</p>
              <p><strong>📧 Email:</strong> {student.email}</p>
              <p><strong>📱 Mobile:</strong> {student.mobile}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">📅 Attendance Records:</h3>
              <div className="overflow-auto max-h-60 border rounded-md">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-indigo-100 text-indigo-800 font-semibold sticky top-0">
                    <tr>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.attendance.map((record, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{record.date}</td>
                        <td className={`py-2 px-4 ${record.status === "Present" ? "text-green-600" : "text-red-600"}`}>
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "timetable":
        return <StuTime student={student} />; // ✅ Timetable component

       case "exam":
        // Replace the simple marks list with the full StuMark component
        return <StuMark student={student} />;

    case "staff":
  return <StuSta student={student} />;


      default:
        return null;
    }
  };

  const navItems = [
    { key: "profile", label: "My Profile", icon: <FaUserCircle />, color: "#4B0082" },
    { key: "timetable", label: "Timetable", icon: <FaClock />, color: "#9370DB" },
    { key: "exam", label: "Exam", icon: <FaChartBar />, color: "#20B2AA" },
    { key: "staff", label: "Staff Details", icon: <FaChalkboardTeacher />, color: "#32CD32" },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt />, color: "#FF4500" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#f0f4f8] to-[#e6f2ff] relative">
      {/* Sidebar */}
      <div className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-md transition-all duration-300 flex flex-col z-10`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 focus:outline-none text-gray-700 hover:text-indigo-700 transition"
        >
          <FaBars size={24} />
        </button>

        {isOpen && (
          <div className="px-4 pb-2">
            <TrueFocus
              sentence="Student Dashboard"
              manualMode={false}
              blurAmount={4}
              borderColor="#4B0082"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        )}

        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => {
            const isLogout = item.key === "logout";
            return (
              <button
                key={item.key}
                onClick={isLogout ? handleLogout : () => setActiveSection(item.key)}
                className={`flex items-center gap-4 py-3 px-4 rounded-md transition duration-200 ${
                  activeSection === item.key && !isLogout ? "bg-[#f0f0f0]" : "hover:bg-gray-100"
                }`}
                style={{
                  color: activeSection === item.key && !isLogout ? item.color : "#555",
                }}
              >
                <span style={{ color: item.color }} className="text-lg">
                  {item.icon}
                </span>
                {isOpen && (
                  <span className="font-medium" style={{ color: item.color }}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 flex items-center justify-center text-center text-xl text-indigo-700 font-semibold">
        {renderSection()}
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
