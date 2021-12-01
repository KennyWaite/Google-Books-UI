import BooksList from "../../Containers/BooksList";
import styles from "./BooksCards.module.scss";

export const BooksCards = ({ book }) => {
    return (
        <div>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail}></img>
        </div>
    );
};
