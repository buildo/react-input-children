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
    const childWrapper = this.refs.childWrapper.getDOMNode();
    this.setState({
      height: childWrapper.clientHeight,
      width: childWrapper.clientWidth
    });
  },

  getInputStyle() {
    return assign(this.props.style, {paddingRight: this.state.width});
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
  }

});

export default InputLink;
