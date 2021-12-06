import styles from "./Dashboard.module.scss";
import BooksList from "../BooksList";
import { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("JavaScript");

    const getBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`,
        );
        const data = await response.json();
        setBooks(data.items);
    };

    useEffect(() => {
        getBooks();
    }, [search]);

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
            <SearchBar handleSearch={setSearch} />
            <BooksList data={books} />
        </div>
    );
};

export default Dashboard;
