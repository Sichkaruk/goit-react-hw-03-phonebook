import React, { Component } from "react";
import INITIAL_STATE from "./components/data/initial-state.json";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import "react-toastify/dist/ReactToastify.css";
import toastMsg from "./utils/toast";
import { Container, Title, ContactsTitle, Message } from "./App.styled";

class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: [],
  };

  onFilter = (w) => {
    this.setState(() => ({ filter: w.toLowerCase() }));
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  onDelete = (id) => {
    const { contacts } = this.state;
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].id === id) {
        const name = contacts[i].name;
        contacts.splice(i, 1);
        this.alert(name, "info");
        break;
      }
    }
    this.onChangeState(contacts);
  };

  alert = (name, type) => {
    toastMsg(name, type);
  };

  render() {
    const {
      state: { contacts, filter },
      onChangeState,
      onFilter,
      onDelete,
    } = this;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        {contacts.length ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter onFilter={onFilter} />
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={onDelete}
            />
          </>
        ) : (
          <Message>You have no saved contacts</Message>
        )}
      </Container>
    );
  }
}

export default App;
