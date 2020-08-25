import React from 'react';

const BasketItem = ({items}) => (
    <>
    { items.map((item, index) => (
        <tr key={ index }><td>{ item.name }</td><td>{ item.price.toFixed(2) }</td></tr>
        ))}
    </>
);

export default BasketItem;