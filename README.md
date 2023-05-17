# Books store

A small test task, which is an emulation of a bookstore. The application displays a list of books, it is possible to add books, change information about the book, view information about the book. This application does not use a backend, all information is stored in an array and will be lost when the page or application is reloaded.



This application uses the following frameworks and libraries:

1. Next.js
2. Redux/Redux Toolkit
3. Bootstrap/react-bootstrap (sorry)
4. React Icons

### During the execution of the task, I changed its functionality a little:

1. When you click on the "Add book" button, a modal window opens with a form for entering information about the book. Added basic form validation
2. Book information opens on a new page
3. Editing a book takes place on a page with a list of all books, but instead of information about the book, a form for editing appears
4. If the list of books is empty, then a message is displayed about this.

#### To run it localy

1. Clone GitHub repo [Bookstore Task](https://github.com/n0ne/bookstore-test)
2. `cd bookstore-test`
3. `npm install`
4. `npm run rev`
5. Open `http://localhost:3000`
