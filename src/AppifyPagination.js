import React from 'react';

let numbers = [1, 2, 3, 4];

const AppifyPagination = () => (
    <ul className="pagination mt-4">
    {numbers.map((page, index) => (
        <li className="page-item" key={index}>
            <a className="page-link" href={"/page/" + page}>{page}</a>
        </li>
    ))}
    </ul>
  );

export default AppifyPagination;