// // ProfileSection.tsx
// import React from "react";

// interface Staff {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   position: string;
//   department: string;
// }

// interface ProfileSectionProps {
//   staff: Staff | null;
// }

// const ProfileSection: React.FC<ProfileSectionProps> = ({ staff }) => {
//   if (!staff) {
//     return (
//       <div className="p-6 bg-white rounded shadow-md text-center text-red-500">
//         No staff data found. Please log in.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-center text-[#00FA9A]">
//         Staff Profile
//       </h2>
//       <div className="space-y-3 text-gray-700">
//         <div>
//           <strong>Name:</strong> {staff.name}
//         </div>
//         <div>
//           <strong>Email:</strong> {staff.email}
//         </div>
//         <div>
//           <strong>Phone:</strong> {staff.phone}
//         </div>
//         <div>
//           <strong>Position:</strong> {staff.position}
//         </div>
//         <div>
//           <strong>Department:</strong> {staff.department}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;

import React from "react";

interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  position: string;
  address: string;
  dob: string;
  gender: string;
}

interface ProfileSectionProps {
  staff: Staff;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ staff }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4B0082]">
        Staff Profile
      </h2>
      <div className="space-y-3 text-gray-700">
        <div><strong>ID:</strong> {staff.id}</div>
        <div><strong>Name:</strong> {staff.name}</div>
        <div><strong>Email:</strong> {staff.email}</div>
        <div><strong>Phone:</strong> {staff.phone}</div>
        <div><strong>Department:</strong> {staff.department}</div>
        <div><strong>Designation:</strong> {staff.designation}</div>
        <div><strong>Position:</strong> {staff.position}</div>
        <div><strong>Address:</strong> {staff.address}</div>
        <div><strong>Date of Birth:</strong> {staff.dob}</div>
        <div><strong>Gender:</strong> {staff.gender}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
