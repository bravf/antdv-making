let commonProps = {
  placeholder: {
    desc: 'placeholder',
    type: 'string',
  }
}
export default {
  'a-input': {
    props: {
      ...commonProps,
      "addonAfter": {
        "desc": "带标签的 input，设置后置标签",
        "type": "string|slot",
        "default": ""
      },
      "addonBefore": {
        "desc": "带标签的 input，设置前置标签",
        "type": "string|slot",
        "default": ""
      },
      "defaultValue": {
        "desc": "输入框默认内容",
        "type": "string",
        "default": ""
      },
      "disabled": {
        "desc": "是否禁用状态，默认为 false",
        "type": "boolean",
        "default": "false"
      },
      "id": {
        "desc": "输入框的 id",
        "type": "string",
        "default": ""
      },
      "maxLength": {
        "desc": "最大长度",
        "type": "number",
        "default": ""
      },
      "prefix": {
        "desc": "带有前缀图标的 input",
        "type": "string|slot",
        "default": ""
      },
      "size": {
        "desc": "控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small",
        "type": ['large', 'default', 'small'],
        "default": "default"
      },
      "suffix": {
        "desc": "带有后缀图标的 input",
        "type": "string|slot",
        "default": ""
      },
      "type": {
        "desc": "声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type=\"textarea\")。",
        "type": "string",
        "default": "text"
      },
      "value(v-model)": {
        "desc": "输入框内容",
        "type": "string",
        "default": ""
      },
      "allowClear": {
        "desc": "可以点击清除图标删除内容",
        "type": "boolean",
        "default": ""
      }
    }
  },
  'a-input-number': {
    props: {
      ...commonProps,
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "defaultValue": {
        "desc": "初始值",
        "type": "number",
        "default": ""
      },
      "disabled": {
        "desc": "禁用",
        "type": "boolean",
        "default": "false"
      },
      "formatter": {
        "desc": "指定输入框展示值的格式",
        "type": "function(value: number | string): string",
        "default": "-"
      },
      "max": {
        "desc": "最大值",
        "type": "number",
        "default": "Infinity"
      },
      "min": {
        "desc": "最小值",
        "type": "number",
        "default": "-Infinity"
      },
      "parser": {
        "desc": "指定从 formatter 里转换回数字的方式，和 formatter 搭配使用",
        "type": "function( string): number",
        "default": "-"
      },
      "precision": {
        "desc": "数值精度",
        "type": "number",
        "default": "-"
      },
      "decimalSeparator": {
        "desc": "小数点",
        "type": "string",
        "default": "-"
      },
      "size": {
        "desc": "输入框大小",
        "type": ['small', 'large'],
        "default": "无"
      },
      "step": {
        "desc": "每次改变步数，可以为小数",
        "type": "number",
        "default": "1"
      },
      "value(v-model)": {
        "desc": "当前值",
        "type": "number",
        "default": ""
      }
    }
  },
  'a-textarea': {
    props: {
      ...commonProps,
      "autoSize": {
        "desc": "自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }",
        "type": "boolean|object",
        "default": "false"
      },
      "defaultValue": {
        "desc": "输入框默认内容",
        "type": "string",
        "default": ""
      },
      "value(v-model)": {
        "desc": "输入框内容",
        "type": "string",
        "default": ""
      },
      "allowClear": {
        "desc": "可以点击清除图标删除内容",
        "type": "boolean",
        "default": ""
      }
    }
  },
}