
function Student({ students }) {
  return (
    <>
      <h1>Students Data</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>

          <ul>
            <li>Age: {student.age}</li>
            <li>Branch: {student.branch}</li>
          </ul>

          <h4>Subjects</h4>
          <ul>
            {student.subjects.map((subject, index) => (
              <li key={index}>{subject.name}:{subject.marks}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Student;
