import styled from 'styled-components';
import { data } from '../data';
import MainCard from '../components/MainCard';

// import {useDispatch, useSelector} from 'react-redux';
// import {listProducts} from '../actions/productActions';

const ShopWrapper = styled.section`
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  margin-left: 24px;
  > * + * {
    margin-left: 24px;
  }
`;

const CardWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > * {
    margin-right: 24px;
    margin-top: 24px;
  }
`;


export default function Shop(props){

  let allProducts = data.products.map((product) => {
    return( 
      <MainCard key={product._id} id={product._id} title={product.name} liters={product.liters} price={product.price} image={product.image} />
    )
  });

  return (
    <ShopWrapper>
        <CardWrapper>
          ISHTE
          {allProducts}
          ISHHFES
          {/* {finalProducts} */}
        </CardWrapper>
    </ShopWrapper>
  )
}