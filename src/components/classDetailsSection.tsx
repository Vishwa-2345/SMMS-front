
import React, { useState } from "react";
import { FaPlus, FaTrash, FaPencilAlt, FaChalkboardTeacher, FaSave, FaSchool } from "react-icons/fa";
import classData, { ClassSection, Student } from "../data/classData";

interface StudentDetailsModalProps {
  student: Student | null;
  onClose: () => void;
}

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
  if (!student) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 max-w-md w-full shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-lg"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const ClassDetailsSection: React.FC = () => {
  const [classes, setClasses] = useState<ClassSection[]>(classData);
  const [selectedClassIndex, setSelectedClassIndex] = useState<number | null>(null);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentId, setNewStudentId] = useState("");
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [selectedStudentIds, setSelectedStudentIds] = useState<Set<string>>(new Set());
  const [studentDetailsModalOpen, setStudentDetailsModalOpen] = useState(false);
  const [modalStudent, setModalStudent] = useState<Student | null>(null);

  // Local state to hold teacher selection before saving
  const [tempTeacherName, setTempTeacherName] = useState<string>("");

  const selectedClass = selectedClassIndex !== null ? classes[selectedClassIndex] : null;

  // Update tempTeacherName when selected class changes
  React.useEffect(() => {
    if (selectedClass) {
      setTempTeacherName(selectedClass.teacherName);
      setSelectedStudentIds(new Set()); // reset selected students on class change
    } else {
      setTempTeacherName("");
      setSelectedStudentIds(new Set());
    }
  }, [selectedClassIndex]);

  const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempTeacherName(e.target.value);
  };

  const handleSaveTeacher = () => {
    if (selectedClassIndex === null) return;
    setClasses((prev) =>
      prev.map((cls, idx) =>
        idx === selectedClassIndex ? { ...cls, teacherName: tempTeacherName } : cls
      )
    );
    alert("Class teacher updated!");
  };

  const toggleStudentCheckbox = (studentId: string) => {
    setSelectedStudentIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(studentId)) newSet.delete(studentId);
      else newSet.add(studentId);
      return newSet;
    });
  };

  const handleDeleteSelected = () => {
    if (selectedClassIndex === null) {
      alert("Please select a class first.");
      return;
    }
    if (selectedStudentIds.size === 0) {
      alert("Select at least one student to delete.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete selected students?")) return;

    setClasses((prev) =>
      prev.map((cls, idx) =>
        idx === selectedClassIndex
          ? {
              ...cls,
              students: cls.students.filter((s) => !selectedStudentIds.has(s.id)),
            }
          : cls
      )
    );
    setSelectedStudentIds(new Set());
  };

  const handleAddStudentOpen = () => {
    setNewStudentName("");
    setNewStudentId("");
    setIsAddStudentOpen(true);
  };

  const handleAddStudentSubmit = () => {
    if (selectedClassIndex === null) {
      alert("Please select a class first.");
      return;
    }
    if (!newStudentId.trim() || !newStudentName.trim()) {
      alert("Please enter both student ID and name.");
      return;
    }
    // Check duplicate ID in the class
    if (selectedClass!.students.find((s) => s.id === newStudentId.trim())) {
      alert("Student ID already exists in this class.");
      return;
    }
    const newStudent: Student = { id: newStudentId.trim(), name: newStudentName.trim() };
    setClasses((prev) =>
      prev.map((cls, idx) =>
        idx === selectedClassIndex
          ? { ...cls, students: [...cls.students, newStudent] }
          : cls
      )
    );
    setIsAddStudentOpen(false);
  };

  const openStudentDetails = (student: Student) => {
    setModalStudent(student);
    setStudentDetailsModalOpen(true);
  };

  const closeStudentDetails = () => {
    setStudentDetailsModalOpen(false);
    setModalStudent(null);
  };

  return (
    <div className="h-full flex flex-col px-6 py-4">
      {/* Top 30% Section */}
      <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6 select-none">
        <FaSchool
          className="text-indigo-700 text-6xl mr-4 animate-pulse drop-shadow-lg"
          aria-hidden="true"
        />
        <h1 className="text-indigo-700 text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          Class Details
        </h1>
      </div>

      {/* Select Class & Section */}
      <div className="mb-4 max-w-md">
        <label className="block mb-2 font-semibold text-gray-700">
          Select Class - Section
        </label>
        <select
          value={selectedClassIndex ?? ""}
          onChange={(e) =>
            setSelectedClassIndex(e.target.value === "" ? null : Number(e.target.value))
          }
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select Class - Section
          </option>
          {classes.map((cls, idx) => (
            <option key={`${cls.className}-${cls.section}`} value={idx}>
              {cls.className} - {cls.section}
            </option>
          ))}
        </select>
      </div>

      {/* Change Class Teacher Dropdown with Save */}
      <div className="mb-6 max-w-md flex items-center gap-3">
        <div className="flex-1">
          <label className="block mb-2 font-semibold text-gray-700">Class Teacher</label>
          <select
            disabled={selectedClassIndex === null}
            value={tempTeacherName}
            onChange={handleTeacherChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {[...new Set(classes.map((cls) => cls.teacherName))].map((teacher) => (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSaveTeacher}
          disabled={selectedClassIndex === null}
          title="Save Teacher"
          aria-label="Save Teacher"
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white rounded px-4 py-2 flex items-center gap-2 transition"
        >
          <FaSave />
          Save
        </button>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleAddStudentOpen}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center gap-2"
          aria-label="Add Student"
          title="Add Student"
          disabled={selectedClassIndex === null}
        >
          <FaPlus />
        </button>
        <button
          onClick={handleDeleteSelected}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center gap-2"
          aria-label="Delete Selected Students"
          title="Delete Selected Students"
          disabled={selectedClassIndex === null}
        >
          <FaTrash />
        </button>
      </div>

      {/* Students Table */}
      <div className="overflow-auto flex-grow max-h-[50vh]">
        {selectedClass === null ? (
          <p className="text-gray-500 italic">Please select a class-section to see students.</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead className="bg-indigo-100">
              <tr>
                <th className="border px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (checked) {
                        setSelectedStudentIds(new Set(selectedClass.students.map((s) => s.id)));
                      } else {
                        setSelectedStudentIds(new Set());
                      }
                    }}
                    checked={
                      selectedClass.students.length > 0 &&
                      selectedStudentIds.size === selectedClass.students.length
                    }
                    aria-label="Select all students"
                    disabled={selectedClass.students.length === 0}
                  />
                </th>
                <th className="border px-4 py-2 text-left">Student Name</th>
                <th className="border px-4 py-2 text-left">Student ID</th>
                <th className="border px-4 py-2 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.students.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-4 italic text-gray-500">
                    No students in this class.
                  </td>
                </tr>
              ) : (
                selectedClass.students.map((student) => (
                  <tr key={student.id} className="hover:bg-indigo-50">
                    <td className="border px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedStudentIds.has(student.id)}
                        onChange={() => toggleStudentCheckbox(student.id)}
                        aria-label={`Select student ${student.name}`}
                      />
                    </td>
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">{student.id}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => openStudentDetails(student)}
                        className="text-indigo-600 hover:text-indigo-900"
                        aria-label={`View details of ${student.name}`}
                        title="View Details"
                      >
                        <FaPencilAlt />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Student Modal */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 max-w-md w-full shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Add Student</h2>
            <input
              type="text"
              placeholder="Student ID"
              value={newStudentId}
              onChange={(e) => setNewStudentId(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Student Name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddStudentSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Details Modal */}
      {studentDetailsModalOpen && modalStudent && (
        <StudentDetailsModal student={modalStudent} onClose={closeStudentDetails} />
      )}
    </div>
  );
};

export default ClassDetailsSection;
