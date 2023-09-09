import React from 'react';
import Selection from 'components/selection';
import PropTypes from 'prop-types';

function Book(props) {
  const { name, authors, cover } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: cover,
          }}
        />

        <Selection />
      </div>
      <div className="book-title">{name}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Book;
