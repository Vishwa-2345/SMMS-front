
import React, { useState } from "react";
import classDataRaw, { ClassSection, Student } from "../data/classData";
import { FaTimes } from "react-icons/fa";

const classesList = [
  "LKG", "UKG",
  "1st", "2nd", "3rd", "4th", "5th",
  "6th", "7th", "8th", "9th", "10th",
  "11th", "12th",
];
const sectionsList = ["A", "B", "C"];

const ClassDetailsSection: React.FC = () => {
  // State: copy of class data (to allow edits)
  const [classData, setClassData] = useState<ClassSection[]>(classDataRaw);

  const [selectedClass, setSelectedClass] = useState<string>(classesList[0]);
  const [selectedSection, setSelectedSection] = useState<string>(sectionsList[0]);

  const [foundClassSection, setFoundClassSection] = useState<ClassSection | null>(null);

  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentId, setNewStudentId] = useState("");
  const [editTeacherMode, setEditTeacherMode] = useState(false);
  const [editedTeacherName, setEditedTeacherName] = useState("");

  const handleSearch = () => {
    const found = classData.find(
      (cls) => cls.className === selectedClass && cls.section === selectedSection
    );
    setFoundClassSection(found || null);
    if (found) {
      setEditedTeacherName(found.teacherName); // reset teacher name edit field
      setEditTeacherMode(false);
      setShowAddForm(false);
    }
  };

  const handleDeleteAllStudents = () => {
    if (!foundClassSection) return;
    if (
      window.confirm(
        `Are you sure you want to delete ALL students in ${selectedClass} - ${selectedSection}?`
      )
    ) {
      const newClassData = classData.map((cls) => {
        if (cls.className === selectedClass && cls.section === selectedSection) {
          return { ...cls, students: [] };
        }
        return cls;
      });
      setClassData(newClassData);
      setFoundClassSection({ ...foundClassSection, students: [] });
    }
  };

  const handleEditTeacher = () => {
    setEditTeacherMode(true);
  };

  const saveTeacherName = () => {
    if (!editedTeacherName.trim()) {
      alert("Teacher name cannot be empty");
      return;
    }
    const newClassData = classData.map((cls) => {
      if (cls.className === selectedClass && cls.section === selectedSection) {
        return { ...cls, teacherName: editedTeacherName.trim() };
      }
      return cls;
    });
    setClassData(newClassData);
    setFoundClassSection({ ...foundClassSection!, teacherName: editedTeacherName.trim() });
    setEditTeacherMode(false);
  };

  const handleAddStudent = () => {
    setShowAddForm(true);
  };

  const saveNewStudent = () => {
    if (!newStudentName.trim() || !newStudentId.trim()) {
      alert("Please fill both Name and ID");
      return;
    }
    // Add new student to the data
    const newStudent: Student = {
      id: newStudentId.trim(),
      name: newStudentName.trim(),
    };

    const newClassData = classData.map((cls) => {
      if (cls.className === selectedClass && cls.section === selectedSection) {
        return { ...cls, students: [...cls.students, newStudent] };
      }
      return cls;
    });

    setClassData(newClassData);

    // Update displayed section data too
    if (foundClassSection) {
      setFoundClassSection({
        ...foundClassSection,
        students: [...foundClassSection.students, newStudent],
      });
    }

    // Reset form & close
    setNewStudentName("");
    setNewStudentId("");
    setShowAddForm(false);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
    setNewStudentName("");
    setNewStudentId("");
  };

  return (
    <div className="h-full flex flex-col px-6 py-4">
      {/* Top 30% Header aligned left with icon and effects */}
      <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6">
        <div className="flex items-center gap-3">
          {/* Example icon */}
          <svg
            className="w-10 h-10 text-indigo-600 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.75a12.083 12.083 0 01-6.16-10.172L12 14z"
            ></path>
          </svg>

          <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md select-none">
            Class Details
          </h2>
        </div>
      </div>

      {/* Dropdown selectors */}
      <div className="flex gap-4 flex-wrap mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border rounded px-3 py-2"
        >
          {classesList.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="border rounded px-3 py-2"
        >
          {sectionsList.map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Search
        </button>

        <button
          onClick={handleAddStudent}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add
        </button>

        <button
          onClick={handleDeleteAllStudents}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          disabled={!foundClassSection || foundClassSection.students.length === 0}
          title={
            !foundClassSection || foundClassSection.students.length === 0
              ? "No students to delete"
              : "Delete All Students"
          }
        >
          Delete All Students
        </button>
      </div>

      {/* Show searched class-section details */}
      {foundClassSection ? (
        <div className="bg-white rounded shadow p-6 max-w-4xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <strong>Class Teacher: </strong>
              {editTeacherMode ? (
                <>
                  <input
                    type="text"
                    value={editedTeacherName}
                    onChange={(e) => setEditedTeacherName(e.target.value)}
                    className="border px-2 py-1 rounded mr-2"
                  />
                  <button
                    onClick={saveTeacherName}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditTeacherMode(false)}
                    className="ml-2 text-red-600 font-bold"
                    title="Cancel edit"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-indigo-700 font-semibold">{foundClassSection.teacherName}</span>
                  <button
                    onClick={handleEditTeacher}
                    className="ml-4 bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit Teacher
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Students Table */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="border border-gray-300 p-2 text-left">Student ID</th>
                <th className="border border-gray-300 p-2 text-left">Student Name</th>
              </tr>
            </thead>
            <tbody>
              {foundClassSection.students.length === 0 ? (
                <tr>
                  <td colSpan={2} className="text-center p-4 italic text-gray-500">
                    No students found in this class & section.
                  </td>
                </tr>
              ) : (
                foundClassSection.students.map((student) => (
                  <tr key={student.id} className="hover:bg-indigo-50">
                    <td className="border border-gray-300 p-2">{student.id}</td>
                    <td className="border border-gray-300 p-2">{student.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 italic">Search a class and section to view details.</p>
      )}

      {/* Add student form modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative shadow-lg">
            <button
              onClick={closeAddForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close form"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">Add Student</h3>
            <input
              type="text"
              placeholder="Student Name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <input
              type="text"
              placeholder="Student ID"
              value={newStudentId}
              onChange={(e) => setNewStudentId(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <button
              onClick={saveNewStudent}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassDetailsSection;
