

import React, { useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { motion, AnimatePresence } from 'framer-motion';
import Login from '../components/login';
import StaffLoginPage from '../components/StaffLoginPage';
import StudentLoginPage from '../components/StudentLoginPage';

const ParticlePage: React.FC = () => {
  const [activeLogin, setActiveLogin] = useState<'none' | 'staff' | 'student'>('none');

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: { value: '#e6f7f1' }, // Light background to blend with card
          },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: '#FF69B4' },
            shape: { type: 'star' },
            opacity: { value: 0.7, random: true },
            size: { value: { min: 2, max: 6 }, random: true },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'bottom',
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble' },
            },
            modes: {
              bubble: {
                distance: 100,
                size: 8,
                duration: 2,
                opacity: 1,
              },
            },
          },
        }}
      />

      {/* Animated Pages */}
      <AnimatePresence mode="wait">
        {activeLogin === 'none' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <Login
              onStaffLogin={() => setActiveLogin('staff')}
              onStudentLogin={() => setActiveLogin('student')}
            />
          </motion.div>
        )}

        {activeLogin === 'staff' && (
          <motion.div
            key="staff-login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <StaffLoginPage onClose={() => setActiveLogin('none')} />
          </motion.div>
        )}

        {activeLogin === 'student' && (
          <motion.div
            key="student-login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <StudentLoginPage onClose={() => setActiveLogin('none')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParticlePage;

