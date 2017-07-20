# InputChildren

`InputChildren` is a replacement for the base input react component capable of rendering
a child (link, button...) inside the input itself. It supports the same props of react input.

## Props
|Name|Type|Default|Description|
|----|----|-------|-----------|
| **children** | <code>ReactChildren</code> |  | *optional*. React children rendered inside the input |
| **wrapper** | <code>Object</code> | <code>{}</code> | *optional*. Props passed to wrapper 'div' |
| **innerRef** | <code>Function</code> |  | *optional*. Ref function for internal input reference <br /><code>(ref) => { this.input = ref; }</code> |
