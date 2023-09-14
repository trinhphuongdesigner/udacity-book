import React from 'react';

import { CATEGORIES_OF_BOOKS, SHELF } from 'constants/index';

export default function Dropdown({ shelf, handleChangeShelf }) {
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
