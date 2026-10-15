import Student from "./Student";

function App() {
  const students = [
    { id: 1, name: "Rahul", age: 21, marks: 85, branch: "CSE" },
    { id: 2, name: "Priya", age: 22, marks: 92, branch: "ECE" },
    { id: 3, name: "Aman", age: 20, marks: 67, branch: "CSE" },
    { id: 4, name: "Sneha", age: 21, marks: 78, branch: "IT" },
    { id: 5, name: "Vikas", age: 23, marks: 55, branch: "ECE" }
  ];

  return (
    <>
      <Student students={students} />
    </>
  );
}

export default App;