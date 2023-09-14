import React from 'react';

import Book from 'components/Book';

export default function BookList({ books, handleBooks }) {
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
                updateNewShelf={handleBooks}
              />
            );
          })}
      </ol>
    </div>
  );
}
