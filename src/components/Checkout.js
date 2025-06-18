import '../customCSS/Checkout.css'
import { useEffect, useRef, useState } from 'react';
import { CreditCardFill, XLg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// import BASE_URL from '../config';

function Checkout() {
    const totalRef = useRef();
    const [anyEmptyInput, setAnyEmptyInput] = useState(false)
    const [total, setTotal] = useState(0)
    const [isNotice, setIsNotice] = useState(false)
    const [formData, setFormData] = useState({
        'fullName': '',
        'phone': '',
        'email': '',
        'address': ''
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setFormData((prev) => {
            const updatedFormData = { ...prev, [name]: value };
            return updatedFormData;
        })
    }
    
    const showNotice = () => {
        setIsNotice(true)
    }
    const hideNotice = () => {
        setIsNotice(false)
    } 

    useEffect(() => {

        setTotal(() => {
            const cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
            let updatedTotal = 0;
            cartItem.forEach(item => {
                updatedTotal += parseFloat(item.price) * parseInt(item.quantity)
            });
            return updatedTotal
        })
    }, [])

    useEffect(() => {
        totalRef.current.textContent = `₦${total.toLocaleString()}`;
    }, [total])

    useEffect(() => {
        setAnyEmptyInput(() => {
            const anyEmptyField = Object.values(formData).some(value => value === '') || total === 0;
            return anyEmptyField;
        })
    }, [formData, total])

    useEffect(() => {
        setIsNotice(true)
    }, [])

    const navigate = useNavigate();
    const cancel = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to cancel this transaction?')) {
            localStorage.removeItem('cartItem');
            navigate('/');
        }
    }
    const submitForm = () => {
        alert('payment successful')
        localStorage.removeItem('cartItem');
        navigate('/');
    }

    // this code is commented out as it was actually used for a client
    // const submitForm = async () => {
    //     setAnyEmptyInput(true)
    //     const url = `${BASE_URL}/make-payment`;
    //     const cartItem = JSON.parse(localStorage.getItem('cartItem'));
    //     const cartData = cartItem.map(item => {
    //         delete item.src;
    //         return {...item};
    //     });

    //     try {
    //         const response = await fetch(url, {
    //             method:'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({'customer':formData, 'items': cartData})
    //         });

    //         if (!response.ok) {
    //             throw new Error(response.status)
    //         }

    //         const result = await response.json()
    //         console.log(result.data);
    //         alert(result.detail);
    //         localStorage.removeItem('cartItem');
    //         navigate('/');
    //     } catch (error) {
    //         setAnyEmptyInput(false)
    //         console.error(`Error: ${error}`)
    //     }
    // }

    return (
        <div className='position-relative'>
            <div className={'notice-wrapper '+ (isNotice && 'show')}>
                <div className='notice'>
                    <XLg className='close' onClick={hideNotice} />
                    <p>
                        <span className='fw-bold'>Privacy Notice:</span> We value your privacy and are committed to protecting your personal information. In the course of processing your order, we collect only the essential information required to fulfill your request—namely, your name, email address, phone number, and delivery address. 
                    </p>
                    <p>
                        We do not collect any other personal data beyond what is necessary for the purpose of order fulfillment. Your information is used solely to facilitate communication, ensure accurate delivery, and provide customer support related to your purchase. 
                    </p>
                    <p>
                        All personal information is handled with strict confidentiality and is securely deleted after the successful completion of the delivery. We do not retain, share, sell, or use your data for any other purposes. 
                    </p>
                    <p>
                        If you have any questions or concerns regarding how your information is handled, please feel free to contact us. 
                    </p>
                </div>
            </div>
            <div className='wrapper'>
                <div className="checkout-wrapper">
                    <h3>Customer Checkout</h3>
                    <div className="checkout">
                        <div className="checkoutForm">
                            <h5>Fill out the customer form, all fields are required</h5>
                            <div className='row g-3'>
                                <div className='col-12'>
                                    <input type='text' value={formData.fullName} onChange={handleInputChange} className='form-control' name='fullName' placeholder='Full Name*' />
                                </div>
                                <div className="col-12">
                                    <input type="text" value={formData.phone} onChange={handleInputChange} className="form-control" name='phone' placeholder="Phone*" />
                                </div>
                                <div className="col-12">
                                    <input type="email" value={formData.email} onChange={handleInputChange} className="form-control" name='email' placeholder="Email*" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" value={formData.address} onChange={handleInputChange} name='address' rows={5} placeholder='Write your address*' />
                                    <span className="privacy-wrapper">🔒 We only use your information to process your order. <span className="privacy text-primary" onClick={showNotice}>Privacy Notice</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="summary-wrapper">
                            <div className='order-summary'>
                                <div className='order'>
                                    <h5>Order Summary</h5>
                                    <div>
                                        <span className='total'>Total Amount:</span>
                                        <span ref={totalRef} className='amount'> ₦0</span>
                                    </div>
                                </div>
                                <div className='checkout-control'>
                                    <div><button onClick={submitForm} disabled={anyEmptyInput} className='btn btn-success w-100'><CreditCardFill className='credit-card' />Make Payment</button></div>
                                    <div><button onClick={cancel} className='btn btn-danger w-100'>Cancel Transaction</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout