import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Button from './Button';

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders without crashing', () => {
  act( () => {
    render(<Button>Hello, world!</Button>, container);
  });
  expect(document.querySelector("[data-testid='button']").textContent).toMatch(
    "Hello, world!"
  );

  act( () => {
    render(<Button></Button>, container);
  });
  expect(document.querySelector("[data-testid='button']").textContent).toMatch(
    "Add text"
  );
});

it("changes CSS class on click", () => {console.log(console.log(
  act( () => {
    render(<Button></Button>, container);
  });
  const button = document.querySelector("[data-testid='button']");
  expect(button.classList.contains('untoggled')).toBe(true);
  expect(button.classList.contains('toggled')).toBe(false);
  
  act( () => {
    button.dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );
  });
  expect(button.classList.contains('untoggled')).toBe(false);
  expect(button.classList.contains('toggled')).toBe(true);
});

it("corresponds to what we saw before", () => {
  act( () => {
    render(<Button></Button>, container);
  });
  const button = document.querySelector("[data-testid='button']");
  expect(
    pretty(container.innerHTML)
  ).toMatchSnapshot();
});
