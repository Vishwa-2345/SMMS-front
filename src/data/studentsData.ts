

export interface Teacher {
  name: string;
  mobile: string;
  email: string;
  subject?: string; // for subject teachers
}

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
  classTeacher: Teacher;  // NEW
  subjectTeachers: Teacher[];  // NEW
}

const studentsData: Student[] = [
  {
    id: "S001",
    username: "alice",
    password: "alice123",
    name: "Alice Johnson",
    fatherName: "Robert Johnson",
    motherName: "Emily Johnson",
    mobile: "1234567890",
    email: "alice@example.com",
    className: "10th Grade",
    section: "A",
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
    classTeacher: {
      name: "Mrs. Smith",
      mobile: "9876543210",
      email: "smith@example.com",
    },
    subjectTeachers: [
      { name: "Mr. Johnson", mobile: "8765432109", email: "johnson@example.com", subject: "Science" },
      { name: "Ms. Davis", mobile: "7654321098", email: "davis@example.com", subject: "English" },
    ],
  },

  {
    id: "S002",
    username: "bob",
    password: "bob123",
    name: "Bob Smith",
    fatherName: "John Smith",
    motherName: "Anna Smith",
    mobile: "0987654321",
    email: "bob@example.com",
    className: "9th Grade",
    section: "B",
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
    classTeacher: {
      name: "Mr. Anderson",
      mobile: "9988776655",
      email: "anderson@example.com",
    },
    subjectTeachers: [
      { name: "Mrs. Lee", mobile: "8877665544", email: "lee@example.com", subject: "Math" },
      { name: "Ms. Patel", mobile: "7766554433", email: "patel@example.com", subject: "Science" },
    ],
  },

  // similarly update other students...
];

export default studentsData;
