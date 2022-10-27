import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";
const SearchPage = ({ refreshShelfs, booksOnShelfs }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = async (bookName) => {
    setQuery(bookName);
    await search(bookName, 10)
      .then((response) => {
        if (response.error) return setBooks([]);
        return setBooks(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => searchBook(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length
            ? books.map((book) => (
                <li key={book.id}>
                  {
                    <Book
                      bookData={book}
                      refreshShelfs={refreshShelfs}
                      booksOnShelfs={booksOnShelfs}
                    ></Book>
                  }
                </li>
              ))
            : !!query.length && (
                <h1>Unfortunally we don`t have this book on our libary yet</h1>
              )}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
