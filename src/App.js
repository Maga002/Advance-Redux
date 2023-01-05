import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function App() {
 const cartIsShown =  useSelector(state => state.ui.cartIsShown)
 const cart = useSelector(state=>state.cart)

 useEffect(()=>{
  fetch('https://reduxcart-c4281-default-rtdb.europe-west1.firebasedatabase.app/cart.json',{
    method:'PUT',
    body:JSON.stringify(cart)
  })
 },[cart])

  return (
    <Layout>
      {cartIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
