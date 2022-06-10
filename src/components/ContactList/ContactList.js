import React, { Component } from "react";

import {
  ContactsList,
  ContactItem,
  ContactNote,
  Link,
  ContactNoteItem,
} from "./../ContactList/ContactList.styled";

import { Button } from "./../ContactForm/ContactForm.styled";
import { IconContext } from "react-icons";
import { AiOutlineMinusCircle } from "react-icons/ai";

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    let filterContacts = contacts;
    if (filter) {
      filterContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );
    }
    return (
      <ContactsList>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactNote>
              <ContactNoteItem>{name}:</ContactNoteItem>
              <Link href={"tel:+" + parseInt(number.replace(/\D+/g, ""))}>
                {number}
              </Link>
            </ContactNote>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
              <IconContext.Provider
                value={{
                  size: "1.3em",
                  style: {
                    color: "#ff1c1c",
                    verticalAlign: "middle",
                    marginLeft: "4px",
                  },
                }}
              >
                <AiOutlineMinusCircle />
              </IconContext.Provider>
            </Button>
          </ContactItem>
        ))}
      </ContactsList>
    );
  }
}

export default ContactList;
