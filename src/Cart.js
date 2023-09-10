import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Card from './components/Card';
import './Products/Product.css'
import { clearAllItems } from './utils/cartSlice';

const Cart = () => {
    const selector = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    return <>
    {selector.length !== 0 ? <button  className="btns" style={{ marginLeft: '1rem', marginTop: '1rem' }} onClick={() => dispatch(clearAllItems())}>Clear All</button> : <div style={{ textAlign:'center', marginLeft: '1rem', marginTop: '1rem', fontSize: '20px', fontWeight: 700, color:'#ffffff' }}>No Items added in the cart, Please add items and then come back to proceed.</div>}
    <section className="card-container" style={{ marginLeft:'0' }}> 
        {selector.map(({ img, title, star, reviews, prevPrice, newPrice, added }) => (
            <Card key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          status = {added}   />
        ))}
    </section>
    </>
}

export default Cart