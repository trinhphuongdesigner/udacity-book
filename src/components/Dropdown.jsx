import React from 'react';
import { CATEGORIES_OF_BOOKS, SHELF } from 'constants/index';
import PropTypes from 'prop-types';

function Dropdown(props) {
  const { shelf, handleChangeShelf } = props;

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChangeShelf} defaultValue={shelf || SHELF.NONE}>
        {CATEGORIES_OF_BOOKS.map((category) => {
          return (
            <option
              key={category.shelf}
              value={category.shelf}
              disabled={category.isDisable}
            >
              {category.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  shelf: PropTypes.string,
  handleChangeShelf: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  shelf: 'none',
};

export default Dropdown;
