import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    // const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form htmlFor={nanoid(5)} onSubmit={this.handleSubmit}>
          <label htmlFor={nanoid(5)}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={nanoid(5)}>
            Phone
            <input
              type="tel"
              value={number}
              name="number"
              required
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}
