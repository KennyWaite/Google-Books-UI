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
        setBooks(data);
    };

    const searchFilter = () => {
        {
            data.filter((book) => {
                return (book = { book });
            });
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <h3>Books List</h3>
            <SearchBar handleSearch={setSearch} />
            <BooksList data={books} />
        </div>
    );
};

export default Dashboard;
