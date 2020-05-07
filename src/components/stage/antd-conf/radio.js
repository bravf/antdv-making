let radio = {
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
  "value": {
    "desc": "根据 value 进行比较，判断是否选中",
    "type": "any",
    "default": "-"
  }
}
export default {
  'a-radio': {
    props: {
      ...radio,
    }
  },
  'a-radio-button': {
    ...radio,
  },
  'a-radio-group': {
    props: {
      "defaultValue": {
        "desc": "默认选中的值",
        "type": "any",
        "default": "-"
      },
      "disabled": {
        "desc": "禁选所有子单选器",
        "type": "boolean",
        "default": "false"
      },
      "name": {
        "desc": "RadioGroup 下所有 input[type=\"radio\"] 的 name 属性",
        "type": "string",
        "default": "-"
      },
      "size": {
        "desc": "大小，只对按钮样式生效",
        "type": ['large', 'default', 'small'],
        "default": "default"
      },
      "buttonStyle": {
        "desc": "RadioButton 的风格样式，目前有描边和填色两种风格",
        "type": ['outline', 'solid'],
        "default": "outline"
      }
    }
  }
}