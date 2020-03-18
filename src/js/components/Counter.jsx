import React, { useState } from 'react';
import roundTo from 'round-to'

export default function Counter({price = 1, active}) {
    const [count, setCount] = useState(0)
    const [showError, setShowError] = useState(false)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count < 1 ? 0 : count - 1)
    const totalPrice = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(
        isNaN(count) ? 0 :roundTo(count * price, 2)
    )

    function updateCount(e) {
        const val = parseInt(e.target.value)
        if (val > 999) { return flashError() }
        setCount(val)
    }


    function validateKeys(e) {
        const editKeys = [8, 37, 39, 46]
        if ((e.key >= 0 && e.key < 10 || editKeys.includes(e.keyCode)) !== true) {
            e.preventDefault()
        }
    }

    function flashError() {
        setShowError(true)
        setTimeout(() => setShowError(false), 1000)
    }

    const errorMessage = showError
        ? <div className='maxErrorMessage'>Max 999</div>
        : null

    return (
        <div data-testid="counter" className='counter'>
            <div className='count-header'>Quantity</div>
            <button className='increment' onClick={increment}>+</button>
            <button className='decrement' onClick={decrement}>-</button>
            <input type='number' value={active ? count : ''} onChange={updateCount} onKeyDown={validateKeys} />
            <div className='total-header'>Total Bet</div>
            <div className='total-price'><div>{active ? totalPrice : null}</div></div>
            {errorMessage}
        </div>
    )
}
