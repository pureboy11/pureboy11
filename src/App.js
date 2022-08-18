import './App.css';
import { useState } from 'react';
import { ListGroup, Badge, ButtonGroup, ToggleButton, Toast, ToastContainer} from 'react-bootstrap';
import nftdata from './nftData.js';
import { Routes, Route, Outlet } from 'react-router-dom';
import NftList from './views/nftlist';
import TnavBar from './views/tnavbar';
import Detail from './views/detail';
import axios from 'axios';




function App() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Newest NFT', value: '1' },
    { name: 'Highest Price', value: '2' },
    { name: 'Increase in Value', value: '3' }
  ];

  let [nfts, moreNfts] = useState(nftdata);


  return (
  <>
    <TnavBar/>
    <Routes>
      <Route path="/mynfts" element= {
      <>
        <div className="main-img">
        <ToastContainer className="totalPrice">
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Latest Total Value</strong>
              <small>05.03.2022</small>
            </Toast.Header>
            <Toast.Body>
              <big style={{fontSize : '20px', fontWeight: 'bolder'}}>14.21 ETH</big>
              <br></br>
              <small> 1,324 $</small>
            </Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Latest News</strong>
            </Toast.Header>
            <Toast.Body>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Toast.Body>
          </Toast>
        </ToastContainer>
    </div>

    <ButtonGroup className="mb-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant="secondary"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
          <div className="filter">▼</div>
        </ToggleButton>
      ))}
    </ButtonGroup>


    <div className="container">
      <div className="row" style={{ marginTop: '20px'}}>
        {
          nfts.map((a, i) => {
            return (
              <NftList nfts={nfts[i]} i={i} key={nfts}></NftList>
            )
          })
        }
      </div>
      <button onClick={()=> {
        axios.get('http://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          let copy = [...nfts, ...result.data];
          moreNfts(copy);
        })
        .catch(()=>{
          console.log('실패함 ㅅㄱ')
        })

      }}>더보기</button>
    </div>
  </>}/>

  <Route path="/" element= {<div>Home</div>} />
  <Route path="/auction" element= {<div>auction</div>} />
  <Route path="/explorer" element= {<div>explorer</div>} />
  <Route path="/wallet" element= {<div>wallet</div>}>
    <Route path="metamask" element= {<div>metamask</div>} />
    <Route path="kaikas" element= {<div>kaikas</div>} />
  </Route>
  <Route path="/account" element= {<div>account</div>}>
    <Route path="profile" element= {<div>profile</div>} />
    <Route path="setting" element= {<div>setting</div>} />
  </Route>
  <Route path="/detail" element= {<Detail/>} />
  <Route path="/detail/:id" element= {<Detail nfts={nfts} />} />
  <Route path="/event" element= {<Event/>} >
    <Route path="event1" element= {<div>코인 2배 이벤트</div>} />
    <Route path="event2" element= {<div>코인 4배 이벤트</div>} />
  </Route>
  </Routes>
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
