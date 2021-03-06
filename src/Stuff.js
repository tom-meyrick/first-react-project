import React, { Fragment } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
// import FadeIn from './FadeIn';

let items = [
  { name: "Coffee", price: 2.1 },
  { name: "Bananas", price: 3.5 },
  { name: "Milk", price: 250.65 },
  { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

const Stuff = ({ square }) => (
  <>
    <Header>Tom</Header>

    <Paragraph>That's All Folks</Paragraph>
    {square ? <Square color="hotpink" /> : null}
    <People names={["Jim", "Mike", "Angela"]} />
    <Basket items={items} />
    {/* <FadeIn time={"500ms"}>Hello</FadeIn> */}
  </>
);

Stuff.defaultProps = {
  square: true,
};

export default Stuff;
