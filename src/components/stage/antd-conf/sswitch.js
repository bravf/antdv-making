export default {
  'a-switch': {
    props: {
      "autoFocus": {
        "desc": "组件自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "checked": {
        "desc": "指定当前是否选中",
        "type": "boolean",
        "default": "false"
      },
      "checkedChildren": {
        "desc": "选中时的内容",
        "type": "string",
        "default": ""
      },
      "defaultChecked": {
        "desc": "初始是否选中",
        "type": "boolean",
        "default": "false"
      },
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "loading": {
        "desc": "加载中的开关",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "开关大小，可选值：default small",
        "type": ['default', 'small'],
        "default": "default"
      },
      "unCheckedChildren": {
        "desc": "非选中时的内容",
        "type": "string",
        "default": ""
      }
    }
  }
}