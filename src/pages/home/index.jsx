import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BookList from 'components/BooksList';
import { CATEGORIES_OF_BOOKS } from 'constants/index';
import { getAll, update } from 'api/BooksAPI';

import './Home.css';

function HomePage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const getALl = async () => {
    const response = await getAll();

    setBooks(response);
  };

  useEffect(() => {
    getALl();
  }, []);

  const handleBooks = (bookId, shelf) => {
    update(bookId, shelf);

    const newShelf = books.map((item) => {
      if (item.id === bookId) item.shelf = shelf;

      return item;
    });

    setBooks(newShelf);
  };

  const redirectToSearch = () => {
    navigate('/search');
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {CATEGORIES_OF_BOOKS.length > 0 &&
              books.length > 0 &&
              CATEGORIES_OF_BOOKS.map((category) => {
                if (!category.isDisplay) {
                  return null;
                }

                return (
                  <div className="bookshelf" key={category.shelf}>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{category.title}</h2>

                      <BookList
                        handleBooks={handleBooks}
                        books={books.filter(
                          (item) => item.shelf === category.shelf
                        )}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="open-search">
          <button type="button" onClick={redirectToSearch}>
            Add a book
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
