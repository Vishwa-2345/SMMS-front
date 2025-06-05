
import React, { useState } from "react";
import { FaUserGraduate, FaTimes } from "react-icons/fa";
import studentsData from "../data/studentsData";

interface Student {
  id: string;
  name: string;
  fatherName: string;
  motherName: string;
  mobile: string;
  photoUrl?: string;
}

const StudentDetailsSection: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [filteredStudent, setFilteredStudent] = useState<Student | null>(null);

  // Stepper state for form steps
  const [showAddForm, setShowAddForm] = useState(false);
  const [formStep, setFormStep] = useState(1);

  // Form fields state
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [newFatherName, setNewFatherName] = useState("");
  const [newMotherName, setNewMotherName] = useState("");
  const [newMobile, setNewMobile] = useState("");

  const handleSearch = () => {
    const found = studentsData.find(
      (student) =>
        student.name.toLowerCase().trim() === searchName.toLowerCase().trim() &&
        student.id.toLowerCase().trim() === searchId.toLowerCase().trim()
    );
    setFilteredStudent(found || null);
  };

  const openAddForm = () => {
    setShowAddForm(true);
    setFormStep(1);
    setNewName("");
    setNewId("");
    setNewFatherName("");
    setNewMotherName("");
    setNewMobile("");
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  const nextStep = () => {
    if (formStep === 1) {
      if (!newName.trim() || !newId.trim()) {
        alert("Please fill in Name and ID.");
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      if (
        !newFatherName.trim() ||
        !newMotherName.trim() ||
        !newMobile.trim()
      ) {
        alert("Please fill in all fields.");
        return;
      }
      // Save new student here or handle it as needed
      alert(`Added student:\nName: ${newName}\nID: ${newId}\nFather: ${newFatherName}\nMother: ${newMotherName}\nMobile: ${newMobile}`);
      closeAddForm();
    }
  };

  const prevStep = () => {
    if (formStep === 2) {
      setFormStep(1);
    }
  };

  return (
    <div className="h-full flex flex-col px-6 py-4">
      {/* Top 30% Header aligned left with icon and effects */}
      <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6">
        <FaUserGraduate className="text-indigo-600 w-10 h-10 mr-4 animate-pulse" />
        <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md select-none">
          Student Details
        </h2>
      </div>

      {/* Search Fields and Buttons */}
      <div className="flex items-center gap-4 flex-wrap mb-6">
        <input
          type="text"
          placeholder="Search by Name"
          className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by ID"
          className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Search
        </button>
        <button
          onClick={openAddForm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      {/* Searched Student Detail Card */}
      <div className="flex justify-center mt-8">
        {filteredStudent ? (
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 animate-fadeIn border-l-4 border-indigo-600 transition hover:scale-[1.01] duration-300">
            {/* Student Image */}
            <div className="flex justify-center items-center">
              <img
                src={
                  filteredStudent.photoUrl ||
                  "https://via.placeholder.com/150x150.png?text=Student"
                }
                alt={filteredStudent.name}
                className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-indigo-400"
              />
            </div>

            {/* Info Section */}
            <div className="text-gray-800 space-y-2">
              <h3 className="text-3xl font-bold text-indigo-700">
                {filteredStudent.name}
                <span className="text-gray-500 text-xl"> ({filteredStudent.id})</span>
              </h3>
              <p><strong>👨‍👧 Father:</strong> {filteredStudent.fatherName}</p>
              <p><strong>👩‍👧 Mother:</strong> {filteredStudent.motherName}</p>
              <p><strong>📞 Mobile:</strong> {filteredStudent.mobile}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic">No student found with given details.</p>
        )}
      </div>

      {/* Add Form Modal with blur */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative shadow-lg">
            <button
              onClick={closeAddForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close form"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-xl font-bold mb-6">Add Student - Step {formStep} of 2</h3>

            {formStep === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Student Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Student ID"
                  value={newId}
                  onChange={(e) => setNewId(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
              </>
            )}

            {formStep === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Father's Name"
                  value={newFatherName}
                  onChange={(e) => setNewFatherName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Mother's Name"
                  value={newMotherName}
                  onChange={(e) => setNewMotherName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={newMobile}
                  onChange={(e) => setNewMobile(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
              </>
            )}

            <div className="flex justify-between">
              {formStep === 2 && (
                <button
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                >
                  Previous
                </button>
              )}

              <button
                onClick={nextStep}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition ml-auto"
              >
                {formStep === 1 ? "Next" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetailsSection;
