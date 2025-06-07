import React, { useState } from "react";
import { FaSearch, FaPencilAlt, FaCheck } from "react-icons/fa";
import studentsData, { Student, AttendanceRecord } from "../data/studentsData"; // Adjust path

const classOptions = ["8th Grade", "9th Grade", "10th Grade", "11th Grade"];
const sectionOptions = ["A", "B", "C"];

const AttendanceSection: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [modalStudent, setModalStudent] = useState<Student | null>(null);

  const handleSearch = () => {
    const filtered = studentsData.filter(
      (student) => student.className === selectedClass
    );
    setFilteredStudents(filtered);
    setSelectedStudents([]);
  };

  const toggleStudentSelection = (id: string) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleMarkPresent = () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    const updated: Student[] = filteredStudents.map((student) => {
      const status: AttendanceRecord["status"] = selectedStudents.includes(student.id)
        ? "Present"
        : "Absent";

      return {
        ...student,
        attendance: [...student.attendance, { date: selectedDate, status }],
      };
    });

    // Update state with fixed typing
    setFilteredStudents(updated);
    setSelectedStudents([]);
    alert("Attendance saved successfully.");
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-end mb-6">
        <div className="flex flex-col w-full lg:w-1/4">
          <label className="mb-1 text-sm font-semibold">Class</label>
          <select
            className="border p-2 rounded"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full lg:w-1/4">
          <label className="mb-1 text-sm font-semibold">Section</label>
          <select
            className="border p-2 rounded"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Select Section</option>
            {sectionOptions.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full lg:w-1/4">
          <label className="mb-1 text-sm font-semibold">Date</label>
          <input
            type="date"
            className="border p-2 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 lg:mt-0 flex items-center gap-2 hover:bg-blue-600"
        >
          <FaSearch /> Search
        </button>
      </div>

      {/* Student List */}
      {filteredStudents.length > 0 && (
        <div className="space-y-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-100 rounded shadow"
            >
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => toggleStudentSelection(student.id)}
                  className="w-5 h-5"
                />
                <img
                  src={student.photoUrl}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.className}</p>
                </div>
              </div>

              <button
                onClick={() => setModalStudent(student)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FaPencilAlt />
              </button>
            </div>
          ))}

          {selectedStudents.length > 0 && (
            <button
              onClick={handleMarkPresent}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center gap-2"
            >
              <FaCheck /> Save Attendance
            </button>
          )}
        </div>
      )}

      {/* Student Details Modal */}
      {modalStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-[90%] max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Student Details</h2>
            <img
              src={modalStudent.photoUrl}
              alt={modalStudent.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <p><strong>Name:</strong> {modalStudent.name}</p>
            <p><strong>Father:</strong> {modalStudent.fatherName}</p>
            <p><strong>Mother:</strong> {modalStudent.motherName}</p>
            <p><strong>Mobile:</strong> {modalStudent.mobile}</p>
            <p><strong>Email:</strong> {modalStudent.email}</p>

            <button
              onClick={() => setModalStudent(null)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceSection;
