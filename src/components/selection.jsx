import React from 'react';
import PropTypes from 'prop-types';

function Selection(props) {
  const { value } = props;

  console.log('««««« value »»»»»', value);

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>
          Move to...
        </option>
        <option
          selected={value === 'currentlyReading'}
          value="currentlyReading"
        >
          Currently Reading
        </option>
        <option selected={value === 'wantToRead'} value="wantToRead">
          Want to Read
        </option>
        <option selected={value === 'read'} value="read">
          Read
        </option>
        <option selected={value === 'none'} value="none">
          None
        </option>
      </select>
    </div>
  );
}

Selection.propTypes = {
  value: PropTypes.string,
};

Selection.defaultProps = {
  value: 'none',
};

export default Selection;
