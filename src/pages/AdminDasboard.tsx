

import React, { useState } from "react";
import {
  FaInfoCircle,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaEdit,
  FaChartBar,
  FaBars,
} from "react-icons/fa";
import AboutUs from "../components/AboutUs";
import TrueFocus from "../components/TrueFocus";

const AdminDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutUs />;
      case "students":
      case "staff":
      case "classes":
      case "update":
      case "exam":
        return (
          <div className="p-6 text-xl font-semibold text-gray-600">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section (Coming Soon)
          </div>
        );
      default:
        return null;
    }
  };

  const navItems = [
    { key: "about", label: "About Us", icon: <FaInfoCircle />, color: "#4B0082" },
    { key: "students", label: "Student Details", icon: <FaUserGraduate />, color: "#00BFFF" },
    { key: "staff", label: "Staff Details", icon: <FaChalkboardTeacher />, color: "#32CD32" },
    { key: "classes", label: "Class Details", icon: <FaSchool />, color: "#FFA500" },
    { key: "update", label: "Update Details", icon: <FaEdit />, color: "#FF69B4" },
    { key: "exam", label: "Exam Marks", icon: <FaChartBar />, color: "#20B2AA" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#f0f4f8] to-[#e6f2ff]">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
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
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`flex items-center gap-4 py-3 px-4 rounded-md transition duration-200 ${
                activeSection === item.key ? "bg-[#f0f0f0]" : "hover:bg-gray-100"
              }`}
              style={{
                color: activeSection === item.key ? item.color : "#555",
              }}
            >
              <span
                style={{ color: item.color }}
                className="text-lg"
              >
                {item.icon}
              </span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 transition-all duration-300 overflow-y-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;


