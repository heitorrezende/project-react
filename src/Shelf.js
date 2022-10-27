import Book from "./Book";

const Shelf = ({ books, shelfName, refreshShelfs }) => {
  const booksOnShelf = books?.filter((book) => {
    return book.shelf === shelfName;
  });
  if (booksOnShelf.length === 0) return null;
  return booksOnShelf.map((book, index) => (
    <li key={index}>
      <Book bookData={book} refreshShelfs={refreshShelfs} />
    </li>
  ));
};
export default Shelf;
