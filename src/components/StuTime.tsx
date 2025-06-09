

import React, { useState } from "react";

interface Mark {
  subject: string;
  mark: number;
}

interface AttendanceRecord {
  date: string;
  status: "Present" | "Absent";
}

export interface Student {
  id: string;
  username: string;
  password: string;
  name: string;
  fatherName: string;
  motherName: string;
  mobile: string;
  email: string;
  className: string;
  section: string;
  marks: Mark[];
  attendance: AttendanceRecord[];
}

const timeSlots = [
  "9:00 - 9:30",
  "9:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 1:00",
  "1:00 - 1:30",
  "1:30 - 2:00",
  "2:00 - 2:30",
  "2:30 - 3:00",
  "3:00 - 3:30",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type ScheduleItem = {
  day: string;
  timeSlot: string;
  subject: string;
  teacher: string;
};

const classTimetables: Record<
  string,
  {
    classTeacher: string;
    schedule: ScheduleItem[];
  }
> = {
  "10th Grade-A": {
    classTeacher: "Mrs. Smith",
    schedule: [
      { day: "Monday", timeSlot: "9:00 - 9:30", subject: "Math", teacher: "Mr. Allen" },
      { day: "Monday", timeSlot: "9:30 - 10:00", subject: "Math", teacher: "Mr. Allen" },
      { day: "Monday", timeSlot: "10:00 - 10:30", subject: "Science", teacher: "Ms. Baker" },
      { day: "Monday", timeSlot: "10:30 - 11:00", subject: "Science", teacher: "Ms. Baker" },
      { day: "Monday", timeSlot: "11:00 - 11:30", subject: "Break", teacher: "" },
      { day: "Monday", timeSlot: "11:30 - 12:00", subject: "English", teacher: "Mrs. Clark" },
      { day: "Monday", timeSlot: "12:00 - 12:30", subject: "English", teacher: "Mrs. Clark" },
      { day: "Monday", timeSlot: "12:30 - 1:00", subject: "History", teacher: "Mr. Davis" },
      { day: "Monday", timeSlot: "1:00 - 1:30", subject: "History", teacher: "Mr. Davis" },
      { day: "Monday", timeSlot: "1:30 - 2:00", subject: "Lunch", teacher: "" },
      { day: "Monday", timeSlot: "2:00 - 2:30", subject: "Geography", teacher: "Ms. Evans" },
      { day: "Monday", timeSlot: "2:30 - 3:00", subject: "Geography", teacher: "Ms. Evans" },
      { day: "Monday", timeSlot: "3:00 - 3:30", subject: "Sports", teacher: "Coach Ford" },
      // Repeat for other days (Tuesday-Friday) with example data:
      { day: "Tuesday", timeSlot: "9:00 - 9:30", subject: "English", teacher: "Mrs. Clark" },
      { day: "Tuesday", timeSlot: "9:30 - 10:00", subject: "English", teacher: "Mrs. Clark" },
      { day: "Tuesday", timeSlot: "10:00 - 10:30", subject: "Math", teacher: "Mr. Allen" },
      { day: "Tuesday", timeSlot: "10:30 - 11:00", subject: "Math", teacher: "Mr. Allen" },
      { day: "Tuesday", timeSlot: "11:00 - 11:30", subject: "Break", teacher: "" },
      { day: "Tuesday", timeSlot: "11:30 - 12:00", subject: "Science", teacher: "Ms. Baker" },
      { day: "Tuesday", timeSlot: "12:00 - 12:30", subject: "Science", teacher: "Ms. Baker" },
      { day: "Tuesday", timeSlot: "12:30 - 1:00", subject: "History", teacher: "Mr. Davis" },
      { day: "Tuesday", timeSlot: "1:00 - 1:30", subject: "History", teacher: "Mr. Davis" },
      { day: "Tuesday", timeSlot: "1:30 - 2:00", subject: "Lunch", teacher: "" },
      { day: "Tuesday", timeSlot: "2:00 - 2:30", subject: "Geography", teacher: "Ms. Evans" },
      { day: "Tuesday", timeSlot: "2:30 - 3:00", subject: "Geography", teacher: "Ms. Evans" },
      { day: "Tuesday", timeSlot: "3:00 - 3:30", subject: "Sports", teacher: "Coach Ford" },
      // Add Wednesday-Friday similarly (omitted for brevity)
    ],
  },
  // You can add other classes here...
};

const examTimetables: Record<
  string,
  {
    examName: string;
    schedule: { date: string; day: string; subject: string; session: string }[];
  }[]
> = {
  "10th Grade": [
    {
      examName: "Mid Term Exam",
      schedule: [
        { date: "2025-07-01", day: "Tuesday", subject: "Math", session: "Morning" },
        { date: "2025-07-02", day: "Wednesday", subject: "Science", session: "Morning" },
        { date: "2025-07-03", day: "Thursday", subject: "English", session: "Afternoon" },
      ],
    },
    {
      examName: "Final Exam",
      schedule: [
        { date: "2025-10-01", day: "Wednesday", subject: "Math", session: "Morning" },
        { date: "2025-10-02", day: "Thursday", subject: "Science", session: "Morning" },
        { date: "2025-10-03", day: "Friday", subject: "English", session: "Afternoon" },
      ],
    },
    {
      examName: "Quarterly Exam",
      schedule: [
        { date: "2025-08-10", day: "Monday", subject: "Math", session: "Morning" },
        { date: "2025-08-11", day: "Tuesday", subject: "Science", session: "Afternoon" },
        { date: "2025-08-12", day: "Wednesday", subject: "English", session: "Morning" },
      ],
    },
    {
      examName: "Half Yearly Exam",
      schedule: [
        { date: "2025-09-15", day: "Monday", subject: "Math", session: "Morning" },
        { date: "2025-09-16", day: "Tuesday", subject: "Science", session: "Morning" },
        { date: "2025-09-17", day: "Wednesday", subject: "English", session: "Afternoon" },
      ],
    },
    {
      examName: "Practice Test",
      schedule: [
        { date: "2025-06-20", day: "Friday", subject: "Math", session: "Morning" },
        { date: "2025-06-21", day: "Saturday", subject: "Science", session: "Afternoon" },
        { date: "2025-06-22", day: "Sunday", subject: "English", session: "Morning" },
      ],
    },
  ],
};

interface StuTimeProps {
  student: Student;
}

const StuTime: React.FC<StuTimeProps> = ({ student }) => {
  const [activeTab, setActiveTab] = useState<"class" | "exam">("class");
  const [selectedExamName, setSelectedExamName] = useState<string>("");
  const [showExamTimetable, setShowExamTimetable] = useState<boolean>(false);

  const classKey = `${student.className}-${student.section}`;
  const classTimetable = classTimetables[classKey];

  const examsForClass = examTimetables[student.className] || [];

  const selectedExam = examsForClass.find((e) => e.examName === selectedExamName);

  // Create a Map keyed by day and timeSlot for fast lookup
  const scheduleMap = new Map<string, ScheduleItem>();
  classTimetable?.schedule.forEach((item) => {
    scheduleMap.set(`${item.day}-${item.timeSlot}`, item);
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-5xl mx-auto" style={{ minHeight: "650px" }}>
      <h2 className="text-3xl font-semibold mb-6">Timetable</h2>

      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-300">
        <button
          className={`py-2 px-6 font-semibold ${
            activeTab === "class"
              ? "border-b-4 border-green-500 text-green-600"
              : "text-gray-600 hover:text-green-600"
          }`}
          onClick={() => {
            setActiveTab("class");
            setShowExamTimetable(false);
          }}
        >
          Class Timetable
        </button>
        <button
          className={`py-2 px-6 font-semibold ${
            activeTab === "exam"
              ? "border-b-4 border-green-500 text-green-600"
              : "text-gray-600 hover:text-green-600"
          }`}
          onClick={() => {
            setActiveTab("exam");
            setShowExamTimetable(false);
          }}
        >
          Exam Timetable
        </button>
      </div>

      {activeTab === "class" && (
        <div className="overflow-auto">
          {!classTimetable ? (
            <p className="text-red-500">
              No timetable found for your class and section ({classKey})
            </p>
          ) : (
            <>
              <p className="mb-3 font-medium">
                Class Teacher: <span className="font-normal">{classTimetable.classTeacher}</span>
              </p>

              <table className="w-full min-w-max border border-gray-300 rounded table-fixed">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-gray-300 py-2 px-3 sticky left-0 bg-green-100 z-10">Day / Time</th>
                    {timeSlots.map((slot) => (
                      <th key={slot} className="border border-gray-300 py-2 px-3 text-center">
                        {slot}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) => (
                    <tr key={day} className="hover:bg-green-50">
                      <td className="border border-gray-300 py-2 px-3 font-semibold sticky left-0 bg-white z-10">
                        {day}
                      </td>
                      {timeSlots.map((slot) => {
                        const sched = scheduleMap.get(`${day}-${slot}`);
                        const isBreakOrLunch =
                          sched?.subject.toLowerCase() === "break" || sched?.subject.toLowerCase() === "lunch";
                        return (
                          <td
                            key={slot}
                            className={`border border-gray-300 py-2 px-3 text-center ${
                              isBreakOrLunch ? "bg-yellow-50 font-semibold" : ""
                            }`}
                            title={sched ? `${sched.subject} - ${sched.teacher}` : ""}
                          >
                            {sched?.subject || "-"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}

      {activeTab === "exam" && (
        <div>
          {examsForClass.length === 0 ? (
            <p className="text-red-500">No exam timetables available for your class.</p>
          ) : (
            <>
              <div className="mb-4 flex items-center gap-4">
                <select
                  className="border border-gray-300 rounded px-3 py-2"
                  value={selectedExamName}
                  onChange={(e) => setSelectedExamName(e.target.value)}
                >
                  <option value="">-- Select Exam --</option>
                  {examsForClass.map((exam) => (
                    <option key={exam.examName} value={exam.examName}>
                      {exam.examName}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowExamTimetable(true)}
                  disabled={!selectedExamName}
                  className={`px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  Get
                </button>
              </div>

              <div className="overflow-auto" style={{ maxHeight: "400px" }}>
                {showExamTimetable && selectedExam && (
                  <table className="w-full min-w-max border border-gray-300 rounded table-fixed">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 py-2 px-3 text-left">Date</th>
                        <th className="border border-gray-300 py-2 px-3 text-left">Day</th>
                        <th className="border border-gray-300 py-2 px-3 text-left">Subject</th>
                        <th className="border border-gray-300 py-2 px-3 text-left">Session</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedExam.schedule.map(({ date, day, subject, session }, i) => (
                        <tr key={i} className="hover:bg-green-50">
                          <td className="border border-gray-300 py-2 px-3">{date}</td>
                          <td className="border border-gray-300 py-2 px-3">{day}</td>
                          <td className="border border-gray-300 py-2 px-3">{subject}</td>
                          <td className="border border-gray-300 py-2 px-3">{session}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StuTime;
