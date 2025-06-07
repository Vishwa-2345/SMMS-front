// src/components/ExamSection.tsx
import React, { useState } from "react";

interface ExamSchedule {
  date: string;
  day: string;
  session: "Morning" | "Afternoon";
  subject?: string;
  className?: string;
  section?: string;
}

interface StaffExamAssignment {
  staffId: string;
  examName: string;
  schedule: ExamSchedule[];
}

const exams = ["June Monthly", "Mid Term", "Quarterly", "Half Yearly", "Final"];

const examAssignments: StaffExamAssignment[] = [
  {
    staffId: "S1001",
    examName: "June Monthly",
    schedule: [
      {
        date: "2025-06-12",
        day: "Wednesday",
        session: "Morning",
        subject: "Mathematics",
        className: "10th",
        section: "A",
      },
      {
        date: "2025-06-13",
        day: "Thursday",
        session: "Afternoon",
        subject: "Science",
        className: "9th",
        section: "B",
      },
    ],
  },
  // Add more assignments as needed
];

const ExamSection: React.FC<{ staffId: string }> = ({ staffId }) => {
  const [selectedExam, setSelectedExam] = useState("");
  const [schedule, setSchedule] = useState<ExamSchedule[] | null>(null);

  const handleSearch = () => {
    const assignment = examAssignments.find(
      (a) => a.examName === selectedExam && a.staffId === staffId
    );

    if (assignment) {
      setSchedule(assignment.schedule);
    } else {
      setSchedule([
        {
          date: "2025-06-12",
          day: "Wednesday",
          session: "Morning",
        },
        {
          date: "2025-06-13",
          day: "Thursday",
          session: "Afternoon",
        },
      ]);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">My Exam Schedule</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="w-full sm:w-2/3 border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        >
          <option value="">Select Exam</option>
          {exams.map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition w-full sm:w-auto"
        >
          🔍 Search
        </button>
      </div>

      {schedule && (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Day</th>
              <th className="border px-4 py-2">Session</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Section</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.day}</td>
                <td className="border px-4 py-2">{item.session}</td>
                <td className="border px-4 py-2">{item.subject || "-"}</td>
                <td className="border px-4 py-2">{item.className || "-"}</td>
                <td className="border px-4 py-2">{item.section || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExamSection;
