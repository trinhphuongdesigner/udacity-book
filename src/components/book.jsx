import React from 'react';
import Selection from 'components/Selection';
import PropTypes from 'prop-types';

function Book(props) {
  const { id, title, authors, shelf, imageLinks, updateNewShelf } = props;

  const onChangeShelf = (e) => {
    if (updateNewShelf) updateNewShelf(id, e.target.value);
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

          <Selection handleChangeShelf={onChangeShelf} shelf={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.length > 0 && authors.join(', ')}
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  shelf: PropTypes.string,
  authors: PropTypes.instanceOf(Array),
  imageLinks: PropTypes.instanceOf(Object),
  updateNewShelf: PropTypes.func.isRequired,
};

Book.defaultProps = {
  id: '',
  title: '',
  shelf: '',
  authors: [],
  imageLinks: {},
};

export default Book;
