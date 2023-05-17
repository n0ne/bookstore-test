import { ChangeEvent, useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import { useAppDispatch, useAppSelector } from '../../hooks'
import { showAddBookModal, hideAddBook, add } from '../books/bookSlice'
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegSave } from 'react-icons/fa';

function AddBookModal() {
    const dispatch = useAppDispatch()
    const showModal = useAppSelector(showAddBookModal);

    const [validated, setValidated] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        price: 0,
        category: '',
        description: ''
    });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

      const clearUp = () => {
        setFormValues({
            name: '',
            price: 0,
            category: '',
            description: ''
        })
      }

      const handleClose = () => {
        clearUp()
        setValidated(false);
        dispatch(hideAddBook())
    };

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (form.checkValidity()) {
            console.log('Submit form!')
            console.log(formValues)
            dispatch(add(formValues))
            handleClose()
        } 
    };
      

  return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <div className="d-flex justify-content-end">
                <Button variant="outline-secondary" style={{marginRight: '10px'}} onClick={handleClose}>
                    <AiOutlineClose />
                </Button>
                <Button type='submit' variant="outline-secondary" >
                    <FaRegSave />
                </Button>
            </div>
        </Form>
        </Modal.Body>
      </Modal>
  )
}

export default AddBookModal
