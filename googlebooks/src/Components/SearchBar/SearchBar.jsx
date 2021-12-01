import { useState } from "react";

export const SearchBar = ({ handleSearch }) => {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        console.log(input);
        handleSearch(input);
    };

    return (
        <div>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Search here"></input>
            <button onClick={handleClick} type="submit">
                Search
            </button>
        </div>
    );
};
