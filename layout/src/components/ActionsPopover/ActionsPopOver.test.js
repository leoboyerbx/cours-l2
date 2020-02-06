import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from 'pretty'
import { mount } from 'enzyme'

import usersTestData from '../../testingData/testUsers'
import ActionsPopover from './ActionsPopover';
import { Share } from '@material-ui/icons';

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
          render(<ActionsPopover />, container)
        })
      })

      it('matches previous snapshots', () => {
        act(() => {
          render(<ActionsPopover />, container)
        })
        expect(
            pretty(container.innerHTML)
        ).toMatchSnapshot()
      })

      it('handles popover content', () => {
          const wrapper = mount(<ActionsPopover><span id="popover-content"></span></ActionsPopover>, container)
          act(() => {
              wrapper.find('button').simulate('click')
          })
          expect(document.querySelector('#popover-content')).not.toBeNull()
      })

      it('handles custom icon', () => {
        act(() => {
            render(<ActionsPopover icon={
                <Share></Share>
              } />, container)
          })
          expect(document.querySelector('[data-testid="actionsPopover"] svg').innerHTML).toMatch(`<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>`)
      })
})
