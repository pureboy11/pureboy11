import axios from "axios";
import { useEffect } from 'react';
import Auctionlist from "../components/auctionlist";




function Auction() {
    useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then((response) => console.log(response.data));
    }, []);

    return (
        <div className="contentArea">
                <Auctionlist/>
                <Auctionlist/>
                <Auctionlist/>
                <Auctionlist/>
                <Auctionlist/>
                <Auctionlist/>

        </div>
    )
};

export default Auction;
