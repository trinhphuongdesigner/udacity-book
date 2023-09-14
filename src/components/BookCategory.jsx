import React, { useEffect, useState } from 'react';
import { getAll, update } from 'api/BooksAPI';
import BookList from 'components/BooksList';

const BookCategory = (props) => {
  const { categories } = props;
  const [books, setBooks] = useState([]);

  const getAllBook = async () => {
    const response = await getAll();
    setBooks(response);
  };

  useEffect(() => {
    getAllBook();
  }, []);

  const handleBooks = (bookId, shelf) => {
    update(bookId, shelf);

    const newShelf = books.map((item) => {
      const book = { ...item };

      if (book.id === bookId) {
        book.shelf = shelf;
      }

      return book;
    });

    setBooks(newShelf);
  };

  return (
    categories.length > 0 &&
    books.length > 0 &&
    categories.map((category) => {
      if (!category.isDisplay) {
        return null;
      }

      return (
        <div className="bookshelf" key={category.shelf}>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{category.title}</h2>

            <BookList
              handleBooks={handleBooks}
              books={books.filter((item) => item.shelf === category.shelf)}
            />
          </div>
        </div>
      );
    })
  );
};

export default BookCategory;
