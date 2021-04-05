import styled from 'styled-components';

const CartWrapper = styled.section`
  display: flex;
  flex-direction:column;

`;

export default function ShoppingCart(props){

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
  
  return(
    <CartWrapper>
      Add to Cart: ProductID: {productId} Quantity: {qty}
      <div>
          image
      </div>
      <div>
          title
          quantity
      </div>
      <div>
         remove 1
         add 1
      </div>
    </CartWrapper>
  )
}