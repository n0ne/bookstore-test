import { useRouter } from 'next/router';

import { useAppSelector } from '../../hooks'
import { getBook } from '../../features/books/bookSlice'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { IoArrowBackOutline } from "react-icons/io5";

const BookPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const book = useAppSelector((state) => getBook(state, Array.isArray(id) ? id[0] : id!));

  return (
    <Container className="align-items-top justify-content-center" style={{ minHeight: '100vh', marginTop: '75px', minWidth: '50vw'}}>
        <Row>
            <Col>
                <Card>
                    <Card.Header>Book info:</Card.Header>
                    <Card.Body>
                        <Row style={{height: '40px'}}>
                            <Col>
                                Book title:
                            </Col>
                            <Col>
                                {book?.name ?? 'n/a'}
                            </Col>
                        </Row>
                        <Row style={{height: '40px'}}>
                            <Col>
                                Book price
                            </Col>
                            <Col>
                                {book?.price ? `${book?.price}$` : 'n/a'}
                            </Col>
                        </Row>
                        <Row style={{height: '40px'}}>
                            <Col>
                                Book category
                            </Col>
                            <Col>
                                {book?.category ?? 'n/a'}
                            </Col>
                        </Row>
                        <Row style={{height: '40px'}}>
                            <Col>
                                Descriptipn
                            </Col>
                            <Col>
                                {book?.description ?? 'n/a'}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div className="d-flex justify-content-end">
                    <Button variant="outline-secondary" style={{marginTop: '15px'}} onClick={() => router.back()}>
                        <IoArrowBackOutline />
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default BookPage;