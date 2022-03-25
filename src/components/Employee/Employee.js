import React from 'react';
import './Employee.css';
import { FaRegHandshake } from 'react-icons/fa';
const Employee = (props) => {
    // console.log(props.employee);
    const { name, img, category, salary } = props.employee;
    return (
        <div className='employee'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Category: {category}</h5>
            <p>Salary: ${salary}</p>
            <button
                onClick={() => props.handleCalculation(props.employee)}
                className='employee-btn'><p> Hire Me </p><FaRegHandshake className='icon' />
            </button>
        </div>
    );
};

export default Employee;