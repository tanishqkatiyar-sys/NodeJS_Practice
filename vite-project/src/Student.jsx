function Student({students}){
    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Marks</td>
                        <td>Branch</td>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student)=>{
                        return(
                            <tr key={student.id}>
                                <td>{student.name} </td>
                                <td>{student.age}</td>
                                <td>{student.marks}</td>
                                <td>{student.branch}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
    
}

export default Student