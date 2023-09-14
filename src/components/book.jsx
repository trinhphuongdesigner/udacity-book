import React from 'react';

import Dropdown from 'components/Dropdown';

export default function Book({ id, title, authors, shelf, imageLinks, updateNewShelf }) {
  const onChangeShelf = (e) => {
    updateNewShelf(id, e.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks?.smallThumbnail})`,
            }}
          />

          <Dropdown handleChangeShelf={onChangeShelf} shelf={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors?.length > 0 && authors.join(',')}
        </div>
      </div>
    </li>
  );
};
