// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <List> component that consists of a list group, an input, and an "Add" button. When you click the button, whatever is in the input should get added to the list group.
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "", list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ todo: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ todo: "", list: [...this.state.list, this.state.todo] });
  }

  render() {
    const { todo, list } = this.state;
    return (
      <div className="form-group">
        <ListGroup as="ul">
          {list.map((todo, index) => (
            <ListGroup.Item as="li" key={index}>
              {todo}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form.Group>
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={todo}
            onChange={this.handleChange}
          />
          <Button onClick={this.handleClick}>Add</Button>
        </Form.Group>
      </div>
    );
  }
}

export default List;
