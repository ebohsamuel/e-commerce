import { PlusLg, DashLg } from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react';

function AddSubtract({ showOrder, add, subtract }) {
    const containerRef = useRef();
    const [count, setCount] = useState(0)
    const [isBuyNow, setIsBuyNow] = useState(true)
    const handleAddClick = (e) => {
        add(e);
        setCount(count => {
            return count + 1;
        })
    }
    const handleSubtractClick = (e) => {
        subtract(e);
        setCount(count => {
            return count - 1;
        })
    }

    const handleClick = (e) => {
        setCount(count => {
            return count + 1;
        })
        showOrder(e);
    }
    useEffect(() => {
        const cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        if (cartItem.length === 0) {
            return;
        }
        const card = containerRef.current.closest('.card');
        const name = card.querySelector('.card-text').textContent;

        const findIndex = cartItem.findIndex(item => item.name === name);

        if (findIndex !== -1) {
            const quantity = cartItem[findIndex].quantity;
            setCount(quantity);
        }
    }, [])
    useEffect(() => {
        setIsBuyNow(count === 0);    
    }, [count])
  return (
    <div ref={containerRef} className='text-center'>
            {
            isBuyNow? <span onClick={handleClick} className="btn btn-warning w-100">Buy Now</span> :
            <>
                <span onClick={handleSubtractClick} className='btn btn-warning minus'><DashLg /></span>
                <span className='count'>{count}</span>
                <span onClick={handleAddClick} className='btn btn-warning plus'><PlusLg /></span>
            </>
            }
    </div>
  )
}

export default AddSubtract