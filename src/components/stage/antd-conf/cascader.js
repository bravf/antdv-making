export default {
  'a-cascader': {
    props: {
      "allowClear": {
        "desc": "是否支持清除",
        "type": "boolean",
        "default": "true"
      },
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "changeOnSelect": {
        "desc": "当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示",
        "type": "boolean",
        "default": "false"
      },
      "defaultValue": {
        "desc": "默认的选中项",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "disabled": {
        "desc": "禁用",
        "type": "boolean",
        "default": "false"
      },
      "expandTrigger": {
        "desc": "次级菜单的展开方式，可选 'click' 和 'hover'",
        "type": ['click', 'hover'],
        "default": "'click'"
      },
      "notFoundContent": {
        "desc": "当下拉列表为空时显示的内容",
        "type": "string",
        "default": "'Not Found'"
      },
      "placeholder": {
        "desc": "输入框占位文本",
        "type": "string",
        "default": "'请选择'"
      },
      "popupClassName": {
        "desc": "自定义浮层类名",
        "type": "string",
        "default": "-"
      },
      "popupPlacement": {
        "desc": "浮层预设位置：bottomLeft bottomRight topLeft topRight",
        "type": ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
        "default": "bottomLeft"
      },
      "popupVisible": {
        "desc": "控制浮层显隐",
        "type": "boolean",
        "default": "-"
      },
      "showSearch": {
        "desc": "在选择框中显示搜索框",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "输入框大小，可选 large default small",
        "type": ['large', 'default', 'small'],
        "default": "default"
      },
      "suffixIcon": {
        "desc": "自定义的选择框后缀图标",
        "type": "string",
        "default": "-"
      },
    }
  }
}