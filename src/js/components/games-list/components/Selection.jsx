import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'
import Counter from '../../Counter'

function Selection({selection, selections}) {
    const [isActive, setIsActive] = useState(selection.active)
    const [price, setPrice] = useState(selection.price)

    useEffect(() => {
        if (selections[selection.id]) {
            if (selections[selection.id].active !== isActive) {
                setIsActive(!isActive)
            }
            if (selections[selection.id].price !== price) {
                setPrice(selections[selection.id].price)
            }
        }
    }, [selections])

    const closed = <div className='selection-closedTag'>Closed</div>

    return (
        <div className={classNames('selection', { closed: !isActive })}>
            {!isActive ? closed : null}
            <div className='selection-name'>{selection.name}</div>
            <div className='selection-price'>
                <div className='price-title'>Current price:</div>
                <div className='price-value'>£{isActive ? price : null}</div>
            </div>
            <Counter price={price} active={isActive} />
        </div>
    )
}

const mapStateToProps = state => ({ selections: state.selections })

export default connect(mapStateToProps)(Selection);
