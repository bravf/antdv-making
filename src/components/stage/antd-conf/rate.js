export default {
  'a-rate': {
    props: {
      "allowClear": {
        "desc": "是否允许再次点击后清除",
        "type": "boolean",
        "default": "true"
      },
      "allowHalf": {
        "desc": "是否允许半选",
        "type": "boolean",
        "default": "false"
      },
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "count": {
        "desc": "star 总数",
        "type": "number",
        "default": "5"
      },
      "defaultValue": {
        "desc": "默认值",
        "type": "number",
        "default": "0"
      },
      "disabled": {
        "desc": "只读，无法进行交互",
        "type": "boolean",
        "default": "false"
      },
      "value": {
        "desc": "当前数，受控值",
        "type": "number",
        "default": "-"
      }
    }
  }
}