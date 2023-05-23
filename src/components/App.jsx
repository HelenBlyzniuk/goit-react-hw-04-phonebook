import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('myContacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const addNumber = ({ name, number }) => {
    const isContact = contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContact.length > 0) {
      alert('The contact has already existed');
      return;
    } else {
      const contact = {
        name,
        number,
        id: nanoid(),
      };

      setContacts([contact, ...contacts]);
    }
  };

  const removeContact = id => {
    const removedContact = contacts.filter(contact => contact.id !== id);

    setContacts([...removedContact]);
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 30,
        color: 'grey',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addNumber} />

      <h2>Contacts</h2>

      <Filter value={filter} onFilterChange={onFilterChange} />
      <ContactList contacts={visibleContacts} getId={removeContact} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addNumber = ({ name, number }) => {
//     const isContact = this.state.contacts.filter(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isContact.length > 0) {
//       alert('The contact has already existed');
//       return;
//     } else {
//       const contact = {
//         name,
//         number,
//         id: nanoid(),
//       };

//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//   };

//   removeContact = id => {
//     const removedContact = this.state.contacts.filter(
//       contact => contact.id !== id
//     );

//     this.setState({
//       contacts: [...removedContact],
//     });
//   };

//   onFilterChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('myContacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('myContacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   render() {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'block',
//           width: '600px',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//           fontSize: 30,
//           color: 'grey',
//         }}
//       >
//         <h1>Phonebook</h1>

//         <ContactForm onSubmit={this.addNumber} />

//         <h2>Contacts</h2>

//         <Filter
//           value={this.state.filter}
//           onFilterChange={this.onFilterChange}
//         />
//         <ContactList contacts={visibleContacts} getId={this.removeContact} />
//       </div>
//     );
//   }
// }
