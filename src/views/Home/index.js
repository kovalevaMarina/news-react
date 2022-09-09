import { useContext, useEffect } from 'react';
import { ContextProducts } from '../../store/context';
import Promo from '../../components/Promo';
import Catalog from '../../components/Catalog';

function Home() {
  const { products, setProducts } = useContext(ContextProducts);
  const apiProduct = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(apiProduct)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Promo />
      <Catalog text={'Catalog'} />
    </>
  );
}

export default Home;
