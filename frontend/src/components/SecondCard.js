import styled from 'styled-components';
import Ratings from '../components/Ratings';

const SecondCardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

  img{
      height: 300px;
  }
`;

const CardDesc = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  border: 1px solid black;
  padding: 50px;
  width: 50%;

  h2{
    margin-bottom: 5px;
    letter-spacing: 0.2rem;
  }

  .title{
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .desc{
    margin-top: 15px;
    letter-spacing: 1px;
    line-height: 20px;
    font-weight: 200;
  }

  .btn{
    margin-top: 75px;
  }
`;

export default function SecondCard(props) {
  const {title, price, liters, image, desc, rating, addToCartHandler} = props;
  
  return(
    <SecondCardWrapper>
      <div>
        <img src={`.${image}`} alt={title}/>
      </div>  
      <CardDesc>
        <p className="title">{title} ({liters}L)</p>
        <h2>{price} USD</h2>
        <Ratings rating={rating}></Ratings>
        <p className="desc">{desc}</p>

        <button className='btn'
                onClick={addToCartHandler}>
                  ADD TO CART
        </button>
      </CardDesc>
    </SecondCardWrapper>
  ) 
}