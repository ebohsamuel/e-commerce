import '../customCSS/Checkout.css'

function Checkout() {
  return (
    <div className='wrapper'>
        <div className="checkout-wrapper">
            <h3>Customer Checkout</h3>
            <div className="checkout">
                <div className="checkoutForm">
                    <h5>Fill out the customer form, all fields are required</h5>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <input type='text' className='form-control' name='subject' placeholder='Full Name*' />
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control" name='fullName' placeholder="Phone*" />
                        </div>
                        <div className="col-12">
                            <input type="email" className="form-control" name='email' placeholder="Email*" />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" rows={5} placeholder='Write your address*' />
                            <span className="privacy-wrapper">🔒 We only use your information to process your order. <span className="privacy text-primary">Privacy Notice</span></span>
                        </div>
                    </div>
                </div>
                <div className="summary-wrapper">
                    <div className='order-summary'>
                        <div className='order'>
                            <h5>Order Summary</h5>
                            <div>
                                <span className='total'>Total Amount:</span>
                                <span className='amount'> ₦23,000</span>
                            </div>
                        </div>
                        <div className='checkout-control'>
                            <div><span className='btn btn-success w-100'>Make Payment</span></div>
                            <div><span className='btn btn-danger w-100'>Cancel Transaction</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout