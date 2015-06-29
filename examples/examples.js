import React from 'react';
import InputLink from '../src/InputLink';

const Example = React.createClass({

  propTypes: {},

  getInitialState() {
    return {
      showPassword: false
    };
  },

  togglePasswordVisibility() {
    this.setState({showPassword: !this.state.showPassword});
  },

  render() {
    const inputStyle = {
      height: 40,
      border: '1px solid lightgrey',
      borderRadius: 4,
      padding: 5,
      fontSize: 16
    };

    const linkStyle= {
      color: 'green',
      cursor: 'pointer',
      padding: 10
    };

    const labelStyle = {
      height: 38,
      width: 80,
      borderRadius: '0px 4px 4px 0px',
      lineHeight: '40px',
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#F0F0F0',
      boxSizing: 'border-box',
      margin: '1px 1px 1px 5px'
    };

    const passwordMessage = this.state.showPassword ? 'hide' : 'show';
    const passwordType = this.state.showPassword ? '' : 'password';
    return (
      <div style={{width: 350, margin: 20}}>

        <h2>Plain text</h2>
        <InputLink style={inputStyle} placeholder='right padding is computed'>
          <a style={linkStyle}>I'm a link!</a>
        </InputLink>

        <h2>Password</h2>
        <InputLink type={passwordType} style={inputStyle} placeholder='Try writing something!' defaultValue='hide me!'>
          <a style={linkStyle} onClick={this.togglePasswordVisibility}>{passwordMessage}</a>
        </InputLink>

        <h2>Button</h2>
        <InputLink style={inputStyle}>
          <button style={{margin: 10, cursor: 'pointer'}}>I'm a button!</button>
        </InputLink>

        <h2>Anything you want</h2>
        <InputLink style={inputStyle}>
          <img src='http://api.adorable.io/avatars/285/franc' style={{float: 'left', width: 30, height: 30, margin: '5px 5px 0 10px'}}/>
          <div style={labelStyle}>Yay!</div>
        </InputLink>
      </div>
    );
  }

});

React.render(<Example />, document.getElementById('container'));