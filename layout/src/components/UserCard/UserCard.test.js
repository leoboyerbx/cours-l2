import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserCard from './UserCard';
import pretty from 'pretty'

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

const fakeUserData = JSON.parse(`{"gender":"female","name":{"title":"Miss","first":"Aubree","last":"Bélanger"},"location":{"street":{"number":765,"name":"Coastal Highway"},"city":"Armstrong","state":"Québec","country":"Canada","postcode":"U8Q 8M3","coordinates":{"latitude":"-61.6475","longitude":"86.2357"},"timezone":{"offset":"-2:00","description":"Mid-Atlantic"}},"email":"aubree.belanger@example.com","login":{"uuid":"2245140d-9e5b-4804-9607-521d8c84f370","username":"heavyfrog217","password":"878787","salt":"6uTHbpuz","md5":"e737e48379f7b5d29c6a36a523ed426a","sha1":"2f7374a995d15182d797d80588490c8011faa05b","sha256":"9e3fd309b577793f28f57f1d09bc1e0e56656a87834e6e51b467a1384e94c802"},"dob":{"date":"1950-08-21T00:19:21.737Z","age":70},"registered":{"date":"2016-08-06T16:16:40.294Z","age":4},"phone":"753-924-0675","cell":"393-017-9161","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"CA"}`)

describe('User Card component', () => {
    it('renders without crashing', () => {
        act(() => {
          render(<UserCard />, container)
        })
      })
      it('matches previous snapshots', () => {
        act(() => {
          render(<UserCard userData={fakeUserData} />, container)
        })
        const card = document.querySelector("[data-testid='userCard']")
        expect(
            pretty(container.innerHTML)
        ).toMatchSnapshot()

      })
})
