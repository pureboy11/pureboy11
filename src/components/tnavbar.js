import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function TnavBar() {

    let navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => { navigate('/.') }}>
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
                    |||<Nav.Link onClick={() => { navigate('/auction') }}>Auction</Nav.Link>|||
                    <Nav.Link onClick={() => { navigate('/mynfts') }}>My NFTs</Nav.Link>|||
                    <Nav.Link onClick={() => { navigate('/explorer') }}>Explorer</Nav.Link>|||
                    <Nav.Link onClick={() => { navigate('/wallet') }}>Wallet</Nav.Link>|||
                    <Nav.Link onClick={() => { navigate('/account') }}>Account</Nav.Link>|||
                </Nav>
                <button>login</button>
            </Container>
        </Navbar>
    )
};

export default TnavBar;
