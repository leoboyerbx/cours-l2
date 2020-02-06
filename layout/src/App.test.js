import React from 'react'
import ReactDOM from 'react-dom'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import App from './App'
import fakeUsersData from './testingData/testUsers'

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('App Layout material', () => {

  it('renders with fake API', async () => {

    function fakeFetch(url) {
      return Promise.resolve({
        json: () => Promise.resolve(fakeUsersData)
      });
    }

    jest.spyOn(global, "fetch").mockImplementation(fakeFetch)

    await act( async () => {
      render(<App />, container)
    })
    
    expect(document.querySelectorAll('[data-testclass="userCard"]').length).toBe(10)
  
    global.fetch.mockRestore()
  });
})
