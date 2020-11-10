import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item(props) {
  const { id, title, onRemove } = props;
  return (
    <div className="Item" id={id}>
      <div className="Item__title">{title}</div>
      <button className="Item__remove" type="button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

Item.defaultProps = {
  onRemove: () => null,
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default Item;
