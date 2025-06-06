

// export interface StudentBasic {
//   id: string;
//   name: string;
// }

// export interface ClassSection {
//   className: string; // e.g. "LKG", "1st", "2nd", ... "12th"
//   section: string;   // e.g. "A", "B", "C"
//   teacherName: string;
//   students: StudentBasic[];
// }

// const classData: ClassSection[] = [
//   {
//     className: "LKG",
//     section: "A",
//     teacherName: "Mrs. Kavita Singh",
//     students: [
//       { id: "LKG-A-01", name: "Riya Singh" },
//       { id: "LKG-A-02", name: "Arjun Patel" },
//     ],
//   },
//   {
//     className: "LKG",
//     section: "B",
//     teacherName: "Mr. Sanjay Kumar",
//     students: [
//       { id: "LKG-B-01", name: "Meera Joshi" },
//       { id: "LKG-B-02", name: "Aditya Rao" },
//     ],
//   },
//   {
//     className: "1st",
//     section: "A",
//     teacherName: "Mrs. Kavita Sharma",
//     students: [
//       { id: "1A-01", name: "Siddharth Gupta" },
//       { id: "1A-02", name: "Aarav Mehta" },
//     ],
//   },
//   {
//     className: "1st",
//     section: "B",
//     teacherName: "Mr. Rajesh Iyer",
//     students: [
//       { id: "1B-01", name: "Diya Sharma" },
//       { id: "1B-02", name: "Siddharth Gupta" },
//     ],
//   },
//   {
//     className: "2nd",
//     section: "A",
//     teacherName: "Mrs. Sunita Joshi",
//     students: [
//       { id: "2A-01", name: "Manish Kumar" },
//       { id: "2A-02", name: "Rohit Sharma" },
//     ],
//   },
//   {
//     className: "8th",
//     section: "A",
//     teacherName: "Mr. David Williams",
//     students: [
//       { id: "8A-01", name: "Charlie Williams" },
//       { id: "8A-02", name: "Nina Thomas" },
//     ],
//   },
//   {
//     className: "9th",
//     section: "B",
//     teacherName: "Mrs. Anna Smith",
//     students: [
//       { id: "9B-01", name: "Bob Smith" },
//       { id: "9B-02", name: "Lara Croft" },
//     ],
//   },
//   {
//     className: "10th",
//     section: "A",
//     teacherName: "Mr. Robert Johnson",
//     students: [
//       { id: "10A-01", name: "Alice Johnson" },
//       { id: "10A-02", name: "Mark Twain" },
//     ],
//   },
//   {
//     className: "11th",
//     section: "A",
//     teacherName: "Mrs. Laura Green",
//     students: [
//       { id: "11A-01", name: "Diana Green" },
//       { id: "11A-02", name: "Kevin Hart" },
//     ],
//   },
//   {
//     className: "12th",
//     section: "A",
//     teacherName: "Mrs. Anita Sharma",
//     students: [
//       { id: "12A-01", name: "Kavya Sharma" },
//     ],
//   },
//   {
//     className: "12th",
//     section: "B",
//     teacherName: "Mrs. Neeta Shah",
//     students: [
//       { id: "12B-01", name: "Tarun Mehta" },
//       { id: "12B-02", name: "Sanya Patel" },
//     ],
//   },
// ];

// export default classData;


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

