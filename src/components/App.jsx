import React, { Component } from 'react';
import Section from './Section/';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkDouble = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  handleSubmit = ({ name, number }) => {
    if (this.checkDouble(name)) return alert(`${name} is already in contacts`);
    this.setState(prs => ({
      contacts: [...prs.contacts, { name, number, id: nanoid(5) }],
    }));
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    // const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filterFind = () => {
    return this.state.contacts.filter(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase()) &&
        this.state.contacts
    );
  };

  delContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { handleSubmit, handleChange, filterFind, delContact } = this;
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onHandleSubmit={handleSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter filter={this.state.filter} onHandleChange={handleChange} />
          <Contacts contacts={filterFind()} deleteContact={delContact} />
        </Section>
      </div>
    );
  }
}
