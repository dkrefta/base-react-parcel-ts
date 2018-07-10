import React from 'react';
import { shallow } from 'enzyme';

import Title from '../components/Title';

describe('Main Tests', () => {
  it('renders three title', () => {
    const wrapper = shallow(<Title>123</Title>);

    console.log(wrapper.html());
  });
});
