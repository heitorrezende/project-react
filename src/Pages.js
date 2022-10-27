import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { getAll } from "./BooksAPI";
import SearchPage from "./SearchPage";

const Pages = () => {
  const [booksOnShelfs, setBooksOnShelfs] = useState([]);

  useEffect(() => {
    refreshShelfs();
  }, []);

  const refreshShelfs = () =>
    getAll().then((response) => setBooksOnShelfs(response));

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <App booksOnShelfs={booksOnShelfs} refreshShelfs={refreshShelfs} />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <SearchPage
            booksOnShelfs={booksOnShelfs}
            refreshShelfs={refreshShelfs}
          />
        }
      />
    </Routes>
  );
};
export default Pages;
