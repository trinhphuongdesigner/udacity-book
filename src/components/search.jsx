import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { toggleSearch } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button type="button" className="close-search" onClick={toggleSearch}>
          Close
        </button>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
}

Search.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
};

// Search.defaultProps = {
//   toggleSearch: () => {},
// };
export default Search;
