

export interface Staff {
  id: string;
  name: string;
  gender: "Male" | "Female" | "Other";
  department: string;
  designation: string;
  contact: string;
  email: string;
  address: string;
  salary: string;
  absentDays: string;
  attendance: string;
  qualification: string;
  subjects: string;
  photoUrl?: string;

  // Added fields for login
  username: string;
  password: string;
}
 
const staffData: Staff[] = [
  {
    id: "ST001",
    name: "Ravi Kumar",
    gender: "Male",
    department: "Mathematics",
    designation: "Senior Lecturer",
    contact: "9876543210",
    email: "ravi.kumar@example.com",
    address: "123 Main Street, Delhi",
    salary: "50000",
    absentDays: "2",
    attendance: "98%",
    qualification: "M.Sc. Mathematics",
    subjects: "Algebra, Calculus",
    photoUrl: "https://via.placeholder.com/100x100.png?text=Ravi",
    username: "ravi",
    password: "ravi123"
  },
  {
    id: "ST002",
    name: "Anjali Sharma",
    gender: "Female",
    department: "Science",
    designation: "Assistant Professor",
    contact: "9876501234",
    email: "anjali.sharma@example.com",
    address: "45 Green Avenue, Mumbai",
    salary: "48000",
    absentDays: "1",
    attendance: "99%",
    qualification: "M.Sc. Physics",
    subjects: "Physics, Chemistry",
    photoUrl: "https://via.placeholder.com/100x100.png?text=Anjali",
    username: "anjali",
    password: "anjali123"
  },
  {
    id: "ST003",
    name: "Vikas Mehta",
    gender: "Male",
    department: "Computer Science",
    designation: "Lab Assistant",
    contact: "9876009988",
    email: "vikas.mehta@example.com",
    address: "78 Tech Road, Bangalore",
    salary: "35000",
    absentDays: "3",
    attendance: "95%",
    qualification: "B.Sc. Computer Science",
    subjects: "Networking, Hardware",
    photoUrl: "https://via.placeholder.com/100x100.png?text=Vikas",
    username: "vikas",
    password: "vikas123"
  },
  {
    id: "ST004",
    name: "Sunita Joshi",
    gender: "Female",
    department: "English",
    designation: "Lecturer",
    contact: "9876541111",
    email: "sunita.joshi@example.com",
    address: "56 Oak Street, Pune",
    salary: "46000",
    absentDays: "0",
    attendance: "100%",
    qualification: "M.A. English",
    subjects: "English Literature, Grammar",
    photoUrl: "https://via.placeholder.com/100x100.png?text=Sunita",
    username: "sunita",
    password: "sunita123"
  },
  {
    id: "ST005",
    name: "Manoj Patel",
    gender: "Male",
    department: "History",
    designation: "Senior Lecturer",
    contact: "9876542222",
    email: "manoj.patel@example.com",
    address: "89 Maple Avenue, Chennai",
    salary: "51000",
    absentDays: "1",
    attendance: "99%",
    qualification: "M.A. History",
    subjects: "Ancient History, Modern History",
    photoUrl: "https://via.placeholder.com/100x100.png?text=Manoj",
    username: "manoj",
    password: "manoj123"
  },
];

export default staffData;
