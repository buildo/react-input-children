import React from 'react/addons'
import expect from 'expect';
import InputLink from '../../src/InputLink';

const TestUtils = React.addons.TestUtils;


describe('InputLink', function() {

  it('should be displaying input and child', function() {
    const component =
      <div>
        <InputLink className='input'>
          <a className='link'>Link</a>
        </InputLink>
      </div>;
    const inputLinkWrapper = TestUtils.renderIntoDocument(component);

    const input = TestUtils.scryRenderedDOMComponentsWithClass(inputLinkWrapper, 'input');
    expect(input.length).toBe(1, 'input is not displayed');

    const link = TestUtils.scryRenderedDOMComponentsWithClass(inputLinkWrapper, 'link');
    expect(link.length).toBe(1, 'child link is not displayed');
  });

  // it('input should have correct right padding', function() {
  //   const component =
  //     <div>
  //       <InputLink className='input'>
  //         <a className='link'>Link</a>
  //       </InputLink>
  //     </div>;
  //   const inputLinkWrapper = TestUtils.renderIntoDocument(component);

  //   const input = TestUtils.findRenderedDOMComponentWithClass(inputLinkWrapper, 'input').getDOMNode();
  //   console.log(inputLinkWrapper.getDOMNode().style.width);
  // });

});