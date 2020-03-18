import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import Counter from '../js/components/Counter'

describe('Counter component', () => {
    test('Does it render?', () => {
        const counter = shallow(<Counter />)
        expect(counter.exists()).toBe(true)
    })

    test('Check increment', () => {
        const counter = mount(<Counter active={true} />)
        counter.find('.increment').simulate('click')
        expect(counter.find('input').props().value).toEqual(1)
    })

    test('Check decrement', () => {
        const counter = mount(<Counter active={true} />)
        counter.find('.increment').simulate('click').simulate('click')
        counter.find('.decrement').simulate('click')
        expect(counter.find('input').props().value).toEqual(1)
    })

    test('Blank on inactive', () => {
        const counter = mount(<Counter active={false} />)
        expect(counter.find('input').props().value).toEqual('')
    })

    test('Correct current format', () => {
        const counter = mount(<Counter active={true} />)
        expect(counter.find('.total-price').text()).toEqual('£0.00')
    })


    test('Check for manual counter input', () => {
        const counter = mount(<Counter active={true} />)
        const randomNum = Number(Math.floor(Math.random() * 10))
        counter.find('input').simulate('change', { target: { value: randomNum }})
        expect(counter.find('input').props().value).toEqual(randomNum)
    })
})