import Student from "./Student";

function App() {
  const students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    branch: "CSE",
    subjects: [
      { name: "JavaScript", marks: 85 },
      { name: "Java", marks: 90 },
      { name: "DBMS", marks: 78 }
    ]
  },
  {
    id: 2,
    name: "Priya",
    age: 22,
    branch: "ECE",
    subjects: [
      { name: "Maths", marks: 92 },
      { name: "Physics", marks: 88 },
      { name: "Electronics", marks: 95 }
    ]
  },
  {
    id: 3,
    name: "Aman",
    age: 20,
    branch: "CSE",
    subjects: [
      { name: "JavaScript", marks: 67 },
      { name: "Java", marks: 72 },
      { name: "DBMS", marks: 80 }
    ]
  },
  {
    id: 4,
    name: "Sneha",
    age: 21,
    branch: "IT",
    subjects: [
      { name: "HTML", marks: 78 },
      { name: "CSS", marks: 82 },
      { name: "React", marks: 91 }
    ]
  },
  {
    id: 5,
    name: "Vikas",
    age: 23,
    branch: "ECE",
    subjects: [
      { name: "Maths", marks: 55 },
      { name: "Physics", marks: 60 },
      { name: "Electronics", marks: 65 }
    ]
  }
];

  return (
    <>
      <Student students={students} />
    </>
  );
}

export default App;