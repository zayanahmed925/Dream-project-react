import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import Employee from '../Employee/Employee';
import './Employees.css'
const Employess = () => {
    const [employees, setemployees] = useState([])
    const [employee, setemployee] = useState([])
    console.log(employee)

    useEffect(() => {
        fetch('employee.json')
            .then(res => res.json())
            .then(data => setemployees(data))
    }, [])
    const handleCalculation = (employeeId) => {
        // console.log(employee)
        const newEmployee = [...employee, employeeId]
        setemployee(newEmployee)
    }
    return (
        <div className='employees'>
            <div className="employees-container">
                {
                    employees.map(employee => <Employee key={employee.id} employee={employee} handleCalculation={handleCalculation} ></Employee>)
                }

            </div>
            <div className="calculation-container">
                <Chart employee={employee}></Chart>

            </div>
        </div>
    );
};

export default Employess;