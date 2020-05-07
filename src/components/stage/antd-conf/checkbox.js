export default {
  'a-checkbox': {
    props: {
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "checked": {
        "desc": "指定当前是否选中",
        "type": "boolean",
        "default": "false"
      },
      "defaultChecked": {
        "desc": "初始是否选中",
        "type": "boolean",
        "default": "false"
      },
      "disabled": {
        "desc": "失效状态",
        "type": "boolean",
        "default": "false"
      },
      "indeterminate": {
        "desc": "设置 indeterminate 状态，只负责样式控制",
        "type": "boolean",
        "default": "false"
      }
    }
  },
  'a-checkbox-group': {
    props: {
      "disabled": {
        "desc": "整组失效",
        "type": "boolean",
        "default": "false"
      },
      "name": {
        "desc": "CheckboxGroup 下所有 input[type=\"checkbox\"] 的 name 属性",
        "type": "string",
        "default": "-"
      },
    }
  }
}