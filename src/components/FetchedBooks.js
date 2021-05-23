import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { fetchBooks } from "../redux/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.fetchedBooks);
    const loading = useSelector((state) => state.app.loading);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) {
        return <h3>Loading...</h3>;
    }

    const bookTableData = books.map((book) => (
        <Book book={book} key={book.id} />
    ));

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Creator</th>
                <th>Genre</th>
                <th>Created At</th>
                <th>Deleted At</th>
                <th>createdAt</th>
                <th>updatedAt</th>
            </tr>
            {bookTableData}
        </table>
    );
};
