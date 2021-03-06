import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import { render } from 'enzyme';
import InputChildren from '../../src';

describe('InputChildren', () => {

it('should render correctly', () => {
    const component = render(
      <div>
        <InputChildren className='input' wrapper={{ id: 'input-children' }}>>
          <a className='link'>Link</a>
        </InputChildren>
      </div>
    );
    expect(component.html()).toMatchSnapshot();
  });

//   it('input should have correct right padding', () => {
//     const component = mount(
//       <InputChildren className='input'>
//         <div style={{ width: 10 }} />
//       </InputChildren>
//     );

//     expect(component.find('input').instance().style['padding-right']).toBe('10px');
//   });

});

describe('build', () => {

  it('build script generates every needed file', () => {
    execSync('npm run build')
    expect(fs.readdirSync(path.resolve(__dirname, '../../lib'))).toMatchSnapshot()
  })

})
