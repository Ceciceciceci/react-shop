import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
import Hero from '../components/Hero/Hero';
import HomeProduct from './HomeProduct';
import {Link} from 'react-router-dom';
import MainCard from '../components/MainCard';

export default function Home({theme}){

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  console.log("Homepage product list:: ", productList);

  return (
    <>
      <div>
          {products.map((product) => (
            <MainCard key={product._id} ></MainCard>
          ))}
      </div>
      <Hero theme={theme} />
      <HomeProduct />
      <div className="explore">
          <h3>Looking for something different?</h3>
          <Link to="/shop"><button className="btn">SHOP MORE HERE</button></Link>
      </div>

    </>
  )
}