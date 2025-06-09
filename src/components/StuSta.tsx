import React from "react";
import { Student } from "../data/studentsData";

interface StuStaProps {
  student: Student;
}

const StuSta: React.FC<StuStaProps> = ({ student }) => {
  const { classTeacher, subjectTeachers } = student;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-indigo-900 max-w-3xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">👩‍🏫 Staff Details for {student.name}</h2>

      {classTeacher ? (
        <div className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Class Teacher</h3>
          <p><strong>Name:</strong> {classTeacher.name}</p>
          <p><strong>Mobile:</strong> {classTeacher.mobile}</p>
          <p><strong>Email:</strong> {classTeacher.email}</p>
        </div>
      ) : (
        <p>No class teacher assigned for your class and section.</p>
      )}

      <div>
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">Subject Teachers</h3>
        {subjectTeachers && subjectTeachers.length > 0 ? (
          <ul className="space-y-4">
            {subjectTeachers.map((staff, idx) => (
              <li key={idx} className="border rounded p-3">
                <p><strong>Subject:</strong> {staff.subject}</p>
                <p><strong>Name:</strong> {staff.name}</p>
                <p><strong>Mobile:</strong> {staff.mobile}</p>
                <p><strong>Email:</strong> {staff.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No subject teachers found for your class and section.</p>
        )}
      </div>
    </div>
  );
};

export default StuSta;
