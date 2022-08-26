// import React, { useState } from 'react';
import WalletInput from '../components/WalletInput.js';
import { Button, InputGroup } from 'react-bootstrap';

// import { Button } from 'react-bootstrap';

function Home() {
    // const [address, setAddress] = useState(0);


    return (
        <div>
            <div className="home-img">
                <h3 className="home-title">How much NFT assets do you have?</h3>
                <h5 className="home-subtitle"> Check it right now by simply entering wallet address.</h5>
                <WalletInput />
                <InputGroup className="home-btn2">
                    <Button
                        variant="success" style={{ backgroundColor: 'white' }}
                    > ➕ </Button>
                </InputGroup>
                {/* <Button
                    variant="info"
                    className="add-btn"
                    style={{ borderRadius: '50px' }}
                    onClick={() => { setAddress(+1) }}
                >+</Button>
                {address >= 1 ? <WalletInput /> : null} */}
            </div>
            {/* <div className="bg-img" /> */}
            <InputGroup className="home-btn3">
            <Button
                variant="success"
                type="submit"
                size="lg"
            > Explorer </Button>
            </InputGroup>
        </div>
    )
};

export default Home;


