import { Button, Card } from 'react-bootstrap';


function Auctionlist() {
    return (
        <>
            <Card className="auction">
                <Card.Header> Minting of the new Bong Bear! <span className="text-r">⏰03:22:11</span>  </Card.Header>
                <Card.Body>
                    <Card.Title>Special Deal </Card.Title>
                    <img
                        src="https://img.seadn.io/files/070b7ca4bb51d07d6b6f776bcb1eed56.jpg?fit=max&w=600"
                        alt="NFT"
                        style={{ width: '10%' }}
                    />
                    <Card.Text>
                        Minting conditions: Holders with more than 10 NFTs only
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.open('https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/66075445032688988859229341194671037535804503065310441849644897884130615754753', '_blank')}>
                        Go to OpesnSea</Button>
                </Card.Body>
            </Card>
        </>
    )
};

export default Auctionlist
