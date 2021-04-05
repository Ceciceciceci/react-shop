import {data} from '../data';

import styled from 'styled-components';
import MainCard from '../components/MainCard';


const ProductWrapper = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-left: 24px;
  }
`;

export default function HomeProduct(props){

  var first = data.products[0]
  var second = data.products[1]

  return(
    <ProductWrapper>
      <MainCard key={first._id} id={first._id} title={first.name} liters={first.liters} price={first.price} image={first.image} />
      <MainCard key={second._id} id={second._id} title={second.name} liters={second.liters} price={second.price} image={second.image} />
    </ProductWrapper>
  )
}