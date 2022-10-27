import { update } from "./BooksAPI";

const Book = ({ bookData, refreshShelfs = () => {}, booksOnShelfs = [] }) => {
  const { title, authors, imageLinks, id, shelf = "" } = bookData;
  const image = imageLinks?.thumbnail;

  const handleChange = (e) => {
    const shelf = e.target.value;
    update(bookData, shelf).then(() => refreshShelfs());
  };

  const shlefName =
    shelf || booksOnShelfs.find((book) => book.id === id)?.shelf || "none";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
          }}
        >
          <img src={image} alt="capa" />
        </div>
        <div className="book-shelf-changer">
          <select onChange={handleChange} defaultValue={shlefName}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{!!title}</div>
      <div className="book-authors">{!!authors}</div>
    </div>
  );
};
export default Book;
