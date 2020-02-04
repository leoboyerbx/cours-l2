import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'
import Button from './components/button/Button'

describe('Button App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  
  });

  it('changes button class on input change', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Button).find('button').hasClass('btn-theme')).toBe(true)
    expect(wrapper.find(Button).find('button').hasClass('btn-green')).toBe(false)

    wrapper.find('select')
      .simulate('change', { target: { value: 'green' } })

    
    expect(wrapper.find(Button).find('button').hasClass('btn-theme')).toBe(false)
    expect(wrapper.find(Button).find('button').hasClass('btn-green')).toBe(true)
    // expect(document.querySelector("[data-testid='button']").classList.contains('btn-theme')).toBe(true)
    // wrapper.find('select').simulate('change', 'yellow')
    // expect(document.querySelector("[data-testid='button']").classList.contains('btn-theme')).toBe(false)
    // expect(document.querySelector("[data-testid='button']").classList.contains('btn-yellow')).toBe(true)
  })

})

