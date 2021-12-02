import styles from "./Dashboard.module.scss";
import BooksList from "../BooksList";
import { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [displayedBooks, setDisplayedBooks] = useState([]);

    const getBooks = async () => {
        const response = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q={search terms}",
        );
        const data = await response.json();
        setBooks(data.items);
    };

    const updateBooks = () => {
        setDisplayedBooks(
            books.filter((book) => {
                return book.title.includes(search);
            }),
        );
    };

    // const searchFilter = () => {
    //     {
    //         data.filter((book) => {
    //             return (book = { book });
    //         });
    //     }
    // };

    useEffect(() => {
        updateBooks();
    }, [search, books]);

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className={styles.container}>
            <img
                src="/Users/kennywaite/Desktop/NOLOGY/VSC/Google-Books-UI/googlebooks/src/imgs/BookShelf.jpeg"
                className={styles.container__image}
                alt="bookshelf"></img>
            <h2 className={styles.container__header}>
                Search for Google Books
            </h2>
            <SearchBar handleSearch={setSearch} />
            <BooksList data={books} />
        </div>
    );
};

export default Dashboard;
