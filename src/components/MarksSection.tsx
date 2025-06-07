import React, { useState, useEffect } from "react";
import { FaSearch, FaPen, FaTimes } from "react-icons/fa";

// Import your data here (adjust paths accordingly)
import classData from "../data/classData"; // className, section, students [{id,name}]
import studentsDataRaw, { Student as DetailedStudent, Mark } from "../data/studentsData";

// Subjects list for marks entry (can be adjusted)
const subjects = ["Math", "Science", "English", "Social Studies", "Hindi"];

// Deep clone helper
const deepClone = <T,>(obj: T): T => JSON.parse(JSON.stringify(obj));

const MarksSection: React.FC = () => {
  // Dropdown states
  const [selectedClass, setSelectedClass] = useState(classData[0].className);
  const [selectedSection, setSelectedSection] = useState(classData[0].section);
  const [selectedExam, setSelectedExam] = useState("June Monthly");

  // Students list filtered by class & section (from classData)
  const [filteredStudents, setFilteredStudents] = useState<
    { id: string; name: string }[]
  >([]);

  // Detailed students with marks etc (from studentsDataRaw), local copy to update marks
  const [studentsData, setStudentsData] = useState<DetailedStudent[]>([]);

  // Currently editing student id
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);

  // Marks input for the editing student: subject -> mark
  const [marksInput, setMarksInput] = useState<Record<string, number>>({});

  // Message to show after update
  const [message, setMessage] = useState("");

  // On component mount, deep clone the detailed studentsDataRaw to local state
  useEffect(() => {
    setStudentsData(deepClone(studentsDataRaw));
  }, []);

  // On class or section change, update filteredStudents from classData
  useEffect(() => {
    const foundClassSection = classData.find(
      (c) => c.className === selectedClass && c.section === selectedSection
    );
    setFilteredStudents(foundClassSection?.students || []);
    setEditingStudentId(null);
    setMessage("");
  }, [selectedClass, selectedSection]);

  // When opening edit for a student, load their marks into marksInput for editing
  useEffect(() => {
    if (!editingStudentId) {
      setMarksInput({});
      return;
    }

    // Find student's detailed data from studentsData
    const studentDetail = studentsData.find((s) => s.id === editingStudentId);

    if (studentDetail) {
      // Convert marks array to object: subject -> mark
      const marksObj: Record<string, number> = {};
      studentDetail.marks.forEach(({ subject, mark }) => {
        marksObj[subject] = mark;
      });
      setMarksInput(marksObj);
    } else {
      // No marks found, reset input
      setMarksInput({});
    }
  }, [editingStudentId, studentsData]);

  // Handle mark change in inputs
  const handleMarkChange = (subject: string, value: number) => {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setMarksInput((prev) => ({
      ...prev,
      [subject]: value,
    }));
  };

  // Save marks for the current editing student
  const saveMarks = () => {
    if (!editingStudentId) return;

    setStudentsData((prev) =>
      prev.map((s) => {
        if (s.id === editingStudentId) {
          // Convert marksInput object back to array of Marks
          const updatedMarks: Mark[] = subjects.map((subj) => ({
            subject: subj,
            mark: marksInput[subj] ?? 0,
          }));
          return { ...s, marks: updatedMarks };
        }
        return s;
      })
    );
    setEditingStudentId(null);
  };

  // Calculate total marks for a student from marks array
  const calculateTotal = (marks: Mark[]) => {
    return marks.reduce((acc, m) => acc + (m.mark || 0), 0);
  };

  // Update all button handler (simulate backend update)
  const handleUpdateAll = () => {
    // You can add your backend API call here to persist marksData
    setMessage("Marks updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Marks Entry</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-48"
        >
          {[...new Set(classData.map((c) => c.className))].map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-48"
        >
          {/* Show sections only for the selected class */}
          {classData
            .filter((c) => c.className === selectedClass)
            .map((cs) => (
              <option key={cs.section} value={cs.section}>
                {cs.section}
              </option>
            ))}
        </select>

        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-48"
        >
          {[
            "June Monthly",
            "Mid Term",
            "Quarterly",
            "Half Yearly",
            "Final",
          ].map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            // Just resetting editing and message on search click
            setEditingStudentId(null);
            setMessage("");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
          title="Search"
        >
          <FaSearch />
          Search
        </button>
      </div>

      {/* Student list */}
      {filteredStudents.length === 0 ? (
        <p className="text-gray-600">No students found in this class and section.</p>
      ) : (
        <div className="space-y-4">
          {filteredStudents.map(({ id, name }) => {
            // Find detailed student for marks and total
            const detailedStudent = studentsData.find((s) => s.id === id);

            return (
              <div
                key={id}
                className="border rounded p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-lg">{name}</p>
                  <p className="text-gray-600 text-sm">ID: {id}</p>
                  <p className="text-gray-600 text-sm">
                    Total Marks:{" "}
                    {detailedStudent ? calculateTotal(detailedStudent.marks) : 0}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEditingStudentId(id === editingStudentId ? null : id)
                  }
                  className="mt-3 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                >
                  <FaPen />
                  Enter Marks
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Marks Entry Modal/Card */}
      {editingStudentId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          onClick={() => setEditingStudentId(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setEditingStudentId(null)}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Enter Marks for{" "}
              {filteredStudents.find((s) => s.id === editingStudentId)?.name}
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {subjects.map((subject) => (
                <div key={subject} className="flex items-center gap-4">
                  <label className="w-36 font-medium text-gray-700">{subject}</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={marksInput[subject] ?? ""}
                    onChange={(e) =>
                      handleMarkChange(subject, Number(e.target.value))
                    }
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter marks"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setEditingStudentId(null)}
                className="px-4 py-2 rounded border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveMarks}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update All Button */}
      {filteredStudents.length > 0 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            onClick={handleUpdateAll}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded transition"
          >
            Update All Marks
          </button>
          {message && (
            <p className="text-green-600 font-semibold animate-pulse">{message}</p>
          )}
        </div>
      )}

      {/* Simple fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default MarksSection;
