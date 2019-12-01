import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import Endorsement from './Endorsement';

Enzyme.configure({ adapter: new Adapter() });

describe('Endorsement', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Endorsement review="A glowing review" reviewer="Someone" />,
    );

    expect(wrapper.find('.album-review').length).to.equal(1);
    expect(wrapper.find('.album-reviewer').length).to.equal(1);
  });

  it('should have reviewer link when url prop is provided', () => {
    const wrapper = shallow(
      <Endorsement
        review="A glowing review"
        reviewer="Someone"
        url="http://example.com"
      />,
    );
    expect(wrapper.find('.album-reviewer a').length).to.equal(1);
  });
});
