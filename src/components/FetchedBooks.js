import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { fetchBooks } from '../redux/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.fetchedBooks)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }
    return books.map((book) => <Book book={book} key={book.id} />)
};
