import styled from 'styled-components';
import HAMBURGER from '../images/HAMBURGER.svg';

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
`;

export default function MainCard(props) {
  const {id, title, price, liters, image} = props;

  return(
    <div className="card">
      <a href={`/product/${id}`}><img className="pack-img" src={image} alt={title}/></a>
      <CardInfo>
        <div>
          <p><a href={`/shop/product/${id}`}>{title} ({liters}L)</a></p>
          <p>{price} USD</p>
        </div>
        <div className="view-more">
          <img src={HAMBURGER} alt="Menu"/>
          VIEW MORE
        </div>
      </CardInfo>
      <button className='btn'>ADD TO CART</button>
    </div>
  ) 
}