import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({items}) => (
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
       <BasketItem items={items} />
  </tbody>
</table>
);

export default Basket;