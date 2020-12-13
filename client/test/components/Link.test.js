import 'jsdom-global/register';
import React from 'react';
import * as assert from 'assert';
import Routes from '../../src/routes/Routes';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('Link component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Routes />);

  });

  it('renders', () => {
    console.log('wrapper = ', wrapper.debug());
    assert.strictEqual(2, 2);
  });
});


