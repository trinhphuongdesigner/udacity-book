import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BookList from 'components/BooksList';
import useDebounce from 'utils';
import { getAll, search, update } from 'api/BooksAPI';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const mappingRes = async () => {
    const results = await getAll();

    const searchRes = await search(searchInput);

    if (!searchRes.error) {
      const addShelf = searchRes.map((item) => {
        results.forEach((value) => {
          if (value.id === item.id) {
            item.shelf = value.shelf;
          }
        });

        return item;
      });

      setSearchResult(addShelf);
    } else {
      setSearchResult([]);
    }
  };

  useDebounce(() => {
    if (searchInput !== '') mappingRes()
  }, [searchInput], 100);

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
          <a href="" className="close-search" onClick={() => navigate(`/`)}>
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
