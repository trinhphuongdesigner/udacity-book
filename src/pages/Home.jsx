import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookCategory from 'components/BookCategory';
// import Search from 'components/Search';
import { CATEGORIES_OF_BOOKS } from 'constants/book';

import './Home.css';

function HomePage() {
  const navigate = useNavigate();

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
            <BookCategory categories={CATEGORIES_OF_BOOKS} />
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
