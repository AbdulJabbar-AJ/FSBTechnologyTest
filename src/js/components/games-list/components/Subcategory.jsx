import React, { useEffect } from 'react';
import Event from './Event'
import { eventStateUpdate } from '../../../redux/actions'
import { connect } from 'react-redux'

function Subcategory({subcategory, trackEvent}) {
    useEffect(() => {
        subcategory.event.forEach(event => trackEvent(event))
    }, [subcategory])

    return (
        <div className='subcategory'>
            <h3 className='subcategory-heading'>{subcategory.name}</h3>
            {subcategory.event.map(event => <Event {...{ key: event.id, event }} /> )}
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({ trackEvent: event => dispatch(eventStateUpdate(event)) })

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);
