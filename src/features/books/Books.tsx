import { useAppSelector } from '../../hooks'
import { selectBooksIds } from './bookSlice'
import BookRow from './BookRow';
import Empty from './Empty';


function Books() {
    const bookIds = useAppSelector(selectBooksIds)

    if(!bookIds.length) return <Empty />

  return (
    <div>
      <h1>Books</h1>
        {bookIds.map((id) => (
              <BookRow key={id} id={id} />
        ))}
    </div>
  )
}

export default Books
