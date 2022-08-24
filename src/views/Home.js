import { Button, Form, InputGroup, ButtonGroup, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <div className="home-img">
                <h2 className="home-title">How much your NFTs total assets?</h2>
                <h4 className="home-subtitle"> Check it right now with a few simple wallet addresses.</h4>
                <div className="home-btn">
                    <InputGroup>
                        <ButtonGroup>
                            <DropdownButton as={ButtonGroup} title="Wallet Address" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Dropdown link</Dropdown.Item>
                                <Dropdown.Item eventKey="6">Dropdown link</Dropdown.Item>
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


