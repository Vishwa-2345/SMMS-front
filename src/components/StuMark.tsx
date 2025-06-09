import React, { useState } from "react";
import { Student } from "../data/studentsData"; // Import type only if used

interface StuMarkProps {
  student: Student;
}

const examNames = [
  "Mid Term Exam",
  "Final Exam",
  "Quarterly Exam",
  "Half Yearly Exam",
  "Practice Test",
];

const StuMark: React.FC<StuMarkProps> = ({ student }) => {
  const [selectedExam, setSelectedExam] = useState("");
  
  // Assuming marks do not have examName field — 
  // So no filtering by exam for now, or you can extend marks data structure accordingly

  const handleGetMarks = () => {
    if (!selectedExam) {
      alert("Please select an exam");
      return;
    }
    // No backend here, just show student's marks for demo
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Exam Marks</h2>
      <select
        className="border rounded px-3 py-2 mb-4 w-full"
        value={selectedExam}
        onChange={(e) => setSelectedExam(e.target.value)}
      >
        <option value="">-- Select Exam --</option>
        {examNames.map((exam) => (
          <option key={exam} value={exam}>
            {exam}
          </option>
        ))}
      </select>
      <button
        onClick={handleGetMarks}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        Get
      </button>
      {selectedExam && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1 text-left">
                Subject
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left">Marks</th>
            </tr>
          </thead>
          <tbody>
            {student.marks.map(({ subject, mark }) => (
              <tr key={subject}>
                <td className="border border-gray-300 px-2 py-1">{subject}</td>
                <td className="border border-gray-300 px-2 py-1">{mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StuMark;
