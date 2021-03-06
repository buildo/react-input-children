import * as React from 'react';

export namespace InputChildren {
  export type Props = Omit<React.HTMLProps<HTMLInputElement>, 'ref'> & {
    /** React children rendered inside the input */
    children?: React.ReactNode,
    /** Props passed to wrapper 'div' */
    wrapper?:  React.HTMLProps<HTMLDivElement>
    /** Ref function for internal input reference */
    inputRef?: React.Ref<HTMLInputElement>
  }
}

export type State = {
  width: number,
  height: number
}

class InputChildrenInternal extends React.Component<InputChildren.Props, State> {
  state = { width: 1, height: 1 }

  childrenWrapper: HTMLDivElement

  componentDidMount() {
    this.computeChildrenSize();
  }

  computeChildrenSize(): void {
    const { clientWidth, clientHeight } = this.childrenWrapper;
    if (
      // Instead of plain !== comparison, using a magic number
      // to defend against possible rounding errors in
      // `clientHeight`/`clientWidth`, and avoid causing re-render loops.
      // See https://github.com/buildo/react-input-children/issues/47
      Math.abs(clientWidth - this.state.width) > 1 ||
      Math.abs(clientHeight - this.state.height) > 1
    ) {
      this.setState({
        height: clientHeight,
        width: clientWidth
      });
    }
  }

  getInputStyle(): React.CSSProperties {
    return {
      ...this.props.style,
      paddingRight: this.state.width,
      width: '100%',
      boxSizing: 'border-box'
    };
  }

  getChildrenStyle(): React.CSSProperties {
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
      inputRef,
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
        <input {...inputProps} style={this.getInputStyle()} ref={inputRef} />
        <div ref={(ref: HTMLDivElement) => this.childrenWrapper = ref} style={this.getChildrenStyle()}>
          {children}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    this.computeChildrenSize();
  }

}

/**
 * `InputChildren` is a replacement for the base input react component capable of rendering
 * a child (link, button...) inside the input itself. It supports the same props of react input.
 */
export const InputChildren = React.forwardRef<HTMLInputElement, InputChildren.Props>(
  (props, ref) => <InputChildrenInternal {...props} inputRef={ref} />
)