import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {

    const {id, name, imageUrl, price, quantity} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

  return (

    <div className="checkout-item-container" key={id}>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItemHandler}>&#10095;</span>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
       
        {/* <span onClick={ () => removeItemToCart(cartItem)}>decrement</span><br></br>
        <span onClick={ () => addItemToCart(cartItem)}>Increment</span> */}
  </div>
      
  )

}

export default CheckoutItem;
