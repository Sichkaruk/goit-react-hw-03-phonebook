import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { IconContext } from "react-icons";
import { FaRegUserCircle } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { FormContacts, Label, Input, Button } from "./ContactForm.styled";

const INITIAL_VALUE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_VALUE };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onChangeState } = this.props;
    this.setState({ number });
    if (onChangeState(name, number) === "success") this.reset();
  };

  reset = () => {
    this.setState(() => ({ ...INITIAL_VALUE }));
  };

  render() {
    const {
      handleInput,
      handleSubmit,
      state: { name, number },
    } = this;

    return (
      <>
        <FormContacts onSubmit={handleSubmit}>
          <Label htmlFor="inputName">
            <FaRegUserCircle />
            Name
          </Label>

          <Input
            id="inputName"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter contact name"
            required
            onChange={handleInput}
          />

          <Label htmlFor="inputNumber">
            <BsTelephone />
            Number
          </Label>

          <Input
            id="inputNumber"
            type="tel"
            name="number"
            value={number}
            pattern="^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
            onChange={handleInput}
          />

          <Button type="submit" disabled={!name || !number}>
            Add contact
            <IconContext.Provider
              value={{
                color: "#28e528",
                size: "1.3em",
                style: { verticalAlign: "middle", marginLeft: "8px" },
              }}
            >
              <BsPlusCircle />
            </IconContext.Provider>
          </Button>
          <ToastContainer />
        </FormContacts>
      </>
    );
  }
}

export default ContactForm;
