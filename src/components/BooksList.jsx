import React from 'react';
import Book from 'components/Book';
import PropTypes from 'prop-types';

function BookList(props) {
  const { books, handleBooks } = props;

  const updateNewShelf = (bookId, shelf) => {
    if (handleBooks) handleBooks(bookId, shelf);
  };

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.length > 0 &&
          !books?.error &&
          books.map((book) => {
            return (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                imageLinks={book.imageLinks}
                shelf={book.shelf}
                updateNewShelf={updateNewShelf}
              />
            );
          })}
      </ol>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleBooks: PropTypes.func.isRequired,
};

export default BookList;
