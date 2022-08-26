import { Navbar, Nav, Button, Form, Modal, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogInForm from './logIn';



function TnavBar() {

    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand onClick={() => { navigate('/.') }} className="nav-logo">
                    <img
                        alt=""
                        src={'https://lh3.googleusercontent.com/nmiG_IrtYnLZ9TVCN9RXQiptWGIugtopMAuHhf-K9sr2T1ZVskR1peZoL1zo9QD0Mm9S_6FoGkM84_Ow1ccyDmXLbyeKAFzt1cuM=w600'}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Total NFT
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => { navigate('/auction') }} className="margin-r">Auction </Nav.Link>
                    <Nav.Link onClick={() => { navigate('/mynfts') }} className="margin-r">My NFTs </Nav.Link>
                    <Nav.Link onClick={() => { navigate('/explorer') }} className="margin-r">Explorer </Nav.Link>
                    <Nav.Link onClick={() => { navigate('/wallet') }} className="margin-r">Wallet </Nav.Link>
                    {/* <Nav.Link onClick={() => { navigate('/account') }} className="margin-r">Account </Nav.Link> */}
                </Nav>

                <LogInForm />
                <div className="margin-r" />
                <Button variant="light" onClick={handleShow} style={{ marginRight: '20px' }}>
                    Sign up
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
                                <Form.Label>Example text area</Form.Label>
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
