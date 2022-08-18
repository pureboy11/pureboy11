import {Card, ListGroup, Button, Badge} from 'react-bootstrap';

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
  };

  export default NftList;
