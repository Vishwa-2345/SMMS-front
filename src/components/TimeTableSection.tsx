
// import React, { useState } from 'react';
// import { FaEdit, FaSave, FaTimes, FaSearch } from 'react-icons/fa';

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const hours = [
//   '9:00 - 9:45 AM',
//   '10:00 - 10:45 AM',
//   '11:00 AM - Break',
//   '11:15 - 12:00 PM',
//   '12:15 - 1:00 PM',
//   '1:00 - Lunch',
//   '2:00 - 2:45 PM',
//   '3:00 - 3:45 PM'
// ];

// const subjects = ['Math', 'English', 'Science', 'History', 'Geography', 'Tamil'];
// const staffMembers = ['Mr. John', 'Ms. Emma', 'Mrs. Kate', 'Mr. David', 'Ms. Lily'];

// const TimetableSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'class' | 'staff'>('class');
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSection, setSelectedSection] = useState('');
//   const [selectedStaff, setSelectedStaff] = useState('');
//   const [timetables, setTimetables] = useState<{ [key: string]: any }>({});
//   const [editing, setEditing] = useState(false);
//   const [editData, setEditData] = useState<any>({});
//   const [timetableKey, setTimetableKey] = useState('');

//   const generateTimetableKey = () => {
//     return activeTab === 'class'
//       ? `${selectedClass}-${selectedSection}`
//       : selectedStaff;
//   };

//   const handleEdit = () => {
//     setEditData({ ...timetables[timetableKey] });
//     setEditing(true);
//   };

//   const handleCancel = () => {
//     setEditing(false);
//     setEditData({});
//   };

//   const handleSave = () => {
//     setTimetables({ ...timetables, [timetableKey]: editData });
//     setEditing(false);
//   };

//   const handleChange = (day: string, hour: string, field: string, value: string) => {
//     const updated = { ...editData };
//     if (!updated[day]) updated[day] = {};
//     updated[day][hour] = {
//       ...updated[day][hour],
//       [field]: value
//     };
//     setEditData(updated);
//   };

//   const handleSearch = () => {
//     const key = generateTimetableKey();
//     setTimetableKey(key);

//     if (!timetables[key]) {
//       const newTable: any = {};
//       days.forEach((day) => {
//         newTable[day] = {};
//         hours.forEach((hour) => {
//           if (hour.includes('Break') || hour.includes('Lunch')) return;
//           newTable[day][hour] = {
//             subject: subjects[Math.floor(Math.random() * subjects.length)],
//             staff: staffMembers[Math.floor(Math.random() * staffMembers.length)]
//           };
//         });
//       });
//       setTimetables((prev) => ({ ...prev, [key]: newTable }));
//     }
//   };

//   const renderTable = () => {
//     const data = editing ? editData : timetables[timetableKey];

//     return (
//       <div className="overflow-x-auto mt-6 animate-fade-in">
//         <table className="table-auto w-full border border-gray-300 shadow-md">
//           <thead>
//             <tr className="bg-blue-200 text-blue-900 text-sm">
//               <th className="border px-4 py-2">Day / Period</th>
//               {hours.map((hour) => (
//                 <th key={hour} className="border px-4 py-2">{hour}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {days.map((day) => (
//               <tr key={day}>
//                 <td className="border px-4 py-2 font-bold bg-gray-100">{day}</td>
//                 {hours.map((hour) => {
//                   const isBreak = hour.includes('Break');
//                   const isLunch = hour.includes('Lunch');

//                   if (isBreak) {
//                     return <td key={hour} className="border text-center text-blue-500 font-bold bg-gray-50">Break</td>;
//                   }
//                   if (isLunch) {
//                     return <td key={hour} className="border text-center text-green-600 font-bold bg-gray-50">Lunch</td>;
//                   }

//                   const entry = data?.[day]?.[hour] || {};
//                   const subject = entry.subject || '-';
//                   const staff = entry.staff || '-';

//                   const showThis =
//                     activeTab === 'class' ||
//                     (activeTab === 'staff' && staff === selectedStaff);

