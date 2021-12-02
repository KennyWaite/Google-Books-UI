import styles from "./BooksList.module.scss";
import BooksCards from "../../Components/BooksCards";

const BooksList = ({ data }) => {
    return (
        <div className={styles.bookList}>
            {data.map((book) => {
                return <BooksCards book={book} />;
            })}
        </div>
    );
};

export default BooksList;
