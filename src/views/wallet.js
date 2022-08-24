import walletdata from '../walletData';
import { useState } from 'react';
import WalletList from '../components/walletlist';
import Carousel from 'react-bootstrap/Carousel';



function Wallet(props) {

    let [wallets] = useState(walletdata);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="wallet-banner">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://188654906-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FxTjPznTD44a3IuB4apWZ%2Fuploads%2FT5Vl5bCVDBk7bjcHSDCF%2FMobile-Banner-(1600x480).jpg?alt=media&token=b5eeb095-92ee-4cea-8590-49c9339d6407"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-3, container" style={{ marginTop : '25px' }}>
                {
                    wallets.map((a, i) => {
                        return (
                            <WalletList wallets={wallets[i]} i={i} key={wallets}></WalletList>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Wallet;




