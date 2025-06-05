// // // src/data/classData.ts
// // export interface Student {
// //   id: string;
// //   name: string;
// // }

// // export interface ClassData {
// //   class: string;
// //   section: string;
// //   teacherName: string;
// //   teacherId: string;
// //   students: Student[];
// // }

// // const classData: ClassData[] = [
// //   {
// //     class: "1",
// //     section: "A",
// //     teacherName: "Mrs. Priya",
// //     teacherId: "T101",
// //     students: [
// //       { id: "S001", name: "Arjun" },
// //       { id: "S002", name: "Divya" },
// //     ],
// //   },
// //   {
// //     class: "2",
// //     section: "B",
// //     teacherName: "Mr. Ravi",
// //     teacherId: "T102",
// //     students: [
// //       { id: "S003", name: "Kumar" },
// //       { id: "S004", name: "Sneha" },
// //     ],
// //   },
// // ];

// // export default classData;

// // src/data/classData.ts
// export interface Student {
//   id: string;
//   name: string;
// }

// export interface ClassData {
//   class: string;    // e.g. "LKG", "1st", "2nd", ... "12th"
//   section: string;  // "A", "B", or "C"
//   classTeacher: string;
//   students: Student[];
// }

// const classData: ClassData[] = [
//   {
//     class: "LKG",
//     section: "A",
//     classTeacher: "Mrs. Anita Sharma",
//     students: [
//       { id: "LKG-A-01", name: "Riya Singh" },
//       { id: "LKG-A-02", name: "Arjun Patel" },
//     ],
//   },
//   {
//     class: "LKG",
//     section: "B",
//     classTeacher: "Mr. Sanjay Kumar",
//     students: [
//       { id: "LKG-B-01", name: "Meera Joshi" },
//       { id: "LKG-B-02", name: "Aditya Rao" },
//     ],
//   },
//   {
//     class: "LKG",
//     section: "C",
//     classTeacher: "Ms. Neha Verma",
//     students: [
//       { id: "LKG-C-01", name: "Kabir Khan" },
//       { id: "LKG-C-02", name: "Ananya Das" },
//     ],
//   },
//   {
//     class: "1st",
//     section: "A",
//     classTeacher: "Mrs. Kavita Singh",
//     students: [
//       { id: "1A-01", name: "Siddharth Gupta" },
//       { id: "1A-02", name: "Aarav Mehta" },
//     ],
//   },
//   {
//     class: "1st",
//     section: "B",
//     classTeacher: "Mr. Rajesh Iyer",
//     students: [
//       { id: "1B-01", name: "Diya Sharma" },
//       { id: "1B-02", name: "Rahul Verma" },
//     ],
//   },
//   {
//     class: "1st",
//     section: "C",
//     classTeacher: "Ms. Pooja Nair",
//     students: [
//       { id: "1C-01", name: "Sneha Reddy" },
//       { id: "1C-02", name: "Karan Singh" },
//     ],
//   },
//   // Add more classes similarly (2nd to 12th)
//   {
//     class: "2nd",
//     section: "A",
//     classTeacher: "Mrs. Sunita Joshi",
//     students: [
//       { id: "2A-01", name: "Manish Kumar" },
//       { id: "2A-02", name: "Rohit Sharma" },
//     ],
//   },
//   {
//     class: "2nd",
//     section: "B",
//     classTeacher: "Mr. Amit Patel",
//     students: [
//       { id: "2B-01", name: "Nisha Gupta" },
//       { id: "2B-02", name: "Aakash Sharma" },
//     ],
//   },
//   {
//     class: "2nd",
//     section: "C",
//     classTeacher: "Ms. Rekha Singh",
//     students: [
//       { id: "2C-01", name: "Sonal Mehta" },
//       { id: "2C-02", name: "Vikram Das" },
//     ],
//   },
//   {
//     class: "12th",
//     section: "A",
//     classTeacher: "Mr. Anil Kumar",
//     students: [
//       { id: "12A-01", name: "Kavya Sharma" },
//       { id: "12A-02", name: "Rohan Jain" },
//     ],
//   },
//   {
//     class: "12th",
//     section: "B",
//     classTeacher: "Mrs. Neeta Shah",
//     students: [
//       { id: "12B-01", name: "Tarun Mehta" },
//       { id: "12B-02", name: "Sanya Patel" },
//     ],
//   },
//   {
//     class: "12th",
//     section: "C",
//     classTeacher: "Ms. Swati Rao",
//     students: [
//       { id: "12C-01", name: "Aditya Verma" },
//       { id: "12C-02", name: "Naina Singh" },
//     ],
//   },
// ];

// export default classData;

// src/data/classData.ts
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
    teacherName: "Mrs. Kavita Singh",
    students: [
      { id: "LKG-A-01", name: "Riya Singh" },
      { id: "LKG-A-02", name: "Arjun Patel" },
    ],
  },
  {
    className: "1st",
    section: "B",
    teacherName: "Mr. Rajesh Iyer",
    students: [
      { id: "1B-01", name: "Diya Sharma" },
      { id: "1B-02", name: "Siddharth Gupta" },
    ],
  },
  {
    className: "12th",
    section: "A",
    teacherName: "Mrs. Anita Sharma",
    students: [{ id: "12A-01", name: "Kavya Sharma" }],
  },
  // Add more classes and sections as needed
];

export default classData;
