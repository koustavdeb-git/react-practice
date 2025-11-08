import React from 'react'
import './Table.css'

const Table = () => {

    const studentData = [
        { id: 1, name: "Rahul", age: 25 },
        { id: 2, name: "Aditi", age: 22 },
        { id: 3, name: "Karan", age: 28 },
    ]


    return (
        <div className='pt-5'>
            This is my table:
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentData.map((eachStudent) => {
                            return (
                                <tr key={eachStudent.id}>
                                    <td>{eachStudent.id}</td>
                                    <td>{eachStudent.name}</td>
                                    <td>{eachStudent.age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
