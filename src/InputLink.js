import React from 'react';

const InputLink = React.createClass({

  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.element
    ]),
    wrapper: React.PropTypes.object,
    wrapperClassName: React.PropTypes.string,
    wrapperStyle: React.PropTypes.string
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
    return {
      ...this.props.style,
      paddingRight: this.state.width,
      width: '100%',
      boxSizing: 'border-box'
    };
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
    const {
      children,
      wrapper = {}, wrapperClassName, wrapperStyle,
      ...inputProps
    } = this.props;

    const wrapperProps = {
      ...wrapper,
      className: wrapper.className || wrapperClassName,
      style: {
        ...(wrapper.style || wrapperStyle),
        position: 'relative'
      }
    };

    return (
      <div {...wrapperProps}>
        <input {...inputProps} style={this.getInputStyle()} />
        <div ref='childrenWrapper' style={this.getChildrenStyle()}>
          {children}
        </div>
      </div>
    );
  },

  componentDidUpdate() {
    this.computeChildrenSize();
  }

});

export default InputLink;
