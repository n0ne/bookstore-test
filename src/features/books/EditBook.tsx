import { ChangeEvent, FormEvent, useState } from 'react';

import Button from 'react-bootstrap/Button';

import { useAppDispatch } from '../../hooks'
import { edit } from '../books/bookSlice'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { FaRegSave } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

type EditBookProps = {
    book: {
        id: string,
        name: string,
        price: number,
        category: string,
        description: string
    },
    close: Function
}

function EditBook({book, close}: EditBookProps) {

    const [validated, setValidated] = useState(false);
    const dispatch = useAppDispatch()

    const { name, category, description, price} = book
    
    const [formValues, setFormValues] = useState({
        name,
        price,
        category,
        description
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity()) {
            const editedBook = {
                id: book.id,
                ...formValues
            }
            dispatch(edit(editedBook))
            close()
        } 
    };

  return (
    <Card>
    <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-2">
            <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Book name</Form.Label>
                    <Form.Control
                        required
                        name='name'
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Col>
            <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Book price</Form.Label>
                    <Form.Control
                        required
                        name='price'
                        type="text"
                        value={formValues.price}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Col>
            <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        required
                        name='category'
                        type="text"
                        value={formValues.category}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Col>
        </Row>
        <Row className="g-2">
            <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        required 
                        as="textarea"
                        name='description'
                        rows={3}
                        value={formValues.description}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Col>
        </Row>
        <div className="d-flex justify-content-end">
            <Button variant="outline-secondary" style={{marginRight: '10px'}} onClick={() => close(false)}>
                <AiOutlineClose />
            </Button>
            <Button type='submit' variant="outline-secondary" >
                <FaRegSave />
            </Button>
        </div>
        </Form>
    </Card.Body>
    </Card>
  )
}

export default EditBook
