import { Container, Navbar, Nav, Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogInForm from './logIn';



function TnavBar() {

    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => { navigate('/.') }} style={{ cursor: 'pointer' }}>
                    {/* <img }
            alt=""
            src="../public/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '*/}
                    Total NFT
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate('/auction') }}>Auction /</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/mynfts') }}>My NFTs /</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/explorer') }}>Explorer /</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/wallet') }}>Wallet /</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/account') }}>Account /</Nav.Link>
                </Nav>

                <LogInForm />
                <div className="margin-r" />

                <Button variant="primary" onClick={handleShow}>
                    Contact Us
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Navbar>
    )
};

export default TnavBar;
