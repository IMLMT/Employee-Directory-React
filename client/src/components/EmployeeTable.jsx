import React from 'react'

const EmployeeTable = props => {
    console.log(props.search)
    console.log(props.employeeList)
    function filter(employee){
        return(
            employee.name.includes(props.search)
        )
    }

    
    const makeEmpRows = () => {
        return props.employeeList.filter(filter).map(emp=>{
            return (
                <tr key={emp.name}>
                    <td>{emp.name}</td>
                    <td>{emp.job}</td>
                    <td>{emp.pay}</td>
                </tr>
            )
        })
    }
    return (
        <table className="table">
            <thead className="tableHead">
                <tr>
                <td onClick={props.sortEmps}>Name</td>
                <td>Position</td>
                <td>Pay (in thousands)</td>
                </tr>
            </thead>
            <tbody>

            { makeEmpRows() }
            </tbody>
        </table>
    )
}

export default EmployeeTable