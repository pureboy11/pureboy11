import './App.css';
import { useState } from 'react';
import {Container, Navbar, Nav, Card, ListGroup, Button, Badge, ButtonGroup, ToggleButton, Toast, ToastContainer} from 'react-bootstrap';
import nfts from './nftData.js';


function App() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Newest NFT', value: '1' },
    { name: 'Highest Price', value: '2' },
    { name: 'Increase in Value', value: '3' }
  ];


  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
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
            |||<Nav.Link href="#home">Home</Nav.Link>|||
            <Nav.Link href="#mynfts">My NFTs</Nav.Link>|||
            <Nav.Link href="#explorer">Explorer</Nav.Link>|||
            <Nav.Link href="#wallet">Wallet</Nav.Link>|||
            <Nav.Link href="#account">Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="main-img">
        <ToastContainer className="totalPrice">
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Latest Total Value</strong>
              <small>05.03.2022</small>
            </Toast.Header>
            <Toast.Body>
              <big style={{fontSize : '20px', fontWeight: 'bolder'}}>14.21 ETH</big>
              <br></br>
              <small> 1,324 $</small>
            </Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Latest News</strong>
            </Toast.Header>
            <Toast.Body>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Toast.Body>
          </Toast>
        </ToastContainer>
    </div>
      <ButtonGroup className="mb-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
            <div className="filter">▼</div>
          </ToggleButton>
        ))}
      </ButtonGroup>


    <div className="container">
      <div className="row" style={{ marginTop: '20px'}}>
        {
          nfts.map((a, i) => {
            return (
              <NftList nfts={nfts[i]} i={i}></NftList>
            )
          })
        }
      </div>
    </div>
  </>
  );
}

function NftList(props) {
  return (
    <div className="col-md-3">
      <Card style={{ width: '18rem', margin: '1rem'}}>
        <Card.Img variant="top" src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg'} />
        <Card.Body>
          <Card.Title>
            {props.nfts.title}
            <Badge bg="secondary" style={{ display: 'inline-block', float: 'right' }}>New</Badge>
          </Card.Title>
          <Card.Text>
            {props.nfts.content}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Floor price : 0.194 ETH</ListGroup.Item>
          <ListGroup.Item>Last sale price : {props.nfts.price}</ListGroup.Item>
          <ListGroup.Item>Estimated price :  0.0952 ETH</ListGroup.Item>
          <ListGroup.Item> 135% increase from last week  </ListGroup.Item>
        </ListGroup>
        <div className="CenterBtn">
          <Button variant="primary">Go to Market</Button>
        </div>
        <Card.Body style={{ textAlign : 'center' }}>
          <Card.Link href="#">Price Graph</Card.Link>
          <Card.Link href="#">EtherScan</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
