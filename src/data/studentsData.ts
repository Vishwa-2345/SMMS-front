
interface Student {
  id: string;
  name: string;
  fatherName: string;
  motherName: string;
  mobile: string;
  photoUrl?: string;
}

const studentsData: Student[] = [
  {
    id: "S001",
    name: "Vishwa",
    fatherName: "Ramesh",
    motherName: "Saroja",
    mobile: "9876543210",
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "S002",
    name: "Anita",
    fatherName: "Kumar",
    motherName: "Latha",
    mobile: "9123456780",
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "S003",
    name: "Rahul",
    fatherName: "Suresh",
    motherName: "Meena",
    mobile: "9988776655",
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default studentsData;



