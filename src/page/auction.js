import axios from "axios";
import { useEffect } from 'react';
import Auctionlist from "../components/auctionlist";
import {
    InputGroup, Form, Button, ButtonGroup, Dropdown, DropdownButton,
    ButtonToolbar
} from 'react-bootstrap';




function Auction() {
    useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then((response) => console.log(response.data));
    }, []);

    return (
        <>
            <h4 className="auction-title">UPCOMING NFT MINTS!</h4>
            <h2 className="auction-subtitle"> YOU CAN FIND ALL UPCOMING NFTs</h2>


            <ButtonToolbar className="mb-3, auction-filter" aria-label="Toolbar with Button groups">
                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} title="Sort" id="bg-nested-dropdown" className="margin-r">
                        <Dropdown.Item eventKey="1"></Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
                <InputGroup className="margin-r">
                    <InputGroup.Text id="basic-addon1">Finder</InputGroup.Text>
                    <Form.Control
                        placeholder="Search NFT Category or Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ width: '300px' }}
                    />
                </InputGroup>
                <Button variant="info" style={{ marginLeft: '10px' }}>Search</Button>{ }
                <Button variant="danger" style={{ marginLeft: '10px' }}>Reset</Button>{ }
            </ButtonToolbar>


            <Auctionlist />
            <Auctionlist />
            <Auctionlist />
            <Auctionlist />
            <Auctionlist />
            <Auctionlist />


        </ >
    )
};

export default Auction;
