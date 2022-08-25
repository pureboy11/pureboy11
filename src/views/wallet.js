import walletdata from '../walletData';
import { useState } from 'react';
import WalletList from '../components/walletlist';




function Wallet(props) {

    let [wallets] = useState(walletdata);

    return (
        <div className="contentArea">
            <h2 className="main-title"> Wallet Connect</h2>
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




