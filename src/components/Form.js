import React, { Component } from 'react';
import PropTypes from 'prop-types';
import minLength from '../validations/minLength';
import maxLength from '../validations/maxLength';

import './Form.css';

const MAX_DELAY = 3000;
const MIN_DELAY = 1000;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({ title: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { loading } = this.state;
    if (!loading) {
      this.setState(() => ({ error: null, loading: true }));

      const delay =
        MIN_DELAY + Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY));

      // Simulate a network request with timeout.
      setTimeout(() => {
        const { title } = this.state;

        if (!minLength(10, title)) {
          this.setState(() => ({
            error: 'Title must be at least 10 characters.',
            loading: false,
          }));
        } else if (!maxLength(20, title)) {
          this.setState(() => ({
            error: 'Title can be at most 20 characters.',
            loading: false,
          }));
        } else {
          const { onAdd } = this.props;
          this.setState(() => ({ title: '', loading: false }));
          onAdd({ title });
        }
      }, delay);
    }
  }

  render() {
    const { loading, error, title } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        {loading && <div className="Form__loading">Loading…</div>}
        {error && <div className="Form__error">{error}</div>}
        <label htmlFor="title">
          <span>
            Title: <span>(between 10 and 20 characters)</span>
          </span>
          <input
            disabled={loading}
            id="title"
            type="text"
            className="Form__title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <div className="Form__footer">
          <button className="Form__add" disabled={loading} type="submit">
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  onAdd: () => null,
};

Form.propTypes = {
  onAdd: PropTypes.func,
};

export default Form;
