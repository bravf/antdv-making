export default {
  'a-row': {
    props: {
      "align": {
        "desc": "flex 布局下的垂直对齐方式：top middle bottom",
        "type": ['top', 'middle', 'bottom'],
        "default": "top"
      },
      "gutter": {
        "desc": "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。",
        "type": "number/object/array",
        "default": "0"
      },
      "justify": {
        "desc": "flex 布局下的水平排列方式：start end center space-around space-between",
        "type": ['start', 'end', 'center', 'space-around', 'space-between'],
        "default": "start"
      },
      "type": {
        "desc": "布局模式，可选 flex，现代浏览器 下有效",
        "type": "string",
        "default": ""
      }
    }
  },
  'a-col': {
    props: {
      "offset": {
        "desc": "栅格左侧的间隔格数，间隔内不可以有栅格",
        "type": "number",
        "default": "0"
      },
      "order": {
        "desc": "栅格顺序，flex 布局模式下有效",
        "type": "number",
        "default": "0"
      },
      "pull": {
        "desc": "栅格向左移动格数",
        "type": "number",
        "default": "0"
      },
      "push": {
        "desc": "栅格向右移动格数",
        "type": "number",
        "default": "0"
      },
      "span": {
        "desc": "栅格占位格数，为 0 时相当于 display: none",
        "type": "number",
        "default": "-"
      },
      "xs": {
        "desc": "<576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      },
      "sm": {
        "desc": "≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      },
      "md": {
        "desc": "≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      },
      "lg": {
        "desc": "≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      },
      "xl": {
        "desc": "≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      },
      "xxl": {
        "desc": "≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象",
        "type": "number|object",
        "default": "-"
      }
    }
  }
}