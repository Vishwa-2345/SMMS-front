


import React, { useState } from "react";
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";

const ExamSection: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [showTable, setShowTable] = useState(false);

  const examOptions = [
    "June Monthly",
    "Mid Term",
    "Quarterly",
    "Half Yearly",
    "Final Exam",
  ];

  const classOptions = [
    "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th", "11th", "12th",
  ];

  const subjectOptions = [
    "No Exam",
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Social",
    "Computer",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "Economics"
  ];

  const dayOptions = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  const handleSearch = () => {
    setShowTable(true);
    setTableData([
      {
        date: "",
        day: "",
        morning: "No Exam",
        afternoon: "No Exam"
      }
    ]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const addRow = () => {
    setTableData([...tableData, {
      date: "",
      day: "",
      morning: "No Exam",
      afternoon: "No Exam"
    }]);
  };

  const deleteRow = (index: number) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  const handleSave = () => {
    console.log("Saved Data:", tableData);
    alert("Saved Successfully!");
  };

  const handleCancel = () => {
    setShowTable(false);
    setTableData([]);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-10 px-6 rounded-b-xl shadow-md mb-6">
        <h2 className="text-3xl font-bold">Exam Section</h2>
        <p className="text-lg mt-2">Manage exam schedules and update subjects</p>
      </div>

      {/* Dropdown Selectors */}
      <div className="flex flex-wrap items-center gap-4 mb-6 px-6">
        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Select Exam</option>
          {examOptions.map((exam) => (
            <option key={exam} value={exam}>{exam}</option>
          ))}
        </select>

        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Select Class</option>
          {classOptions.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center gap-2"
        >
          <FaSearch />
          Search
        </button>
      </div>

      {/* Exam Table */}
      {showTable && (
        <div className="px-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Morning</th>
                  <th className="px-4 py-2">Afternoon</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">
                      <input
                        type="date"
                        className="border rounded px-2 py-1 w-full"
                        value={row.date}
                        onChange={(e) =>
                          handleChange(index, "date", e.target.value)
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <select
                        className="border rounded px-2 py-1 w-full"
                        value={row.day}
                        onChange={(e) => handleChange(index, "day", e.target.value)}
                      >
                        <option value="">Select Day</option>
                        {dayOptions.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      <select
                        className="border rounded px-2 py-1 w-full"
                        value={row.morning}
                        onChange={(e) => handleChange(index, "morning", e.target.value)}
                      >
                        {subjectOptions.map((subj) => (
                          <option key={subj} value={subj}>{subj}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      <select
                        className="border rounded px-2 py-1 w-full"
                        value={row.afternoon}
                        onChange={(e) => handleChange(index, "afternoon", e.target.value)}
                      >
                        {subjectOptions.map((subj) => (
                          <option key={subj} value={subj}>{subj}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => deleteRow(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={addRow}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
            >
              <FaPlus /> Add Row
            </button>

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamSection;




