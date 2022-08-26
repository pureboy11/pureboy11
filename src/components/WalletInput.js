import { Button, Form, InputGroup, ButtonGroup, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import React, { useState } from 'react';


function WalletInput() {

    const [walletAddress, setWalletAddress] = useState('');
    const [walletType, setWalletType] = useState("wallet type")

    const [show, setShow] = useState(false);



    return (
        <div>
            <InputGroup className="home-btn">
                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title={walletType} id="bg-nested-dropdown">
                        {/* <Dropdown.Item eventKey="1" onClick={() => setWalletType("Wallet Type")}> Wallet Type </Dropdown.Item> */}
                        <Dropdown.Item eventKey="2" onClick={() => setWalletType("Eth")}> Eth </Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={() => setWalletType("Sol")}> Sol </Dropdown.Item>
                        <Dropdown.Item eventKey="4" onClick={() => setWalletType("Klay")}> Klay </Dropdown.Item>
                        <Dropdown.Item eventKey="5" onClick={() => setWalletType("Metamask")}> Metamask </Dropdown.Item>
                        <Dropdown.Item eventKey="6" onClick={() => setWalletType("Coinbase")}> Coinbase </Dropdown.Item>
                        <Dropdown.Item eventKey="7" onClick={() => setWalletType("Etc")}> ETC </Dropdown.Item>
                    </DropdownButton>
                    <Form.Control
                        placeholder="Enter any Wallet Address. We will Find your's."
                        style={{ width: '450px' }}
                        onChange={(e) => { setWalletAddress(e.target.value); }}
                    >
                    </Form.Control>
                    <Button
                        variant="info"
                        onClick={() => setShow(true)}
                    > ✔️ </Button>
                    <Button
                        variant="danger"
                        style={{ backgroundColor: 'orange' }}
                    > ➖ </Button>
                </ButtonGroup>
            </InputGroup>

            {/* <div className="home-desc">
                <h2> Our Goal</h2>
                <Container>
                    <Row>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                    </Row>
                </Container>
            </div>
            <div className="home-desc">
                <h2> Our History</h2>
                <Container>
                    <Row>
                        <Col xs={8}><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                    </Row>
                </Container>
            </div>
            <div className="home-desc">
                <h2> Our Team</h2>
                <Container>
                    <Row>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                        <Col><div className="home-box" /></Col>
                    </Row>
                </Container>
            </div> */}

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Connection success </Modal.Title>
                </Modal.Header>
                <Modal.Body>{walletAddress}</Modal.Body>
            </Modal>
        </div>
    )
};

export default WalletInput;