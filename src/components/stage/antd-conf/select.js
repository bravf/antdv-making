export default {
  'a-select': {
    props: {
      "allowClear": {
        "desc": "支持清除",
        "type": "boolean",
        "default": "false"
      },
      "autoClearSearchValue": {
        "desc": "是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。",
        "type": "boolean",
        "default": "true"
      },
      "autoFocus": {
        "desc": "默认获取焦点",
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
      "dropdownClassName": {
        "desc": "下拉菜单的 className 属性",
        "type": "string",
        "default": "-"
      },
      "dropdownMatchSelectWidth": {
        "desc": "下拉菜单和选择器同宽",
        "type": "boolean",
        "default": "true"
      },
      "filterOption": {
        "desc": "是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。",
        "type": "boolean",
        "default": "true"
      },
      "labelInValue": {
        "desc": "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式",
        "type": "boolean",
        "default": "false"
      },
      "maxTagCount": {
        "desc": "最多显示多少个 tag",
        "type": "number",
        "default": "-"
      },
      "maxTagTextLength": {
        "desc": "最大显示的 tag 文本长度",
        "type": "number",
        "default": "-"
      },
      "mode": {
        "desc": "设置 Select 的模式为多选或标签",
        "type": ['default', 'multiple', 'tags', 'combobox'],
        "default": "-"
      },
      "notFoundContent": {
        "desc": "当下拉列表为空时显示的内容",
        "type": "string",
        "default": "'Not Found'"
      },
      "optionFilterProp": {
        "desc": "搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索",
        "type": "string",
        "default": "value"
      },
      "optionLabelProp": {
        "desc": "回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。",
        "type": "string",
        "default": "children （combobox 模式下为 value）"
      },
      "placeholder": {
        "desc": "选择框默认文字",
        "type": "string",
        "default": "-"
      },
      "showSearch": {
        "desc": "使单选模式可搜索",
        "type": "boolean",
        "default": "false"
      },
      "showArrow": {
        "desc": "是否显示下拉小箭头",
        "type": "boolean",
        "default": "true"
      },
      "size": {
        "desc": "选择框大小，可选 large small",
        "type": ['large', 'default', 'small'],
        "default": "default"
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
  },
  'a-select-option': {
    props: {
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置",
        "type": "string",
        "default": ""
      },
      "title": {
        "desc": "选中该 Option 后，Select 的 title",
        "type": "string",
        "default": "-"
      },
      "value": {
        "desc": "默认根据此属性值进行筛选",
        "type": "string",
        "default": "-"
      },
      "class": {
        "desc": "Option 器类名",
        "type": "string",
        "default": "-"
      }
    }
  },
  'a-select-opt-group': {
    props: {
      "key": {
        "desc": "",
        "type": "string",
        "default": "-"
      },
      "label": {
        "desc": "组名",
        "type": "string",
        "default": "无"
      }
    }
  },
}