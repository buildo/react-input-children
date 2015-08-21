import React from 'react';
import {omit, assign} from 'lodash/object';

const InputLink = React.createClass({

  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.element
    ]).isRequired
  },

  getDefaultProps() {
    return {
      style: {}
    };
  },

  getInitialState() {
    return {
      width: 1,
      height: 1
    };
  },

  componentDidMount() {
    this.computeChildSize();
  },

  computeChildSize() {
    const { clientWidth, clientHeight } = this.refs.childWrapper.getDOMNode();
    if (clientWidth !== this.state.width || clientHeight !== this.state.height) {
      this.setState({
        height: clientHeight,
        width: clientWidth
      });
    }
  },

  getInputStyle() {
    const neededStyle = {
      paddingRight: this.state.width,
      width: '100%',
      boxSizing: 'border-box'
    };
    return assign(this.props.style, neededStyle);
  },

  getChildStyle() {
    return {
      position: 'absolute',
      top: '50%',
      right: 0,
      marginTop: -1 * (this.state.height / 2)
    };
  },

  render() {
    return (
      <div style={{position: 'relative'}}>
        <input {...omit(this.props, 'children')} style={this.getInputStyle()}/>
        <div ref='childWrapper' style={this.getChildStyle()}>
          {this.props.children}
        </div>
      </div>
    );
  },

  componentDidUpdate() {
    this.computeChildSize();
  }

});

export default InputLink;
