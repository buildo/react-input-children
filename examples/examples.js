import React from 'react';
import ReactDOM from 'react-dom';
import InputChildren from '../src/InputChildren';

class Example extends React.Component {

  state = {
    showPassword: false,
    firstLinkText: 'short'
  }

  togglePasswordVisibility = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  toggleLength = () => {
    this.setState({
      firstLinkText: this.state.firstLinkText === 'short' ? 'much longer' : 'short'
    });
  }

  render() {
    const inputStyle = {
      height: 40,
      border: '1px solid lightgrey',
      borderRadius: 4,
      padding: 5,
      fontSize: 16
    };

    const linkStyle = {
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

    const buttonStyle = {
      height: 38,
      border: 0,
      borderLeft: '1px solid lightgrey',
      borderRadius: '0 4px 4px 0',
      cursor: 'pointer',
      background: 'linear-gradient(to top, #f2f4f7, #ffffff)',
      marginRight: 1
    };

    const passwordMessage = this.state.showPassword ? 'hide' : 'show';
    const passwordType = this.state.showPassword ? '' : 'password';
    return (
      <div style={{ width: 350, margin: 20 }}>

        <h2>Plain text</h2>
        <InputChildren style={inputStyle} placeholder='right padding is computed'>
          <a style={linkStyle} onClick={this.toggleLength}>{this.state.firstLinkText}</a>
        </InputChildren>

        <h2>Password</h2>
        <InputChildren
          type={passwordType}
          style={inputStyle}
          placeholder='Try writing something!'
          defaultValue='hide me!'
        >
          <a style={linkStyle} onClick={this.togglePasswordVisibility}>{passwordMessage}</a>
        </InputChildren>

        <h2>Button</h2>
        <InputChildren style={inputStyle}>
          <button style={buttonStyle}>I'm a button!</button>
        </InputChildren>

        <h2>Anything you want</h2>
        <InputChildren style={inputStyle}>
          <img
            src='http://api.adorable.io/avatars/285/franc'
            style={{ float: 'left', width: 30, height: 30, margin: '5px 5px 0 10px' }}
          />
          <div style={labelStyle}>Yay!</div>
        </InputChildren>

      </div>
    );
  }

}

ReactDOM.render(<Example />, document.getElementById('container'));
