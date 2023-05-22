import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListContainer, ListItem, ListButton } from './ContactList.styled.jsx';

export class ContactList extends Component {
  handleClick = e => {
    this.props.getId(e.currentTarget.id);
  };
  render() {
    const { contacts } = this.props;
    return (
      <ListContainer>
        List of contacts
        {contacts.map(({ name, number, id }) => (
          <ListItem id={id} key={id}>
            {name}: {number}
            <ListButton
              type="button"
              className="deleteContact"
              id={id}
              onClick={this.handleClick}
            >
              Delete
            </ListButton>
          </ListItem>
        ))}
      </ListContainer>
    );
  }
}
ContactList.propTypes = {
  getId: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
