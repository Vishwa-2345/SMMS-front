// import React from "react";

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const periods = [
//   "8:00 - 9:00",
//   "9:00 - 10:00",
//   "10:00 - 11:00",
//   "11:00 - 12:00",
//   "12:00 - 1:00",
//   "2:00 - 3:00",
//   "3:00 - 4:00",
// ];

// // Example timetable data for a staff member
// const timetableData: Record<string, Record<string, string>> = {
//   "8:00 - 9:00": {
//     Monday: "Math - Class 5A",
//     Tuesday: "Physics - Class 7B",
//     Wednesday: "Chemistry - Class 6A",
//     Thursday: "Math - Class 5A",
//     Friday: "Free Period",
//   },
//   "9:00 - 10:00": {
//     Monday: "English - Class 6B",
//     Tuesday: "Physics Lab - Class 7B",
//     Wednesday: "Chemistry - Class 6A",
//     Thursday: "English - Class 6B",
//     Friday: "Staff Meeting",
//   },
//   "10:00 - 11:00": {
//     Monday: "Break",
//     Tuesday: "Break",
//     Wednesday: "Break",
//     Thursday: "Break",
//     Friday: "Break",
//   },
//   "11:00 - 12:00": {
//     Monday: "History - Class 8A",
//     Tuesday: "Biology - Class 7A",
//     Wednesday: "History - Class 8A",
//     Thursday: "Biology - Class 7A",
//     Friday: "Free Period",
//   },
//   "12:00 - 1:00": {
//     Monday: "Lunch",
//     Tuesday: "Lunch",
//     Wednesday: "Lunch",
//     Thursday: "Lunch",
//     Friday: "Lunch",
//   },
//   "2:00 - 3:00": {
//     Monday: "Math - Class 5A",
//     Tuesday: "Physics - Class 7B",
//     Wednesday: "Chemistry - Class 6A",
//     Thursday: "Math - Class 5A",
//     Friday: "Free Period",
//   },
//   "3:00 - 4:00": {
//     Monday: "Planning & Prep",
//     Tuesday: "Planning & Prep",
//     Wednesday: "Planning & Prep",
//     Thursday: "Planning & Prep",
//     Friday: "Planning & Prep",
//   },
// };

// const StaffTimetable: React.FC = () => {
//   return (
//     <div className="overflow-x-auto bg-white rounded shadow p-6 max-w-full">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Timetable</h2>
//       <table className="min-w-full border border-gray-300 text-left">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Time</th>
//             {days.map((day) => (
//               <th key={day} className="border border-gray-300 px-4 py-2">
//                 {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {periods.map((period) => (
//             <tr key={period} className="hover:bg-gray-50">
//               <td className="border border-gray-300 px-4 py-2 font-medium">{period}</td>
//               {days.map((day) => (
//                 <td key={day} className="border border-gray-300 px-4 py-2">
//                   {timetableData[period]?.[day] || ""}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StaffTimetable;

import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const periods = [
  "8:00 - 9:00",
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 1:00",
  "2:00 - 3:00",
  "3:00 - 4:00",
];

// Example timetable data for a staff member
const timetableData: Record<string, Record<string, string>> = {
  "8:00 - 9:00": {
    Monday: "Math - Class 5A",
    Tuesday: "Physics - Class 7B",
    Wednesday: "Chemistry - Class 6A",
    Thursday: "Math - Class 5A",
    Friday: "Free Period",
  },
  "9:00 - 10:00": {
    Monday: "English - Class 6B",
    Tuesday: "Physics Lab - Class 7B",
    Wednesday: "Chemistry - Class 6A",
    Thursday: "English - Class 6B",
    Friday: "Staff Meeting",
  },
  "10:00 - 11:00": {
    Monday: "Break",
    Tuesday: "Break",
    Wednesday: "Break",
    Thursday: "Break",
    Friday: "Break",
  },
  "11:00 - 12:00": {
    Monday: "History - Class 8A",
    Tuesday: "Biology - Class 7A",
    Wednesday: "History - Class 8A",
    Thursday: "Biology - Class 7A",
    Friday: "Free Period",
  },
  "12:00 - 1:00": {
    Monday: "Lunch",
    Tuesday: "Lunch",
    Wednesday: "Lunch",
    Thursday: "Lunch",
    Friday: "Lunch",
  },
  "2:00 - 3:00": {
    Monday: "Math - Class 5A",
    Tuesday: "Physics - Class 7B",
    Wednesday: "Chemistry - Class 6A",
    Thursday: "Math - Class 5A",
    Friday: "Free Period",
  },
  "3:00 - 4:00": {
    Monday: "Planning & Prep",
    Tuesday: "Planning & Prep",
    Wednesday: "Planning & Prep",
    Thursday: "Planning & Prep",
    Friday: "Planning & Prep",
  },
};

const StaffTimetable: React.FC = () => {
  return (
    <div
      className="overflow-x-auto bg-white rounded shadow p-6 max-w-full"
      style={{ animation: "fadeIn 0.8s ease forwards" }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 drop-shadow-lg select-none">
        My Timetable
      </h2>

      <table className="min-w-full border border-gray-300 text-left shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-green-200 to-teal-200 text-gray-800">
          <tr>
            <th className="border border-gray-300 px-4 py-3 font-semibold">Day / Time</th>
            {periods.map((period) => (
              <th key={period} className="border border-gray-300 px-4 py-3 font-semibold">
                {period}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, idx) => (
            <tr
              key={day}
              className={`${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-green-100 transition-colors duration-300 cursor-default`}
            >
              <td className="border border-gray-300 px-4 py-2 font-medium text-gray-700">
                {day}
              </td>
              {periods.map((period) => (
                <td key={period} className="border border-gray-300 px-4 py-2 text-gray-800">
                  {timetableData[period]?.[day] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default StaffTimetable;
