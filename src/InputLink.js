import React from 'react';

export default class InputLink extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.element
    ]),
    wrapper: React.PropTypes.object,
    wrapperClassName: React.PropTypes.string,
    wrapperStyle: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { width: 1, height: 1 };
  }

  componentDidMount() {
    this.computeChildrenSize();
  }

  computeChildrenSize = () => {
    const childrenWrapper = this.refs.childrenWrapper.nodeType === 1 ?
      this.refs.childrenWrapper :
      this.refs.childrenWrapper.getDOMNode();
    const { clientWidth, clientHeight } = childrenWrapper;
    if (clientWidth !== this.state.width || clientHeight !== this.state.height) {
      this.setState({
        height: clientHeight,
        width: clientWidth
      });
    }
  }

  getInputStyle = () => {
    return {
      ...this.props.style,
      paddingRight: this.state.width,
      width: '100%',
      boxSizing: 'border-box'
    };
  }

  getChildrenStyle = () => {
    return {
      position: 'absolute',
      top: '50%',
      right: 0,
      marginTop: -1 * (this.state.height / 2)
    };
  }

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
  }

  componentDidUpdate() {
    this.computeChildrenSize();
  }

}
