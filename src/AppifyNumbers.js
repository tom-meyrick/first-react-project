import React from 'react';

let numbers = [1, 2, 3, 4];

const AppifyNumbers = () => (
    <ul className="list-group">
    {numbers.map((number, index) => (
        <li className="list-group-item" key={index}>{number}</li>
    ))}
    </ul>
  );

export default AppifyNumbers;