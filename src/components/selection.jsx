import React from 'react';
import { CATEGORIES_OF_BOOKS } from 'constants/book';
import PropTypes from 'prop-types';

function Selection(props) {
  const { shelf, handleChangeShelf } = props;

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChangeShelf} defaultValue={shelf || 'none'}>
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

Selection.propTypes = {
  shelf: PropTypes.string,
  handleChangeShelf: PropTypes.func.isRequired,
};

Selection.defaultProps = {
  shelf: 'none',
};

export default Selection;
