import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UsersGrid from './UsersGrid';

import usersTestData from '../../testingData/testUsers'

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});
// regarder spyon pour fakefetch
describe('Users Grid component', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<UsersGrid />, container)
    })
  })
  it('generates 10 users from data', () => {
    act( () => {
      render(<UsersGrid users={usersTestData.results} />, container);
    })
    expect(document.querySelectorAll('[data-testclass="userCard"]').length).toBe(10)
  })
})
