

import React, { useState } from "react";
import { FaUserGraduate, FaSearch, FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";
import studentsData from "../data/studentsData";
import StudentFormModal from "./StudentFormModal";

type Section = "none" | "details" | "marks" | "attendance";

// Local definition of Student interface
interface Student {
  id: string;
  name: string;
  className: string;
  email: string;
  marks?: { subject: string; mark: number }[];
  attendance?: { date: string; status: string }[];
}

const StudentDetailsSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>(studentsData);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredStudents([]);
      setSelectedStudent(null);
      return;
    }
    const results = students.filter(
      (student) =>
        student.name.toLowerCase().includes(term) ||
        student.id.toLowerCase().includes(term)
    );
    setFilteredStudents(results);
    setSelectedStudent(null);
  };

  const openAddModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(true);
  };

  const openEditModal = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (studentData: Student) => {
    if (selectedStudent) {
      setStudents((prev) =>
        prev.map((stu) => (stu.id === studentData.id ? studentData : stu))
      );
    } else {
      setStudents((prev) => [...prev, studentData]);
    }
    setIsModalOpen(false);
    setFilteredStudents([]);
    setSearchTerm("");
  };

  const handleDelete = () => {
    if (!searchTerm.trim()) {
      alert("Please search student to delete by name or ID.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete the searched students?")) {
      return;
    }
    setStudents((prev) =>
      prev.filter(
        (student) =>
          !filteredStudents.some((fStu) => fStu.id === student.id)
      )
    );
    setFilteredStudents([]);
    setSearchTerm("");
  };

  const renderStudentTable = () => (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-indigo-100">
        <tr>
          <th className="border px-4 py-2 text-left">Name</th>
          <th className="border px-4 py-2 text-left">ID</th>
          <th className="border px-4 py-2 text-left">Class</th>
          {activeSection === "details" && <th className="border px-4 py-2 text-left">Edit</th>}
        </tr>
      </thead>
      <tbody>
        {filteredStudents.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center p-4 text-gray-500 italic">
              No matching students found.
            </td>
          </tr>
        ) : (
          filteredStudents.map((student) => (
            <tr key={student.id} className="hover:bg-indigo-50">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.className}</td>
              {activeSection === "details" && (
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => openEditModal(student)}
                    className="text-indigo-600 hover:text-indigo-900"
                    aria-label="Edit student"
                  >
                    <FaPencilAlt />
                  </button>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );

  const renderMarksTable = () => {
    if (filteredStudents.length === 0) {
      return <p className="italic text-gray-500 mt-4">No matching students found.</p>;
    }
    return filteredStudents.map((student) => (
      <div key={student.id} className="mb-6 border rounded p-4 shadow-sm bg-white">
        <h4 className="font-semibold mb-2 text-indigo-700">
          {student.name} ({student.id}) - Class {student.className}
        </h4>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border px-4 py-2 text-left">Subject</th>
              <th className="border px-4 py-2 text-left">Mark</th>
            </tr>
          </thead>
          <tbody>
            {student.marks && student.marks.length > 0 ? (
              student.marks.map((m, idx) => (
                <tr key={idx} className="hover:bg-indigo-50">
                  <td className="border px-4 py-2">{m.subject}</td>
                  <td className="border px-4 py-2">{m.mark}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center p-4 italic text-gray-500">
                  No marks available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    ));
  };

  const renderAttendanceTable = () => {
    if (filteredStudents.length === 0) {
      return <p className="italic text-gray-500 mt-4">No matching students found.</p>;
    }
    return filteredStudents.map((student) => (
      <div key={student.id} className="mb-6 border rounded p-4 shadow-sm bg-white">
        <h4 className="font-semibold mb-2 text-indigo-700">
          {student.name} ({student.id}) - Class {student.className}
        </h4>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {student.attendance && student.attendance.length > 0 ? (
              student.attendance.map((a, idx) => (
                <tr key={idx} className="hover:bg-indigo-50">
                  <td className="border px-4 py-2">{a.date}</td>
                  <td className="border px-4 py-2">{a.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center p-4 italic text-gray-500">
                  No attendance records available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div className="h-full flex flex-col px-6 py-4">
      <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6">
        <FaUserGraduate className="text-indigo-600 w-10 h-10 mr-4 animate-pulse" />
        <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md select-none">
          Student Details
        </h2>
      </div>

      <div className="flex gap-6 mb-6 flex-wrap">
        <button
          onClick={() => {
            setActiveSection((prev) => (prev === "details" ? "none" : "details"));
            setFilteredStudents([]);
            setSelectedStudent(null);
            setSearchTerm("");
          }}
          className={`flex-1 bg-indigo-600 text-white py-4 rounded shadow hover:bg-indigo-700 transition
          ${activeSection === "details" ? "ring-4 ring-indigo-400" : ""}`}
        >
          Student Details
        </button>
        <button
          onClick={() => {
            setActiveSection((prev) => (prev === "marks" ? "none" : "marks"));
            setFilteredStudents([]);
            setSelectedStudent(null);
            setSearchTerm("");
          }}
          className={`flex-1 bg-green-600 text-white py-4 rounded shadow hover:bg-green-700 transition
          ${activeSection === "marks" ? "ring-4 ring-green-400" : ""}`}
        >
          Marks
        </button>
        <button
          onClick={() => {
            setActiveSection((prev) => (prev === "attendance" ? "none" : "attendance"));
            setFilteredStudents([]);
            setSelectedStudent(null);
            setSearchTerm("");
          }}
          className={`flex-1 bg-yellow-600 text-white py-4 rounded shadow hover:bg-yellow-700 transition
          ${activeSection === "attendance" ? "ring-4 ring-yellow-400" : ""}`}
        >
          Attendance
        </button>
      </div>

      {activeSection !== "none" && (
        <div className="flex items-center gap-4 mb-6 max-w-md">
          <input
            type="text"
            placeholder="Search by Name or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          {activeSection === "details" && (
            <>
              <button
                onClick={openAddModal}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center gap-2"
              >
                <FaPlus /> Add
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex items-center gap-2"
              >
                <FaTrash /> Delete
              </button>
            </>
          )}
        </div>
      )}

      <div className="flex-grow overflow-auto">
        {activeSection === "details" && renderStudentTable()}
        {activeSection === "marks" && renderMarksTable()}
        {activeSection === "attendance" && renderAttendanceTable()}
      </div>

      {isModalOpen && (
        <StudentFormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          student={selectedStudent}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default StudentDetailsSection;


