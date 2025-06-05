
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ParticlePage from './pages/ParticlePage';
// import LoginPage from './components/Login';
// import StaffLoginPage from './components/StaffLoginPage';
// import StudentLoginPage from './components/StudentLoginPage';
// import AdminDashboard from './pages/AdminDasboard';
// import StaffDashboard from './pages/StaffDasboard';
// import StudentDashboard from './pages/StudentDasboard';
// import StudentDetailsSection from './components/StudentDetailsSection';
// import StaffDetailsSection from './components/StaffDetailsSection';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ParticlePage />} />

//         <Route
//           path="/login"
//           element={
//             <LoginPage
//               onStaffLogin={() => console.log("Staff login triggered")}
//               onStudentLogin={() => console.log("Student login triggered")}
//             />
//           }
//         />

//         <Route
//           path="/stafflogin"
//           element={<StaffLoginPage onClose={() => console.log("Staff login closed")} />}
//         />

//         <Route
//           path="/studentlogin"
//           element={<StudentLoginPage onClose={() => console.log("Student login closed")} />}
//         />

//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/staff-dashboard" element={<StaffDashboard />} />
//         <Route path="/student-dashboard" element={<StudentDashboard />} />

//         {/* Direct access routes for testing these sections */}
//         <Route path="/student-details" element={<StudentDetailsSection />} />
//         <Route path="/staff-details" element={<StaffDetailsSection />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ParticlePage from "./pages/ParticlePage";
import LoginPage from "./components/Login";
import StaffLoginPage from "./components/StaffLoginPage";
import StudentLoginPage from "./components/StudentLoginPage";
import AdminDashboard from "./pages/AdminDasboard";
import StaffDashboard from "./pages/StaffDasboard";
import StudentDashboard from "./pages/StudentDasboard";
import StudentDetailsSection from "./components/StudentDetailsSection";
import StaffDetailsSection from "./components/StaffDetailsSection";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing / Particle page */}
        <Route path="/" element={<ParticlePage />} />

        {/* Login pages */}
        <Route
          path="/login"
          element={
            <LoginPage
              onStaffLogin={() => console.log("Staff login triggered")}
              onStudentLogin={() => console.log("Student login triggered")}
            />
          }
        />
        <Route
          path="/stafflogin"
          element={<StaffLoginPage onClose={() => console.log("Staff login closed")} />}
        />
        <Route
          path="/studentlogin"
          element={<StudentLoginPage onClose={() => console.log("Student login closed")} />}
        />

        {/* Dashboards */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Direct routes for testing sections independently */}
        <Route path="/student-details" element={<StudentDetailsSection />} />
        <Route path="/staff-details" element={<StaffDetailsSection />} />
      </Routes>
    </Router>
  );
};

export default App;
