


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import StudentDetailsSection from "../components/StudentDetailsSection";
import StaffDetailsSection from "../components/StaffDetailsSection";
import ClassDetailsSection from "../components/classDetailsSection";
import TimetableSection from "../components/TimeTableSection";
import ExamSection from "../components/ExamSection";
import TrueFocus from "../components/TrueFocus";
import {
  FaInfoCircle,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaClock,
  FaChartBar,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutUs />;
      case "students":
        return <StudentDetailsSection />;
      case "staff":
        return <StaffDetailsSection />;
      case "classes":
        return <ClassDetailsSection />;
      case "timetable":
        return <TimetableSection />;
      case "exam":
        return <ExamSection />;
      default:
        return null;
    }
  };

  const navItems = [
    { key: "about", label: "About Us", icon: <FaInfoCircle />, color: "#4B0082" },
    { key: "students", label: "Student Details", icon: <FaUserGraduate />, color: "#00BFFF" },
    { key: "staff", label: "Staff Details", icon: <FaChalkboardTeacher />, color: "#32CD32" },
    { key: "classes", label: "Class Details", icon: <FaSchool />, color: "#FFA500" },
    { key: "timetable", label: "Timetable", icon: <FaClock />, color: "#9370DB" },
    { key: "exam", label: "Exam", icon: <FaChartBar />, color: "#20B2AA" },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt />, color: "#FF4500" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#f0f4f8] to-[#e6f2ff] relative">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 flex flex-col z-10`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 focus:outline-none text-gray-700 hover:text-[#4B0082] transition"
        >
          <FaBars size={24} />
        </button>

        {/* Sidebar Header */}
        <div className="px-4 pb-4">
          {isOpen && (
            <TrueFocus
              sentence="Admin Dashboard"
              manualMode={false}
              blurAmount={4}
              borderColor="#4B0082"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          )}
        </div>

        {/* Navigation Items */}
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

      {/* Main Content */}
      <div className="flex-1 p-6 transition-all duration-300 overflow-y-auto">{renderSection()}</div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Confirm Logout</h2>
            <p className="mb-6 text-gray-700">Are you sure you want to logout?</p>
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

export default AdminDashboard;
