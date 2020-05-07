export default {
  'a-auto-complete': {
    props: {
      "allowClear": {
        "desc": "支持清除, 单选模式有效",
        "type": "boolean",
        "default": "false"
      },
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "backfill": {
        "desc": "使用键盘选择选项的时候把选中项回填到输入框中",
        "type": "boolean",
        "default": "false"
      },
      "defaultActiveFirstOption": {
        "desc": "是否默认高亮第一个选项。",
        "type": "boolean",
        "default": "true"
      },
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "filterOption": {
        "desc": "是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。",
        "type": "boolean",
        "default": "true"
      },
      "optionLabelProp": {
        "desc": "回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。",
        "type": "string",
        "default": "children"
      },
      "placeholder": {
        "desc": "输入框提示",
        "type": "string",
        "default": "-"
      },
      "value(v-model)": {
        "desc": "指定当前选中的条目",
        "type": "string",
        "default": "无"
      },
      "defaultOpen": {
        "desc": "是否默认展开下拉菜单",
        "type": "boolean",
        "default": "-"
      },
      "open": {
        "desc": "是否展开下拉菜单",
        "type": "boolean",
        "default": "-"
      }
    }
  }
}