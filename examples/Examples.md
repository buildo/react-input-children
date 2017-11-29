### Examples

#### Show password
```js
initialState = { showPassword: false };

function togglePasswordVisibility() {
  setState({ showPassword: !state.showPassword });
}

const passwordType = state.showPassword ? 'text' : 'password';

<div style={{ width: 350 }}>
  <InputChildren
    type={passwordType}
    placeholder='Type password'
    defaultValue='secret password!'
    wrapper={{ className: 'input-children' }}
  >
    <span style={{ marginRight: 10, cursor: 'pointer' }} onClick={togglePasswordVisibility}>
      {state.showPassword ? 'Hide password' : 'Show password'}
    </span>
  </InputChildren>
</div>
```

#### Button
```js
function onButtonClick() {
  alert('clicked!');
}

const buttonStyle = { height: 32,
  borderWidth: '0 0 0 1px',
  borderRadius: '0px 4px 4px 0px',
  marginRight: 1,
  fontSize: '14px'
};

<div style={{ width: 350 }}>
  <InputChildren wrapper={{ className: 'input-children', style: { overflow: 'hidden' } }}>
    <button style={buttonStyle} onClick={onButtonClick}>Button label</button>
  </InputChildren>
</div>
```

#### Anything you want

```js
const labelStyle = {
  height: 32,
  width: 90,
  borderRadius: '0px 4px 4px 0px',
  lineHeight: '32px',
  textAlign: 'center',
  padding: '0 10px',
  backgroundColor: '#F0F0F0',
  boxSizing: 'border-box',
  marginRight: 1
};

const imgStyle = {
  float: 'left',
  width: 24,
  height: 24,
  margin: '4px 8px'
};


<div style={{ width: 350 }}>
  <InputChildren wrapper={{ className: 'input-children' }}>
    <img src='http://api.adorable.io/avatars/285/franc' style={imgStyle}/>
    <div style={labelStyle}>Yay!</div>
  </InputChildren>
</div>
```
