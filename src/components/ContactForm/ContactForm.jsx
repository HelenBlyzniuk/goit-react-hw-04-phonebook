import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled.jsx';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onFormReset();
  };

  onFormReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="...name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="...number"
            onChange={this.handleChange}
            value={this.state.number}
          />
        </FormLabel>
        <FormButton type="submit" onSubmit={this.handleSubmit}>
          Add contact
        </FormButton>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
