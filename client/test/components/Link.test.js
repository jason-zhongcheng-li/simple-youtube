import { assertAbstractType } from 'graphql';
import React from 'react';
import * as assert from 'assert';
import Link from '../../src/components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Link component', () => {
  it('works', () => {
    assert.strictEqual(1 + 1, 2);
  });
});


