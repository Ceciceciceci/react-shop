import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import styled from 'styled-components';
import SecondCard from '../components/SecondCard';
import axios from 'axios';

const ProductWrapper = styled.section`
  width: 100%;
`;

export default function Product(props){

  const productDetails = useSelector( state => state.productDetails )
  const {loading, error, tempproduct} = productDetails;
  console.log("PRODCUT DETAILS:: ", tempproduct);

  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchData();
  }, [])

  const paramId = Number(props.match.params.id);
  let product = products.find((item) => item._id === paramId);
  if(!product){
    return <h1>SORRY NO PRODUCT OF THIS NAME EXISTS.</h1>
  }

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}?qty=${qty} `)
  }

  return(
    <ProductWrapper>
        <SecondCard key={product._id} 
                    id={product._id}
                    title={product.name} 
                    price={product.price} 
                    liters={product.liters} 
                    image={product.image} 
                    desc={product.description} 
                    rating={product.rating} 
                    quantity={qty}
                    addToCartHandler={addToCartHandler}/>
    </ProductWrapper>
  )
}