import { useParams } from 'react-router-dom';

function Detail(props) {

  let { id } = useParams();

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="pic" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.nfts[id].title}</h4>
          <p>{props.nfts[id].content}</p>
          <p>{props.nfts[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
};

export default Detail