# React Input Children

`InputChildren` is a replacement for the base input react component capable of rendering a child (link, button...) inside the input itself. It supports the same props of react input.

```jsx
import InputChildren from 'react-input-children';

React.renderComponent(
  <div>
    <InputChildren {...inputProps}>
      <a href="/forgot-password">Forgot?</a>
    </InputChildren>
  </div>,
  document.body);
```

![Screenshot](http://s3.postimg.org/5j5bvp8cj/Screen_Shot_2015_06_23_at_22_15_42.png)

[Live Examples](http://react-components.buildo.io/#inputchildren)

### Install
```
npm install --save react-input-children
```

### Under the hood
The JSX is structured as follows:
```html
<div>
  <input/>
  <div>
    {children}
  </div>
</div>
```

Inside *componentDidMount* `InputChildren` gets height and width of the child div wrapper and uses them to position it correctly inside the input and to give the correct right padding to the input itself.
