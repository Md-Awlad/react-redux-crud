import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Loves Bangladesh", author: "Awlad" },
    { id: 2, title: "Bangladeshi", author: "Awlad" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExit = state.books.filter((book) => book.id === id);
      if (isBookExit) {
        isBookExit[0].title = title;
        isBookExit[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
