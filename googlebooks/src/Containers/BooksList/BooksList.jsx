import styles from "./BooksList.module.scss";
import BooksCards from "../../Components/BooksCards";

const BooksList = ({ data }) => {
    return (
        <div className={styles.bookList}>
            {data.map((book, index) => {
                return <BooksCards book={book} index={index} />;
            })}
        </div>
    );
};

export default BooksList;
