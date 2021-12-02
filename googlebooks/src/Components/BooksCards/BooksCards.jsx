// import BooksList from "../../Containers/BooksList";
import styles from "./BooksCards.module.scss";

export const BooksCards = ({ book }) => {
    return (
        <div className={styles.BooksCards}>
            <p class>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
            <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book cover thumbnail"></img>
        </div>
    );
};
