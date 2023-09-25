import { Component } from 'react';
import css from './Form.module.css';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleWrite = ({ target: { value, name } }) => {
    this.setState(prev => ({
      [name]: value,
    }));
  };
  handleClick = e => {
    e.preventDefault();

    this.props.createContact(this.state);
  };
  render() {
    return (
      <div className={css.formCover}>
        <form onSubmit={this.handleClick} className={css.form}>
          <label htmlFor="name">name</label>
          <input
            className={css.inpute}
            type="text"
            name="name"
            onChange={this.handleWrite}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="number">number</label>
          <input
            className={css.inpute}
            type="tel"
            name="number"
            onChange={this.handleWrite}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add Contacs</button>
        </form>
      </div>
    );
  }
}
