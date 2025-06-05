
// import React, { useState } from "react";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import staffData from "../data/staffData";

// interface Staff {
//   id: string;
//   name: string;
//   department: string;
//   designation: string;
//   contact: string;
//   photoUrl?: string;
// }

// const StaffDetailsSection: React.FC = () => {
//   const [searchName, setSearchName] = useState("");
//   const [searchId, setSearchId] = useState("");
//   const [filteredStaff, setFilteredStaff] = useState<Staff | null>(null);

//   const handleSearch = () => {
//     const found = staffData.find(
//       (staff) =>
//         staff.name.toLowerCase().trim() === searchName.toLowerCase().trim() &&
//         staff.id.toLowerCase().trim() === searchId.toLowerCase().trim()
//     );
//     setFilteredStaff(found || null);
//   };

//   return (
//     <div className="h-full flex flex-col px-6 py-4">
//       {/* Top 30% Header aligned left with icon and effects */}
//       <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6">
//         <FaChalkboardTeacher className="text-indigo-600 w-10 h-10 mr-4 animate-pulse" />
//         <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md select-none">
//           Staff Details
//         </h2>
//       </div>

//       {/* Search Section */}
//       <div className="flex items-center gap-4 flex-wrap mb-6">
//         <input
//           type="text"
//           placeholder="Search by Name"
//           className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search by ID"
//           className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//           value={searchId}
//           onChange={(e) => setSearchId(e.target.value)}
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
//         >
//           Search
//         </button>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//           Add
//         </button>
//         <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
//           Delete
//         </button>
//       </div>

//       {/* Staff Card */}
//       <div className="flex justify-center mt-8">
//         {filteredStaff ? (
//           <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 animate-fadeIn border-l-4 border-emerald-600 transition hover:scale-[1.01] duration-300">
//             {/* Staff Image */}
//             <div className="flex justify-center items-center">
//               <img
//                 src={
//                   filteredStaff.photoUrl ||
//                   "https://via.placeholder.com/150x150.png?text=Staff"
//                 }
//                 alt={filteredStaff.name}
//                 className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-emerald-400"
//               />
//             </div>

//             {/* Staff Info */}
//             <div className="text-gray-800 space-y-2">
//               <h3 className="text-3xl font-bold text-emerald-700">
//                 {filteredStaff.name}
//                 <span className="text-gray-500 text-xl"> ({filteredStaff.id})</span>
//               </h3>
//               <p>
//                 <strong>🏫 Department:</strong> {filteredStaff.department}
//               </p>
//               <p>
//                 <strong>🎓 Designation:</strong> {filteredStaff.designation}
//               </p>
//               <p>
//                 <strong>📞 Contact:</strong> {filteredStaff.contact}
//               </p>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500 italic">No staff found with given details.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StaffDetailsSection;


import React, { useState } from "react";
import { FaChalkboardTeacher, FaTimes } from "react-icons/fa";
import staffData from "../data/staffData";

interface Staff {
  id: string;
  name: string;
  department: string;
  designation: string;
  contact: string;
  photoUrl?: string;
}

const StaffDetailsSection: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [filteredStaff, setFilteredStaff] = useState<Staff | null>(null);

  // Stepper and form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newDesignation, setNewDesignation] = useState("");
  const [newContact, setNewContact] = useState("");

  const handleSearch = () => {
    const found = staffData.find(
      (staff) =>
        staff.name.toLowerCase().trim() === searchName.toLowerCase().trim() &&
        staff.id.toLowerCase().trim() === searchId.toLowerCase().trim()
    );
    setFilteredStaff(found || null);
  };

  const openAddForm = () => {
    setShowAddForm(true);
    setFormStep(1);
    // Clear form fields on open
    setNewName("");
    setNewId("");
    setNewDepartment("");
    setNewDesignation("");
    setNewContact("");
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
      if (!newDepartment.trim() || !newDesignation.trim() || !newContact.trim()) {
        alert("Please fill in all fields.");
        return;
      }
      // TODO: Add your save logic here
      alert(`Added staff:\nName: ${newName}\nID: ${newId}\nDepartment: ${newDepartment}\nDesignation: ${newDesignation}\nContact: ${newContact}`);
      closeAddForm();
    }
  };

  const prevStep = () => {
    if (formStep === 2) setFormStep(1);
  };

  return (
    <div className="h-full flex flex-col px-6 py-4">
      {/* Top 30% Header aligned left with icon and effects */}
      <div className="h-[30%] flex items-center bg-indigo-100 px-6 rounded-md shadow-lg mb-6">
        <FaChalkboardTeacher className="text-indigo-600 w-10 h-10 mr-4 animate-pulse" />
        <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md select-none">
          Staff Details
        </h2>
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-4 flex-wrap mb-6">
        <input
          type="text"
          placeholder="Search by Name"
          className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by ID"
          className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
        >
          Search
        </button>
        <button
          onClick={openAddForm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      {/* Staff Card */}
      <div className="flex justify-center mt-8">
        {filteredStaff ? (
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-6 animate-fadeIn border-l-4 border-emerald-600 transition hover:scale-[1.01] duration-300">
            {/* Staff Image */}
            <div className="flex justify-center items-center">
              <img
                src={
                  filteredStaff.photoUrl ||
                  "https://via.placeholder.com/150x150.png?text=Staff"
                }
                alt={filteredStaff.name}
                className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-emerald-400"
              />
            </div>

            {/* Staff Info */}
            <div className="text-gray-800 space-y-2">
              <h3 className="text-3xl font-bold text-emerald-700">
                {filteredStaff.name}
                <span className="text-gray-500 text-xl"> ({filteredStaff.id})</span>
              </h3>
              <p>
                <strong>🏫 Department:</strong> {filteredStaff.department}
              </p>
              <p>
                <strong>🎓 Designation:</strong> {filteredStaff.designation}
              </p>
              <p>
                <strong>📞 Contact:</strong> {filteredStaff.contact}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic">No staff found with given details.</p>
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

            <h3 className="text-xl font-bold mb-6">Add Staff - Step {formStep} of 2</h3>

            {formStep === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Staff Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Staff ID"
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
                  placeholder="Department"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Designation"
                  value={newDesignation}
                  onChange={(e) => setNewDesignation(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)}
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

export default StaffDetailsSection;
