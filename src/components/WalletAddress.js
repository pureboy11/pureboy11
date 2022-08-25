import { Button, Form, InputGroup, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

function WalletAddress() {
   return (
        <div>
            <InputGroup className="home-btn">
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
                    />
                    <Button
                        variant="info"
                        size="lg"
                    > + </Button>
                    <Button
                        variant="danger"
                        size="lg"
                    > - </Button>
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
            </div>
    )
};

export default WalletAddress;


