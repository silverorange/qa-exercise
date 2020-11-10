import React, { useState } from 'react';
import PropTypes from 'prop-types';
import minLength from '../validations/minLength';
import maxLength from '../validations/maxLength';

import './Form.css';

const MAX_DELAY = 3000;
const MIN_DELAY = 1000;

function Form(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!loading) {
      setError(null);
      setLoading(true);

      const delay =
        MIN_DELAY + Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY));

      // Simulate a network request with timeout.
      setTimeout(() => {
        if (!minLength(10, title)) {
          setError('Title must be at least 10 characters.');
          setLoading(false);
        } else if (!maxLength(20, title)) {
          setError('Title can be at most 20 characters.');
          setLoading(false);
        } else {
          const { onAdd } = props;
          setTitle('');
          setLoading(false);
          onAdd({ title });
        }
      }, delay);
    }
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
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
          onChange={handleChange}
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

Form.defaultProps = {
  onAdd: () => null,
};

Form.propTypes = {
  onAdd: PropTypes.func,
};

export default Form;
