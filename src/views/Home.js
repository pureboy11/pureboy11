import { Button, Form, InputGroup, ButtonGroup, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';



function Home() {
    return (
        <div>
            <div className="home-img">
                <h2 className="home-title">How much NFT assets do you have?</h2>
                <h4 className="home-subtitle"> Check it right now by simply entering wallet address.</h4>
                <div className="home-btn">
                    <InputGroup>
                        <ButtonGroup>
                            <DropdownButton as={ButtonGroup} title="Wallet Address" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">Metamask</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Kaikas</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Coinbase</Dropdown.Item>
                                <Dropdown.Item eventKey="4">ZenGo</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Ronin</Dropdown.Item>
                                <Dropdown.Item eventKey="6">etc</Dropdown.Item>
                            </DropdownButton>

                            <Form.Control
                                placeholder="Enter any Wallet Address. We will Find your's."
                                style={{ width: '500px' }}
                                as="textarea"
                                aria-label="With textarea"
                            />
                            <Button
                                variant="info"
                                size="lg"
                            > check now </Button>
                        </ButtonGroup>
                    </InputGroup>
                </div>
            </div>
            <div className="home-desc">
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
            </div>
        </div>
    )
};

export default Home;


