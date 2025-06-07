

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUserCircle,
//   FaClock,
//   FaSignOutAlt,
//   FaBars,
//   FaClipboardList,
//   FaBook,
//   FaPen,
// } from "react-icons/fa";

// import TrueFocus from "../components/TrueFocus";
// import StaffTimeTable from "../components/StaffTimeTable";
// import ProfileSection from "../components/ProfileSection";
// import AttendanceSection from "../components/AttendenceSection"; // Correct import
// import MarksSection from "../components/MarksSection";


// interface Staff {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   designation: string;
//   position: string;
//   address: string;
//   dob: string;
//   gender: string;
// }

// const loggedInStaff: Staff = {
//   id: "S1001",
//   name: "John Doe",
//   email: "john.doe@example.com",
//   phone: "+91 9876543210",
//   department: "Mathematics",
//   designation: "Senior Teacher",
//   position: "Senior Teacher",
//   address: "123, Elm Street, Bangalore",
//   dob: "1985-07-10",
//   gender: "Male",
// };

// const StaffDashboard: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeSection, setActiveSection] = useState("profile");
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => setShowLogoutModal(true);
//   const confirmLogout = () => {
//     setShowLogoutModal(false);
//     navigate("/");
//   };
//   const cancelLogout = () => setShowLogoutModal(false);

//   const renderSection = () => {
//     switch (activeSection) {
//       case "profile":
//         return <ProfileSection staff={loggedInStaff} />;
//       case "timetable":
//         return <StaffTimeTable />;
//       case "attendance":
//         return <AttendanceSection />; // Updated here
//       case "marks":
//   return <MarksSection />;

//       case "exams":
//         return (
//           <div className="text-gray-600 text-lg font-semibold">
//             Exams Section Coming Soon
//           </div>
//         );
//       default:
//         return (
//           <div className="text-gray-600 text-lg font-semibold">
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section Coming Soon
//           </div>
//         );
//     }
//   };

//   const navItems = [
//     { key: "profile", label: "My Profile", icon: <FaUserCircle />, color: "#4B0082" },
//     { key: "timetable", label: "Timetable", icon: <FaClock />, color: "#00BFFF" },
//     { key: "attendance", label: "Attendance", icon: <FaClipboardList />, color: "#008000" },
//     { key: "marks", label: "Marks", icon: <FaPen />, color: "#8B0000" },
//     { key: "exams", label: "Exams", icon: <FaBook />, color: "#FF8C00" },
//     { key: "logout", label: "Logout", icon: <FaSignOutAlt />, color: "#FF4500" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gradient-to-tr from-[#f0f4f8] to-[#e6f2ff] relative">
//       {/* Sidebar */}
//       <div className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 flex flex-col z-10`}>
//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-4 focus:outline-none text-gray-700 hover:text-[#4B0082] transition"
//         >
//           <FaBars size={24} />
//         </button>

//         {/* Sidebar Header */}
//         <div className="px-4 pb-4">
//           {isOpen && (
//             <TrueFocus
//               sentence="Staff Dashboard"
//               manualMode={false}
//               blurAmount={4}
//               borderColor="#4B0082"
//               animationDuration={2}
//               pauseBetweenAnimations={1}
//             />
//           )}
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col gap-1 px-2">
//           {navItems.map((item) => {
//             const isLogout = item.key === "logout";
//             return (
//               <button
//                 key={item.key}
//                 onClick={isLogout ? handleLogout : () => setActiveSection(item.key)}
//                 className={`flex items-center gap-4 py-3 px-4 rounded-md transition duration-200 ${
//                   activeSection === item.key && !isLogout ? "bg-[#f0f0f0]" : "hover:bg-gray-100"
//                 }`}
//                 style={{
//                   color: activeSection === item.key && !isLogout ? item.color : "#555",
//                 }}
//               >
//                 <span style={{ color: item.color }} className="text-lg">{item.icon}</span>
//                 {isOpen && (
//                   <span className="font-medium" style={{ color: item.color }}>
//                     {item.label}
//                   </span>
//                 )}
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 transition-all duration-300 overflow-y-auto">
//         {renderSection()}
//       </div>

//       {/* Logout Modal */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Confirm Logout</h2>
//             <p className="mb-6 text-gray-700">Are you sure you want to logout?</p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={confirmLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={cancelLogout}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StaffDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaClock,
  FaSignOutAlt,
  FaBars,
  FaClipboardList,
  FaBook,
  FaPen,
} from "react-icons/fa";

import TrueFocus from "../components/TrueFocus";
import StaffTimeTable from "../components/StaffTimeTable";
import ProfileSection from "../components/ProfileSection";
import AttendenceSection from "../components/AttendenceSection";
import MarksSection from "../components/MarksSection";
import ExamsSection from "../components/ExamsSection"; // <-- Imported here

interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  position: string;
  address: string;
  dob: string;
  gender: string;
}

const loggedInStaff: Staff = {
  id: "S1001",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  department: "Mathematics",
  designation: "Senior Teacher",
  position: "Senior Teacher",
  address: "123, Elm Street, Bangalore",
  dob: "1985-07-10",
  gender: "Male",
};

const StaffDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/");
  };
  const cancelLogout = () => setShowLogoutModal(false);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection staff={loggedInStaff} />;
      case "timetable":
        return <StaffTimeTable />;
      case "attendance":
        return <AttendenceSection />;
      case "marks":
        return <MarksSection />;
      case "exams":
        return <ExamsSection staffId={loggedInStaff.id} />;
      default:
        return (
          <div className="text-gray-600 text-lg font-semibold">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section Coming Soon
          </div>
        );
    }
  };

  const navItems = [
    { key: "profile", label: "My Profile", icon: <FaUserCircle />, color: "#4B0082" },
    { key: "timetable", label: "Timetable", icon: <FaClock />, color: "#00BFFF" },
    { key: "attendance", label: "Attendance", icon: <FaClipboardList />, color: "#008000" },
    { key: "marks", label: "Marks", icon: <FaPen />, color: "#8B0000" },
    { key: "exams", label: "Exams", icon: <FaBook />, color: "#FF8C00" },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt />, color: "#FF4500" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#f0f4f8] to-[#e6f2ff] relative">
      {/* Sidebar */}
      <div className={`${isOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 flex flex-col z-10`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 focus:outline-none text-gray-700 hover:text-[#4B0082] transition"
        >
          <FaBars size={24} />
        </button>

        <div className="px-4 pb-4">
          {isOpen && (
            <TrueFocus
              sentence="Staff Dashboard"
              manualMode={false}
              blurAmount={4}
              borderColor="#4B0082"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          )}
        </div>

        {/* Navigation */}
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
                <span style={{ color: item.color }} className="text-lg">{item.icon}</span>
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
      <div className="flex-1 p-6 transition-all duration-300 overflow-y-auto">
        {renderSection()}
      </div>

      {/* Logout Modal */}
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

export default StaffDashboard;
