import React from 'react';

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]; 

const People = () => (
        <ul className="list">
        {names.map((name, index) => (
            <li className="listitem" key={index}>{name}</li>
        ))}
        </ul>
);

export default People;