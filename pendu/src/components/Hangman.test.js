import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Hangman from './Hangman';


let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  container.remove();
  container = null;
});

it("renders with fake API", async () => {
  
    const fakeGuessed = new Set("f", "g");
    const fakeAPI = {
      files: {
        "words.txt": {
          content: "[banana\nordinateur\nfrigorifico\nwhisky]"
        },
        "results.txt": {
          content: JSON.stringify({
            guessed: [...fakeGuessed],
            mistake: 1
          })
        }
      }
    };
    
  function fakeFetch(url) {
    return Promise.resolve({
      json: () => Promise.resolve(fakeAPI)
    });
  }

  jest.spyOn(global, "fetch").mockImplementation(fakeFetch);

  await act(async () => {
    render(<Hangman />, container);
  }); 

  expect(container.querySelector("[data-testid=wrong]")).not.toBeUndefined();
  expect(container.querySelector("[data-testid=wrong]").textContent).toBe("1");

  global.fetch.mockRestore(); 
});
