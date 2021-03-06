import styles from "./BooksCards.module.scss";

export const BooksCards = ({ book, index }) => {
    return (
        <div className={styles.BooksCards}>
            {/* each of the key info wanted to display from book search fetch */}
            <p className={styles.BooksCards}>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
            <img
                src={book.volumeInfo.imageLinks?.thumbnail ?? "#"}
                alt="book cover thumbnail"
            />
        </div>
    );
};
