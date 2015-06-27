import React from 'react';
import InputLink from '../src/InputLink';

const Example = React.createClass({

  propTypes: {},

  getInitialState() {
    return {};
  },

  render() {
    const inputStyle = {
      height: 40,
      border: '1px solid lightgrey',
      borderRadius: 4,
      placeholder: 'Try writing something!',
      padding: 5,
      fontSize: 16
    };

    const linkStyle= {
      color: 'green',
      cursor: 'pointer',
      padding: 10
    };
    return (
      <div>
        <InputLink style={inputStyle}>
          <a style={linkStyle}>click me</a>
        </InputLink>
      </div>
    );
  }

});

React.render(<Example />, document.getElementById('container'));