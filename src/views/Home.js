import React, { useState } from 'react';
import WalletAddress from '../components/WalletAddress.js';
import { Button } from 'react-bootstrap';

function Home() {
    const [address, setAddress] = useState(0);


    return (
        <div>
            <div className="home-img">
                <h2 className="home-title">How much NFT assets do you have?</h2>
                <h4 className="home-subtitle"> Check it right now by simply entering wallet address.</h4>
                <WalletAddress />
                <Button
                    variant="info"
                    className="add-btn"
                    style={{ borderRadius : '50px'}}
                    onClick={ ()=>{ setAddress(+1)}}
                    >+</Button>
                    { address >= 1 ? <WalletAddress /> : null }
            </div>
        </div>
    )
};

export default Home;


