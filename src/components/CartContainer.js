import { PlusLg, DashLg } from 'react-bootstrap-icons';
import '../customCSS/CartContainer.css'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function CartContainer({ cart }) {
    const totalRef = useRef()
    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')) || []);
    const [total, setTotal] = useState(0)

    const add = (e) => {
        e.preventDefault(); // stop page from refreshing
        const card = e.target.closest('.items');
        setCartItem(prev => {
            const name = card.querySelector('.product-name').textContent;
            const findIndex = prev.findIndex(item => item.name === name);

            const updatedCart = [...prev]

            updatedCart[findIndex] = { ...updatedCart[findIndex], quantity: Number(updatedCart[findIndex].quantity) + 1 }

            return updatedCart
        })
    }

    const subtract = (e) => {
        e.preventDefault(); // stop page from refreshing
        const card = e.target.closest('.items');
        setCartItem(prev => {
            const name = card.querySelector('.product-name').textContent;
            const findIndex = prev.findIndex(item => item.name === name);

            const updatedCart = [...prev]

            updatedCart[findIndex] = { ...updatedCart[findIndex], quantity: Number(updatedCart[findIndex].quantity) - 1 }

            if (Number(updatedCart[findIndex].quantity) === 0) {
                updatedCart.splice(findIndex, 1)
            }

            return updatedCart
        })
    }

    const items = cartItem.map((item, index) => {
        return <Cart add={add} subtract={subtract} src={item.src} name={item.name} key={index} price={item.price} quantity={item.quantity} />
    })


    useEffect(() => {
        setTotal(() => {

            let updatedTotal = 0
            cartItem.forEach(item => {
                updatedTotal = updatedTotal + parseFloat(item.price) * parseInt(item.quantity)
            });

            return updatedTotal
        })
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem])

    useEffect(() => {
        totalRef.current.textContent = `₦${total.toLocaleString()}`;
    }, [total])

    const navigate = useNavigate();

    const cancel = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to cancel this transaction?')) {
            localStorage.removeItem('cartItem');
            navigate('/');
        }
    }

    const checkout = () => {
        cart();
        navigate('/checkout')
    }
    return (
        <div className='my-4'>
            <div className='total-wrapper'>
                <div className='total-container'>
                    <span className='total'>Total:</span>
                    <span className='total-amount' ref={totalRef} >₦0.00</span>
                </div>
            </div>
            {items}
            <div className='control-wrapper'>
                <div className='control'>
                    <span onClick={checkout} className='btn btn-success'>Checkout</span>
                    <span onClick={cancel} className='btn btn-danger'>Cancel</span>
                </div>
            </div>
        </div>
    )
}

export default CartContainer




function Cart({ src, price, name, quantity, add, subtract }) {
    return (
        <div className='cart-wrapper'>
            <div className='cart-container'>
                <div className='cart'>
                    <div className='image-container'>
                        <img src={src} alt='' />
                    </div>
                    <div className='items'>
                        <h5 className="product-name">{name}</h5>
                        <p className="price">₦{Number(price).toLocaleString()}</p>
                        <div className='item-control'>
                            <span onClick={subtract} className='btn btn-warning minus'><DashLg /></span>
                            <span className='count'>{quantity}</span>
                            <span onClick={add} className='btn btn-warning plus'><PlusLg /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
