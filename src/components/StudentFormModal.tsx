

// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";

// export interface Student {
//   id: string;
//   name: string;
//   fatherName: string;
//   motherName: string;
//   mobile: string;
//   email: string;
//   className: string;
//   photoUrl?: string;
// }

// interface StudentFormModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (studentData: Student) => void;
// }

// const StudentFormModal: React.FC<StudentFormModalProps> = ({
//   isOpen,
//   onClose,
//   onSubmit,
// }) => {
//   const [formStep, setFormStep] = useState(1);

//   const [formData, setFormData] = useState<Student>({
//     id: "",
//     name: "",
//     fatherName: "",
//     motherName: "",
//     mobile: "",
//     email: "",
//     className: "",
//     photoUrl: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleNext = () => {
//     if (formStep === 1) {
//       if (!formData.name || !formData.id || !formData.className) {
//         alert("Please fill in Name, ID, and Class.");
//         return;
//       }
//       setFormStep(2);
//     } else if (formStep === 2) {
//       if (!formData.fatherName || !formData.motherName || !formData.mobile || !formData.email) {
//         alert("Please fill in all fields.");
//         return;
//       }
//       onSubmit(formData);
//       onClose();
//       setFormStep(1);
//       setFormData({
//         id: "",
//         name: "",
//         fatherName: "",
//         motherName: "",
//         mobile: "",
//         email: "",
//         className: "",
//         photoUrl: "",
//       });
//     }
//   };

//   const handlePrev = () => {
//     if (formStep === 2) {
//       setFormStep(1);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-[400px] relative shadow-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
//         >
//           <FaTimes size={20} />
//         </button>

//         <h3 className="text-xl font-bold mb-4">Add Student - Step {formStep} of 2</h3>

//         {formStep === 1 && (
//           <>
//             <input
//               type="text"
//               name="name"
//               placeholder="Student Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//             <input
//               type="text"
//               name="id"
//               placeholder="Student ID"
//               value={formData.id}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//             <input
//               type="text"
//               name="className"
//               placeholder="Class"
//               value={formData.className}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//           </>
//         )}

//         {formStep === 2 && (
//           <>
//             <input
//               type="text"
//               name="fatherName"
//               placeholder="Father's Name"
//               value={formData.fatherName}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//             <input
//               type="text"
//               name="motherName"
//               placeholder="Mother's Name"
//               value={formData.motherName}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border rounded px-3 py-2 w-full mb-4"
//             />
//           </>
//         )}

//         <div className="flex justify-between">
//           {formStep === 2 && (
//             <button
//               onClick={handlePrev}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
//             >
//               Previous
//             </button>
//           )}
//           <button
//             onClick={handleNext}
//             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition ml-auto"
//           >
//             {formStep === 1 ? "Next" : "Submit"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentFormModal;


import React, { useState, useEffect } from "react";
import { Student } from "../data/types"; // or wherever you define your Student type

export interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: Student) => void;
  student?: Student | null; // <-- Add this line
}

const StudentFormModal: React.FC<StudentFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  student,
}) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<Student>({
    id: "",
    name: "",
    className: "",
    email: "",
    marks: [],
    attendance: [],
    fatherName: "",
    motherName: "",
    mobile: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4">
          {student ? "Edit Student" : "Add Student"}
        </h2>

        {formStep === 1 ? (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="id"
              placeholder="Student ID"
              value={formData.id}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="className"
              placeholder="Class"
              value={formData.className}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother's Name"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          {formStep > 1 && (
            <button
              onClick={() => setFormStep((prev) => prev - 1)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {formStep < 2 ? (
            <button
              onClick={() => setFormStep((prev) => prev + 1)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {student ? "Update" : "Add"}
            </button>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default StudentFormModal;
