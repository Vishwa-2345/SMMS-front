


export interface Student {
  id: string;
  name: string;
}

export interface ClassSection {
  className: string;
  section: string;
  teacherName: string;
  students: Student[];
}

const classData: ClassSection[] = [
  {
    className: "LKG",
    section: "A",
    teacherName: "Mrs. Priya",
    students: [
      { id: "LKG-A-01", name: "Riya Singh" },
      { id: "LKG-A-02", name: "Arjun Patel" },
    ],
  },
  {
    className: "LKG",
    section: "B",
    teacherName: "Mr. Arjun",
    students: [
      { id: "LKG-B-01", name: "Meera Joshi" },
      { id: "LKG-B-02", name: "Aditya Rao" },
    ],
  },
  {
    className: "1st",
    section: "A",
    teacherName: "Ms. Kavya",
    students: [
      { id: "1A-01", name: "Siddharth Gupta" },
      { id: "1A-02", name: "Aarav Mehta" },
    ],
  },
  {
    className: "1st",
    section: "B",
    teacherName: "Mr. Sharma",
    students: [
      { id: "1B-01", name: "Diya Sharma" },
      { id: "1B-02", name: "Rahul Verma" },
    ],
  },
  {
    className: "2nd",
    section: "A",
    teacherName: "Mrs. Priya",
    students: [
      { id: "2A-01", name: "Manish Kumar" },
      { id: "2A-02", name: "Rohit Sharma" },
    ],
  },
  {
    className: "2nd",
    section: "B",
    teacherName: "Mr. Arjun",
    students: [
      { id: "2B-01", name: "Nisha Gupta" },
      { id: "2B-02", name: "Aakash Sharma" },
    ],
  },
  {
    className: "12th",
    section: "A",
    teacherName: "Ms. Kavya",
    students: [
      { id: "12A-01", name: "Kavya Sharma" },
      { id: "12A-02", name: "Rohan Jain" },
    ],
  },
  {
    className: "12th",
    section: "B",
    teacherName: "Mr. Sharma",
    students: [
      { id: "12B-01", name: "Tarun Mehta" },
      { id: "12B-02", name: "Sanya Patel" },
    ],
  },
];

export default classData;

