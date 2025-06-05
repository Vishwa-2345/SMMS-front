

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlePage from './pages/ParticlePage';
import AdminDashboard from './pages/AdminDasboard';
import StaffDashboard from './pages/StaffDasboard';
import StudentDashboard from './pages/StudentDasboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParticlePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


