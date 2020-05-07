export default {
  'a-mentions': {
    props: {
      "autoFocus": {
        "desc": "自动获得焦点",
        "type": "boolean",
        "default": "false"
      },
      "defaultValue": {
        "desc": "默认值",
        "type": "string",
        "default": ""
      },
      "notFoundContent": {
        "desc": "当下拉列表为空时显示的内容",
        "type": "string",
        "default": "'Not Found'"
      },
      "placement": {
        "desc": "弹出层展示位置",
        "type": ['top', 'bottom'],
        "default": "bottom"
      },
      "prefix": {
        "desc": "设置触发关键字",
        "type": "string",
        "default": "'@'"
      },
      "split": {
        "desc": "设置选中项前后分隔符",
        "type": "string",
        "default": "' '"
      },
    }
  },
  'a-mentions-option': {
    props: {
      "value": {
        "desc": "选择时填充的值",
        "type": "string",
        "default": "''"
      }
    }
  },
}