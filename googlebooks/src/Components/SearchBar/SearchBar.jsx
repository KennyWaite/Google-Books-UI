import { useState } from "react";
import styles from "./../SearchBar/SearchBar.module.scss";

export const SearchBar = ({ handleSearch }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        handleSearch(input);
    };

    return (
        <div className={styles.searchbar}>
            <input
                className={styles.search_textArea}
                onChange={handleChange}
                type="text"
                placeholder="Search here"
            />
            <button
                className={styles.search_button}
                onClick={handleClick}
                type="submit">
                Search
            </button>
        </div>
    );
};
