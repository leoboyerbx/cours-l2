import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UsersGrid from './UsersGrid';

import usersTestData from './data/'

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

describe('Users Grid component', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<UsersGrid />, container);
    })
  });
})
