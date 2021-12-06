import styles from "./Dashboard.module.scss";
import BooksList from "../BooksList";
import { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar";

const Dashboard = () => {
    // creating empty state variable
    const [books, setBooks] = useState([]);

    // creating state variable for search terms with default of Javascript
    const [search, setSearch] = useState("JavaScript");

    // fetch function to access API and turn it into json data
    const getBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`,
        );
        const data = await response.json();
        setBooks(data.items);
    };

    // mounts and updates get book whenever there is a change in [search]
    useEffect(() => {
        getBooks();
    }, [search]);

    // initial mount of getBooks
    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className={styles.container}>
            <img
                src="./BookShelf.jpeg"
                className={styles.container__image}
                alt="bookshelf"
            />
            <h2 className={styles.container__header}>
                Search for Google Books
            </h2>
            {/* Searchbar is component and is passing down handleSearch state variable */}
            <SearchBar handleSearch={setSearch} />
            {/* Bookslist is component and is passing down data state variable to be further maniuplated and show data */}
            <BooksList data={books} />
        </div>
    );
};

export default Dashboard;
