/* eslint-env jest */

import ReactDOM from 'react-dom';
import Form from './Form';
import React from 'react';
import { shallow } from 'enzyme';

describe('Form', () => {
	let wrapper;

	beforeEach(() => {
    	wrapper = shallow(
      		<Form />
    	);
  	}),

	it('validates for items under 10 characters', () => {
		const input = wrapper.find('input').first();
      	input.simulate('change', {
        target: { value: 'short' }
      });
  	})

	it('validates for items over 20 characters', () => {
		const input = wrapper.find('input').first();
      	input.simulate('change', {
        target: { value: 'very very very very very long' }
      });
	})

});