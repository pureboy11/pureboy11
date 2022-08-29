import './App.css';
import { useState } from 'react';
import nftdata from './nftData.js';
import { Routes, Route, Outlet } from 'react-router-dom';
import TnavBar from './components/tnavbar';
import Detail from './page/detail';
import Home from './page/Home';
import Footer from './components/footer';
import Explorer from './page/explorer';
import Auction from './page/auction';
import Wallet from './page/wallet';
import Account from './page/account';
import MyNfts from './page/mynfts';



function App() {


  let [nfts] = useState(nftdata);

  return (
    <>
      <TnavBar />
      <div className="wrapper">
        <div className='contentWrapper'>
          <Routes>
            <Route path="/mynfts" element={<MyNfts />} />
            <Route path="/" element={<Home />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/wallet" element={<Wallet />}>
              <Route path="metamask" element={<div>metamask</div>} />
              <Route path="kaikas" element={<div>kaikas</div>} />
            </Route>
            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<div>profile</div>} />
              <Route path="setting" element={<div>setting</div>} />
            </Route>
            <Route path="/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail nfts={nfts} />} />
            <Route path="/event" element={<Event />} >
              <Route path="event1" element={<div>코인 2배 이벤트</div>} />
              <Route path="event2" element={<div>코인 4배 이벤트</div>} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  );
};

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
