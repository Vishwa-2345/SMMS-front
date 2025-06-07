

export interface Mark {
  subject: string;
  mark: number;
}

export interface AttendanceRecord {
  date: string;
  status: "Present" | "Absent";
}

export interface Student {
  id: string;
  name: string;
  fatherName: string;
  motherName: string;
  mobile: string;
  email: string;
  className: string; // e.g. "10th Grade", "9th Grade"
  photoUrl?: string;
  marks: Mark[];
  attendance: AttendanceRecord[];
}

const studentsData: Student[] = [
  {
    id: "S001",
    name: "Alice Johnson",
    fatherName: "Robert Johnson",
    motherName: "Emily Johnson",
    mobile: "1234567890",
    email: "alice@example.com",
    className: "10th Grade",
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    marks: [
      { subject: "Math", mark: 85 },
      { subject: "Science", mark: 90 },
      { subject: "English", mark: 88 },
    ],
    attendance: [
      { date: "2025-06-01", status: "Present" },
      { date: "2025-06-02", status: "Absent" },
      { date: "2025-06-03", status: "Present" },
    ],
  },
  {
    id: "S002",
    name: "Bob Smith",
    fatherName: "John Smith",
    motherName: "Anna Smith",
    mobile: "0987654321",
    email: "bob@example.com",
    className: "9th Grade",
    photoUrl: "https://randomuser.me/api/portraits/men/42.jpg",
    marks: [
      { subject: "Math", mark: 78 },
      { subject: "Science", mark: 82 },
      { subject: "English", mark: 75 },
    ],
    attendance: [
      { date: "2025-06-01", status: "Present" },
      { date: "2025-06-02", status: "Present" },
      { date: "2025-06-03", status: "Present" },
    ],
  },
  {
    id: "S003",
    name: "Charlie Williams",
    fatherName: "David Williams",
    motherName: "Sophia Williams",
    mobile: "1122334455",
    email: "charlie.w@example.com",
    className: "8th Grade",
    photoUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    marks: [
      { subject: "Math", mark: 92 },
      { subject: "Science", mark: 87 },
      { subject: "English", mark: 90 },
    ],
    attendance: [
      { date: "2025-06-01", status: "Present" },
      { date: "2025-06-02", status: "Present" },
      { date: "2025-06-03", status: "Absent" },
    ],
  },
  {
    id: "S004",
    name: "Diana Green",
    fatherName: "Michael Green",
    motherName: "Laura Green",
    mobile: "2233445566",
    email: "diana.g@example.com",
    className: "11th Grade",
    photoUrl: "https://randomuser.me/api/portraits/women/47.jpg",
    marks: [
      { subject: "Math", mark: 89 },
      { subject: "Science", mark: 93 },
      { subject: "English", mark: 85 },
    ],
    attendance: [
      { date: "2025-06-01", status: "Present" },
      { date: "2025-06-02", status: "Present" },
      { date: "2025-06-03", status: "Present" },
    ],
  },
];

export default studentsData;
