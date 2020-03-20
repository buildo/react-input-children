import * as React from 'react';

export namespace InputChildren {
  export type Props = React.HTMLProps<HTMLInputElement> & {
    /** React children rendered inside the input */
    children?: React.ReactNode,
    /** Props passed to wrapper 'div' */
    wrapper?:  React.HTMLProps<HTMLDivElement>
    /** Ref function for internal input reference */
    innerRef?: (input: HTMLInputElement) => void
  }
}

export type State = {
  width: number,
  height: number
}

/**
 * `InputChildren` is a replacement for the base input react component capable of rendering
 * a child (link, button...) inside the input itself. It supports the same props of react input.
 */
export class InputChildren extends React.Component<InputChildren.Props, State> {
  state = { width: 1, height: 1 }

  childrenWrapper: HTMLDivElement | null = null;
  computeTimeout: number | null = null

  componentDidMount() {
    this.computeChildrenSize();
  }

  computeChildrenSize = () : void => {
    if (this.childrenWrapper) {
      const { clientWidth, clientHeight } = this.childrenWrapper;
      if (clientWidth !== this.state.width || clientHeight !== this.state.height) {
        this.setState({
          height: clientHeight,
          width: clientWidth
        });
      }
    }
  }

  getInputStyle = (): React.CSSProperties => {
    return {
      ...this.props.style,
      paddingRight: this.state.width,
      width: '100%',
      boxSizing: 'border-box'
    };
  }

  getChildrenStyle = (): React.CSSProperties => {
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
      wrapper = {},
      innerRef,
      ...inputProps
    } = this.props;

    const wrapperProps: React.HTMLProps<HTMLDivElement> = {
      ...wrapper,
      style: {
        ...wrapper.style,
        position: 'relative'
      }
    };

    return (
      <div {...wrapperProps}>
        <input {...inputProps} style={this.getInputStyle()} ref={innerRef} />
        <div ref={(ref: HTMLDivElement) => this.childrenWrapper = ref} style={this.getChildrenStyle()}>
          {children}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this.computeTimeout = setTimeout(this.computeChildrenSize);
  }

  componentWillUnmount() {
    if (this.computeTimeout !== null) {
      clearTimeout(this.computeTimeout)
    }
  }
}
