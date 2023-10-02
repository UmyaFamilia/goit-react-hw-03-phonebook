import css from './ContactList.module.css';
import { Component } from 'react';
export class ContactList extends Component {
  render() {
    return (
      <>
        <h4>Contacts:</h4>
        <ul>
          {this.props.contacts.map(a => (
            <li key={a.id} className={css.number}>
              {`name:  ${a.name} number:  ${a.number}`}
              <button
                onClick={() => this.props.delete(a.id)}
                className={css.button}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
