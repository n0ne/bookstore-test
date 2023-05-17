import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

import type { AppState } from '../../store'

export type Book = {
    name: string,
    price: number,
    category: string,
    description: string
}

export interface BooksState {
  booksId: string[]
  books: {
    [key: string]: Book;
  },
  showAddBook: boolean
}

const initialState: BooksState = {
  booksId: ['1', '2', '3'],
  books: {
    '1': {
        name: 'Book 1',
        price: 22,
        category: 'novels',
        description: 'Some very cool description'
    },
    '2': {
        name: 'Book 2',
        price: 15,
        category: 'novels',
        description: 'Short description'
    },
    '3': {
        name: 'Book 3',
        price: 55,
        category: 'fiction',
        description: 'This is very-very long description for very interesting book!'
    }
  },
  showAddBook: false
}


export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const bookId = uuidv4();
      const book = {
        ...action.payload
      }
      state.booksId.push(bookId)
      state.books = {
        ...state.books,
        [bookId]: book
      }
    },
    edit: (state, action) => {
        const { id, ...book } = action.payload
        state.books[id] = book
    },
    deleteBook: (state, action) => {
        const  id  = action.payload
        state.booksId = state.booksId.filter(bookId => bookId !== id)
        delete state.books[id]
    },
    showAddBook: (state) => {
        state.showAddBook = true
    },
    hideAddBook: (state) => {
        state.showAddBook = false
    },
  },
})

export const { add, edit, deleteBook, showAddBook, hideAddBook } = booksSlice.actions

export const selectBooksIds = (state: AppState) => state.books.booksId
export const selectBooks = (state: AppState) => state.books.books
export const getBook = (state: AppState, id:string)  =>  state.books.books[id];
export const showAddBookModal = (state: AppState) => state.books.showAddBook

export default booksSlice.reducer
