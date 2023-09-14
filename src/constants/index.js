export const SHELF = {
  EMPTY: '',
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read',
  NONE: 'none',
};

export const CATEGORIES_OF_BOOKS = [
  {
    title: 'Move to...',
    shelf: SHELF.EMPTY,
    isDisable: true,
    isDisplay: false,
  },
  {
    title: 'None',
    shelf: SHELF.NONE,
    isDisable: false,
    isDisplay: false,
  },
  {
    title: 'Currently Reading',
    shelf: SHELF.CURRENTLY_READING,
    isDisable: false,
    isDisplay: true,
  },
  {
    title: 'Want to Read',
    shelf: SHELF.WANT_TO_READ,
    isDisable: false,
    isDisplay: true,
  },
  {
    title: 'Read',
    shelf: SHELF.READ,
    isDisable: false,
    isDisplay: true,
  },
];
