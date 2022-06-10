import React, { Component } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Container } from "./Filter.styled";
import { Input, Label } from "./../ContactForm/ContactForm.styled";

class Filter extends Component {
  handleInput = (e) => {
    const { value } = e.target;
    const { onFilter } = this.props;
    onFilter(value);
  };

  render() {
    const { handleInput } = this;
    return (
      <Container>
        <Label htmlFor="inputFilter">
          <BiFilterAlt />
          Find contacts by name
        </Label>
        <Input
          id="inputFilter"
          type="text"
          name="filter"
          onChange={handleInput}
        ></Input>
      </Container>
    );
  }
}
export default Filter;
