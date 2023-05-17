import Button from 'react-bootstrap/Button';

import { useAppDispatch } from '../../hooks'
import { showAddBook } from '../books/bookSlice'

function AddBtn() {
    
    const dispatch = useAppDispatch()


  const handleShow = () => dispatch(showAddBook());

  return (
    <div className="d-flex justify-content-end">
     
    <Button variant="outline-secondary" onClick={handleShow}>
        Add book
    </Button>
    </div>
  )
}

export default AddBtn
