import React from 'react';
import Book from 'components/book';
import PropTypes from 'prop-types';

function SectionBooks(props) {
  const { title, books } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((item) => (
            <li>
              <Book
                name={item.name}
                authors={item.authors}
                cover={item.cover}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

SectionBooks.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
};

export default SectionBooks;
