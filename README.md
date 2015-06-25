# React Input Link

ReactInputLink is a replacement for the base input react component capable of rendering a child (link, button...) inside the input itself. It supports the same props of react input.

```jsx
var InputLink = require('react-input-link');

React.renderComponent(
  <div>
    <InputLink {...inputProps}>
      <a href="/forgot-password">Forgot?</a>
    </InputLink>
  </div>,
  document.body);
```

![Screenshot](http://s3.postimg.org/5j5bvp8cj/Screen_Shot_2015_06_23_at_22_15_42.png)

You can see a live demo [here](http://jsfiddle.net/FrancescoCioria/0ycfru3n/3/)

###Install
```
npm install --save react-input-link
```

###Under the hood
The JSX is structured as follows:
```html
<div>
  <input/>
  <div>
    {this.props.children}
  </div>
</div>
```

Inside *componentDidMount* ReactInputLink gets height and width of the child div wrapper and uses them to position it correctly inside the input and to give the correct right padding to the input itself.
