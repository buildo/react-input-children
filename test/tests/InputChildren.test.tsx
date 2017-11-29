import * as React from 'react';
import * as renderer from 'react-test-renderer';
import InputChildren from '../../src';


describe('InputChildren', () => {

  it('should render correctly', () => {
    const component = renderer.create(
      <InputChildren className='input'>
        <a className='link'>Link</a>
      </InputChildren>
    );
    expect(component).toMatchSnapshot();
  });

  // it('input should have correct right padding', function() {
  //   const component =
  //     <div>
  //       <InputChildren className='input'>
  //         <a className='link'>Link</a>
  //       </InputChildren>
  //     </div>;
  //   const InputChildrenWrapper = TestUtils.renderIntoDocument(component);
  //
  //   const input = TestUtils.findRenderedDOMComponentWithClass(
  //     InputChildrenWrapper,
  //     'input'
  //   ).getDOMNode();
  //   console.log(InputChildrenWrapper.getDOMNode().style.width);
  // });

});
