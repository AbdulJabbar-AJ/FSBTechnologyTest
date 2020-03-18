import React, { useEffect, useState } from 'react';
import Selection from './Selection'
import { trackSelection } from '../../../redux/actions'
import { connect } from 'react-redux'

function Event({event, track, events}) {
    const [isActive, setIsActive] = useState(event.active)

    useEffect(() => {
        event.selection.forEach(selection => { track(selection) })
    }, [event])

    useEffect(() => {
        if (events[event.id] !== isActive) { setIsActive(!isActive) }
    }, [events])

    const currentEvents = isActive
        ? event.selection.map(selection => <Selection {...{ key: selection.id, selection, eventInactive: !isActive }} />)
        : <div>This event is closed</div>

    return (
        <div className={'event'}>
            <h4 className='event-heading'>{event.name}</h4>
            {currentEvents}
        </div>
    )
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({ track: selection => dispatch(trackSelection(selection)) })

export default connect(mapStateToProps, mapDispatchToProps)(Event);
