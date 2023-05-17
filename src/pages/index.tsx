import Books from '../features/books/Books'
import AddBtn from '../features/books/AddBtn'
import AddBookModal from '../features/modals/AddBookModal'
import { Container } from 'react-bootstrap'

const IndexPage = () => {
  return (
    <Container style={{marginTop: '25px'}}>
        <AddBtn />
        <Books />
        <AddBookModal />
    </Container>
  )
}

export default IndexPage
