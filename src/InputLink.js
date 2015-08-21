import React from 'react';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';

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
    this.computeChildrenSize();
  },

  computeChildrenSize() {
    const { clientWidth, clientHeight } = this.refs.childrenWrapper.getDOMNode();
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
    return assign({}, this.props.style, neededStyle);
  },

  getChildrenStyle() {
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
        <div ref='childrenWrapper' style={this.getChildrenStyle()}>
          {this.props.children}
        </div>
      </div>
    );
  },

  componentDidUpdate() {
    this.computeChildrenSize();
  }

});

export default InputLink;