//                   return (
//                     <td key={hour} className="border px-2 py-1 text-sm transition-all duration-300 hover:bg-blue-50">
//                       {editing ? (
//                         <div className="flex flex-col gap-1">
//                           <select
//                             className="border rounded px-2 py-1 text-sm"
//                             value={entry.subject || ''}
//                             onChange={(e) =>
//                               handleChange(day, hour, 'subject', e.target.value)
//                             }
//                           >
//                             <option value="">Subject</option>
//                             {subjects.map((subj) => (
//                               <option key={subj} value={subj}>{subj}</option>
//                             ))}
//                           </select>
//                           {activeTab === 'class' && (
//                             <select
//                               className="border rounded px-2 py-1 text-sm"
//                               value={entry.staff || ''}
//                               onChange={(e) =>
//                                 handleChange(day, hour, 'staff', e.target.value)
//                               }
//                             >
//                               <option value="">Staff</option>
//                               {staffMembers.map((staff) => (
//                                 <option key={staff} value={staff}>{staff}</option>
//                               ))}
//                             </select>
//                           )}
//                         </div>
//                       ) : showThis ? (
//                         <div>
//                           <div>{subject}</div>
//                           <div className="text-gray-500 text-xs">
//                             {activeTab === 'class'
//                               ? staff
//                               : `Class: ${selectedClass} ${selectedSection}`}
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="text-center text-gray-300">—</div>
//                       )}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full">
//       {/* Top Banner */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-[30vh] text-white flex flex-col items-center justify-center shadow-xl">
//         <h1 className="text-4xl font-bold mb-2">Timetable Section</h1>
//         <p className="text-lg font-light">Manage and View Timetables</p>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           className={`px-4 py-2 rounded-t-lg font-semibold transition ${
//             activeTab === 'class' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//           }`}
//           onClick={() => {
//             setActiveTab('class');
//             setEditing(false);
//             setTimetableKey('');
//           }}
//         >
//           Class Timetable
//         </button>
//         <button
//           className={`px-4 py-2 rounded-t-lg font-semibold transition ${
//             activeTab === 'staff' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//           }`}
//           onClick={() => {
//             setActiveTab('staff');
//             setEditing(false);
//             setTimetableKey('');
//           }}
//         >
//           Staff Timetable
//         </button>
//       </div>

//       {/* Filter Section */}
//       <div className="flex items-center justify-center space-x-4 mt-4">
//         {activeTab === 'class' ? (
//           <>
//             <select
//               className="border px-3 py-2 rounded"
//               value={selectedClass}
//               onChange={(e) => setSelectedClass(e.target.value)}
//             >
//               <option value="">Select Class</option>
//               <option value="1st">1st</option>
//               <option value="2nd">2nd</option>
//               <option value="3rd">3rd</option>
//               <option value="4th">4th</option>
//               <option value="5th">5th</option>
//             </select>
//             <select
//               className="border px-3 py-2 rounded"
//               value={selectedSection}
//               onChange={(e) => setSelectedSection(e.target.value)}
//             >
//               <option value="">Select Section</option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//             </select>
//           </>
//         ) : (
//           <select
//             className="border px-3 py-2 rounded"
//             value={selectedStaff}
//             onChange={(e) => setSelectedStaff(e.target.value)}
//           >
//             <option value="">Select Staff</option>
//             {staffMembers.map((s) => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select>
//         )}
//         <button
//           className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//           onClick={handleSearch}
//         >
//           <FaSearch />
//         </button>
//       </div>

//       {/* Render Table */}
//       {timetableKey && timetables[timetableKey] && renderTable()}

//       {/* Edit Buttons */}
//       {timetableKey && timetables[timetableKey] && (
//         <div className="flex justify-center space-x-4 mt-6">
//           {!editing ? (
//             <button onClick={handleEdit} className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600">
//               <FaEdit />
//             </button>
//           ) : (
//             <>
//               <button onClick={handleSave} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
//                 <FaSave />
//               </button>
//               <button onClick={handleCancel} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600">
//                 <FaTimes />
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimetableSection;

import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes, FaSearch, FaSchool } from 'react-icons/fa';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const hours = [
  '9:00 - 9:45 AM',
  '10:00 - 10:45 AM',
  '11:00 AM - Break',
  '11:15 - 12:00 PM',
  '12:15 - 1:00 PM',
  '1:00 - Lunch',
  '2:00 - 2:45 PM',
  '3:00 - 3:45 PM'
];

const subjects = ['Math', 'English', 'Science', 'History', 'Geography', 'Tamil'];
const staffMembers = ['Mr. John', 'Ms. Emma', 'Mrs. Kate', 'Mr. David', 'Ms. Lily'];

const TimetableSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'class' | 'staff'>('class');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [timetables, setTimetables] = useState<{ [key: string]: any }>({});
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState<any>({});
  const [timetableKey, setTimetableKey] = useState('');

  const generateTimetableKey = () => {
    return activeTab === 'class'
      ? `${selectedClass}-${selectedSection}`
      : selectedStaff;
  };

  const handleEdit = () => {
    setEditData({ ...timetables[timetableKey] });
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditData({});
  };

  const handleSave = () => {
    setTimetables({ ...timetables, [timetableKey]: editData });
    setEditing(false);
  };

  const handleChange = (day: string, hour: string, field: string, value: string) => {
    const updated = { ...editData };
    if (!updated[day]) updated[day] = {};
    updated[day][hour] = {
      ...updated[day][hour],
      [field]: value
    };
    setEditData(updated);
  };

  const handleSearch = () => {
    const key = generateTimetableKey();
    setTimetableKey(key);

    if (!timetables[key]) {
      const newTable: any = {};
      days.forEach((day) => {
        newTable[day] = {};
        hours.forEach((hour) => {
          if (hour.includes('Break') || hour.includes('Lunch')) return;
          newTable[day][hour] = {
            subject: subjects[Math.floor(Math.random() * subjects.length)],
            staff: staffMembers[Math.floor(Math.random() * staffMembers.length)]
          };
        });
      });
      setTimetables((prev) => ({ ...prev, [key]: newTable }));
    }
  };

  const renderTable = () => {
    const data = editing ? editData : timetables[timetableKey];

    return (
      <div className="overflow-x-auto mt-6 animate-fade-in">
        <table className="table-auto w-full border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-blue-200 text-blue-900 text-sm">
              <th className="border px-4 py-2">Day / Period</th>
              {hours.map((hour) => (
                <th key={hour} className="border px-4 py-2">{hour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="border px-4 py-2 font-bold bg-gray-100">{day}</td>
                {hours.map((hour) => {
                  const isBreak = hour.includes('Break');
                  const isLunch = hour.includes('Lunch');

                  if (isBreak) {
                    return <td key={hour} className="border text-center text-blue-500 font-bold bg-gray-50">Break</td>;
                  }
                  if (isLunch) {
                    return <td key={hour} className="border text-center text-green-600 font-bold bg-gray-50">Lunch</td>;
                  }

                  const entry = data?.[day]?.[hour] || {};
                  const subject = entry.subject || '-';
                  const staff = entry.staff || '-';

                  const showThis =
                    activeTab === 'class' ||
                    (activeTab === 'staff' && staff === selectedStaff);

                  return (
                    <td key={hour} className="border px-2 py-1 text-sm transition-all duration-300 hover:bg-blue-50">
                      {editing ? (
                        <div className="flex flex-col gap-1">
                          <select
                            className="border rounded px-2 py-1 text-sm"
                            value={entry.subject || ''}
                            onChange={(e) =>
                              handleChange(day, hour, 'subject', e.target.value)
                            }
                          >
                            <option value="">Subject</option>
                            {subjects.map((subj) => (
                              <option key={subj} value={subj}>{subj}</option>
                            ))}
                          </select>
                          {activeTab === 'class' && (
                            <select
                              className="border rounded px-2 py-1 text-sm"
                              value={entry.staff || ''}
                              onChange={(e) =>
                                handleChange(day, hour, 'staff', e.target.value)
                              }
                            >
                              <option value="">Staff</option>
                              {staffMembers.map((staff) => (
                                <option key={staff} value={staff}>{staff}</option>
                              ))}
                            </select>
                          )}
                        </div>
                      ) : showThis ? (
                        <div>
                          <div>{subject}</div>
                          <div className="text-gray-500 text-xs">
                            {activeTab === 'class'
                              ? staff
                              : `Class: ${selectedClass} ${selectedSection}`}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-gray-300">—</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Updated Top 30% Section */}
      <div className="h-[30vh] flex items-center bg-indigo-100 px-8 rounded-md shadow-lg mb-6 select-none">
        <FaSchool
          className="text-indigo-700 text-6xl mr-6 animate-pulse drop-shadow-lg"
          aria-hidden="true"
        />
        <h1 className="text-indigo-700 text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">
          Timetable Management
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold transition ${
            activeTab === 'class' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => {
            setActiveTab('class');
            setEditing(false);
            setTimetableKey('');
          }}
        >
          Class Timetable
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold transition ${
            activeTab === 'staff' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => {
            setActiveTab('staff');
            setEditing(false);
            setTimetableKey('');
          }}
        >
          Staff Timetable
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        {activeTab === 'class' ? (
          <>
            <select
              className="border px-3 py-2 rounded"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
            <select
              className="border px-3 py-2 rounded"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </>
        ) : (
          <select
            className="border px-3 py-2 rounded"
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
          >
            <option value="">Select Staff</option>
            {staffMembers.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        )}
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleSearch}
          aria-label="Search Timetable"
        >
          <FaSearch />
        </button>
      </div>

      {/* Render Table */}
      {timetableKey && timetables[timetableKey] && renderTable()}

      {/* Edit Buttons */}
      {timetableKey && timetables[timetableKey] && (
        <div className="flex justify-center space-x-4 mt-6">
          {!editing ? (
            <button onClick={handleEdit} className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600" aria-label="Edit Timetable">
              <FaEdit />
            </button>
          ) : (
            <>
              <button onClick={handleSave} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600" aria-label="Save Timetable">
                <FaSave />
              </button>
              <button onClick={handleCancel} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600" aria-label="Cancel Edit">
                <FaTimes />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TimetableSection;
