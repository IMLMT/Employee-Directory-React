import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable'
import './App.css';
import employeeList from "./employeeList.json";

function App() {

  const [search, setSearch] = useState('')
  const [empList, setEmpList] = useState(employeeList)

  const sortEmps = () => {
    console.log('sortin...')
    console.log(empList)
    const sortedList = [...empList].sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    setEmpList(sortedList)
  }

  return (
    <div>
      <div className="row center">
        <h1>Employee Directory</h1>
      </div>
      <div className="row center">
        <div className="col-md-4"></div>
        <div className="App col-md-4 center" >
          <br></br>
          <input
            className="input-group input-group-lg"
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="Search For An Employee"
          />
          <br></br><br></br>
          <EmployeeTable
            className="employeeTable"
            sortEmps={sortEmps}
            employeeList={empList}
            search={search}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
