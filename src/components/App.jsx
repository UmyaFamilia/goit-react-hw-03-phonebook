import { Component } from 'react';
import { ContactList } from './ContactList/ContactLIst';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addToFilter = word => {
    this.setState(prev => ({
      filter: word,
    }));
  };
  delete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  findNecessary = filterQvery => {
    this.setState(prev => ({
      filter: prev.contacts.filter(e =>
        e.name.toLowerCase().includes(filterQvery.toLowerCase())
      ),
    }));
  };
  createContact = obj => {
    if (this.state.contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name} is already in contacts.`);
      return;
    }
    const newObj = {
      ...obj,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newObj, ...prev.contacts],
    }));
  };
  forContactList = () => {
    let array = [];
    this.state.filter
      ? (array = this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        ))
      : (array = this.state.contacts);
    return array;
  };
  render() {
    return (
      <div className="container">
        <Form createContact={this.createContact} />
        <Filter
          findNecessary={this.findNecessary}
          addToFilter={this.addToFilter}
        />
        <ContactList contacts={this.forContactList()} delete={this.delete} />
      </div>
    );
  }
}
