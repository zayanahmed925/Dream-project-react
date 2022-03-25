import React from 'react';

const Chart = (props) => {
    // console.log(props)
    const { employee } = props;
    // const { name } = employee;

    let cost = 0;
    for (const employ of employee) {
        cost = cost + employ.salary
    }
    const budget = 50000 - cost;
    return (
        <div>
            <h2>Calculation</h2>
            <p>Selected Employee: {employee.length}</p>
            {
                employee.map(employ => <h4>Name: {employ.name}</h4>)
            }
            <p>Total Cost: {cost}</p>
            <p>Budget Remaining: {budget}</p>
        </div>
    );
};

export default Chart;