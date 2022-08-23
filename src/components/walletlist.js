import { Card, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

function WalletList(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [address, setAddress] = useState('');
    const onChange = (e) => {
        setAddress(e.target.address)
    };
    const onReset = () => {
        setAddress('');
    };

    return (
        <div className="col-md-3, container">
            <Card className="wallet-icon">
                <Card.Img variant="top" src='metamask.svg' />
                <Card.Text>
                    <div style={{ textAlign: 'center' }}>  <div> Wallet Adress : {address}</div> </div>
                </Card.Text>
                <div className="CenterBtn">
                    <Button variant="primary" onClick={handleShow}>
                        {props.wallets.btnText}

                    </Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Copy & paste your Metamask address.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input placeholder="지갑주소를 입력해주세요" onChange={onChange} style={{ width: '400px' }} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={setAddress} >regist</Button>
                            <Button variant="primary" onClick={onReset} >초기화</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Card.Text style={{ marginTop: '15px', textAlign: 'center' }}> Connected </Card.Text>
            </Card>

        </div>
    )
};

export default WalletList;


