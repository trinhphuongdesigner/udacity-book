/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll, search, update } from 'api/BooksAPI';
import BookList from 'components/BooksList';
import useDebounce from 'utils';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const mappingRes = async () => {
    const questionExist = await getAll();

    const searchRes = await search(searchInput);

    if (!searchRes.error) {
      const addShelf = searchRes.map((item) => {
        const book = { ...item };

        questionExist.forEach((value) => {
          if (value.id === item.id) {
            book.shelf = value.shelf;
          }
        });

        return book;
      });

      setSearchResult(addShelf);
    } else {
      setSearchResult([]);
    }
  };

  useDebounce(
    () => {
      if (searchInput !== '') mappingRes();
    },
    [searchInput],
    300
  );

  const redirectToHome = () => {
    navigate(`/`);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleBooks = (bookId, shelf) => {
    update(bookId, shelf);
  };

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <a href="#" className="close-search" onClick={redirectToHome}>
            Close
          </a>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchInput || ''}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>

      <BookList books={searchResult} handleBooks={handleBooks} />
    </>
  );
}

export default SearchPage;
