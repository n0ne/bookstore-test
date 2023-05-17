import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useAppSelector } from '../../hooks'
import { deleteBook, getBook } from './bookSlice'
import { Button, Col, Row } from 'react-bootstrap';
import { BsTrash, BsFillPencilFill } from "react-icons/bs";

import { useAppDispatch } from '../../hooks'
import { useState } from 'react';
import EditBook from './EditBook';

type BookRowType = {
    id: string
}

function BookRow({id}: BookRowType) {
    const [showEdit, setShowEdit] = useState(false)
    const dispatch = useAppDispatch()
    
    const book = useAppSelector((state) => getBook(state, id!));

    const handleDelete = () => {
        dispatch(deleteBook(id))
    };

    if(showEdit) return <EditBook book={{id, ...book}} close={setShowEdit}/>

  return (
    <>
        <Card>
        <Card.Header>{book.category}</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <Row>
                <Col>
                    <p>
                        <Link href={`/books/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{book.name}</Link> 
                    </p>
                </Col>
                <Col className="d-flex justify-content-end">
                    {`${book.price}$`}
                </Col>
            </Row>
            
            <footer className="blockquote-footer">
                <cite>{book.description}</cite>
            </footer>
            </blockquote>
            <div className="d-flex justify-content-end">
                <Button variant="outline-secondary" style={{marginRight: '10px'}} onClick={() => setShowEdit(true)}>
                    <BsFillPencilFill />
                </Button>
                <Button variant="outline-secondary" onClick={handleDelete}>
                    <BsTrash />
                </Button>
            </div>
        </Card.Body>
        </Card>
        <br />
        </>
  )
}

export default BookRow
