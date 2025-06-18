import '../customCSS/Home.css'
import stroud from '../assets/stroud.jpeg';
import zikoko from '../assets/zikoko.jpeg';
import zviFinance from '../assets/zviFinance.jpg';
import fidelity from '../assets/fidelity.jpeg';
import { useState, useEffect } from 'react';
import AddSubtract from './AddSubtract';
import { Link } from "react-router-dom";


function Home( { cart }) {
    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cartItem')) || [])

    const showOrder = (e) => {
        e.preventDefault(); // stop page from refreshing
        const card = e.target.closest('.card');

        setCartItem(prev => {
            const name = card.querySelector('.card-text').textContent;
            const price = card.querySelector('.price').textContent.split('₦')[1].replace(/,/g, '');
            const src = card.querySelector('img').src;

            const existingIndex = prev.findIndex(item => item.name === name);

            if (existingIndex !== -1) {
                const updatedCart = [...prev];
                updatedCart[existingIndex] = {
                    ...updatedCart[existingIndex],
                    quantity: Number(updatedCart[existingIndex].quantity) + 1
                };
                return updatedCart;
            }
            const updatedCart = [...prev, {
                'name': name,
                'price': price,
                'src': src,
                'quantity': 1
            }];
            
            return updatedCart           
        })
    }

    const add = (e) => {
        e.preventDefault(); // stop page from refreshing
        const card = e.target.closest('.card');
        setCartItem(prev => {
            const name = card.querySelector('.card-text').textContent;
            const findIndex = prev.findIndex(item => item.name === name);

            const updatedCart = [...prev]

            updatedCart[findIndex] = {...updatedCart[findIndex], quantity: Number(updatedCart[findIndex].quantity) + 1}

            return updatedCart
        })
    }

    const subtract = (e) => {
        e.preventDefault(); // stop page from refreshing
        const card = e.target.closest('.card');
        setCartItem(prev => {
            const name = card.querySelector('.card-text').textContent;
            const findIndex = prev.findIndex(item => item.name === name);

            const updatedCart = [...prev]

            updatedCart[findIndex] = {...updatedCart[findIndex], quantity: Number(updatedCart[findIndex].quantity) - 1}

            if (Number(updatedCart[findIndex].quantity) === 0 ) {
                updatedCart.splice(findIndex, 1)
            }

            return updatedCart
        })
    }

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [cartItem])

    return (
        <div className='home row'>
            <div className='col-12 heading'>
                <div className='welcome'>
                    <h1>Welcome to Simpson Bookfare</h1>
                    <p>Home to rich books that changes path</p>
                </div>
            </div>
            <div className='col-12 what-wrapper'>
                <div className='what'>
                    <h2>What do we have to offer</h2>
                    <div className='what-list'>
                        <p>Good Histroy Books</p>
                        <p>Science and Engineering Book</p>
                        <p>Financial Books</p>
                        <p>Marriage Fidelity Books</p>
                    </div>
                </div> 
            </div>
            <div className='col-12 available-wrapper'>
                <div className='available'>
                    <h2>Available Books</h2>
                    <div className="d-flex overflow-auto gap-3 pb-3 justify-content-md-center">
                        <div className="card">
                            <img src={stroud} alt="" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">Engineering Mathematics by K.A Stroud</p>
                                <p className="fw-bold text-start"><span className='price'>₦11,250.00</span></p>
                                <AddSubtract subtract={subtract} add={add} showOrder={showOrder} />
                            </div>
                        </div>
                        <div className="card">
                            <img src={zikoko} alt="" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">Sunset in Biafra By Elechi Amadi</p>
                                <p className="fw-bold text-start price">₦14,200.00</p>
                                <AddSubtract subtract={subtract} add={add} showOrder={showOrder} />
                            </div>
                        </div>
                        <div className="card">
                            <img src={zviFinance} alt="" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">Principles of Finance by Zvi Bodie</p>
                                <p className="fw-bold text-start price">₦400,000.00</p>
                                <AddSubtract subtract={subtract} add={add} showOrder={showOrder} />
                            </div>
                        </div>
                        <div className="card">
                            <img src={fidelity} alt="" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">Faithful Attraction by Andrew M. Greely</p>
                                <p className="fw-bold text-start price">₦21,000.00</p>
                                <AddSubtract subtract={subtract} add={add} showOrder={showOrder} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='col-12'>
                <h2>What is our saying about our book collections</h2>
            </div> */}
            {cartItem.length > 0 && <CartButton cart={cart} />}
        </div>
    )
}

export default Home



function CartButton({ cart }) {
  return (
    <>
        <Link onClick={cart} to={'/cart'}>
            <div className='cartButton-wrapper'>
                <span className='cartButton'>Show Order</span>
            </div>
        </Link>
    </>
  )
}
