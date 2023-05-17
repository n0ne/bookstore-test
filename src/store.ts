import { configureStore } from '@reduxjs/toolkit'

import booksReducer from './features/books/bookSlice'

export function makeStore() {
  return configureStore({
    reducer: { 
      books: booksReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
