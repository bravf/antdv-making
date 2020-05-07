export default {
  'a-tree-select': {
    props: {
      "allowClear": {
        "desc": "显示清除按钮",
        "type": "boolean",
        "default": "false"
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
      "dropdownStyle": {
        "desc": "下拉菜单的样式",
        "type": "object",
        "default": "-"
      },
      "labelInValue": {
        "desc": "是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式",
        "type": "boolean",
        "default": "false"
      },
      "maxTagCount": {
        "desc": "最多显示多少个 tag",
        "type": "number",
        "default": "-"
      },
      "multiple": {
        "desc": "支持多选（当设置 treeCheckable 时自动变为 true）",
        "type": "boolean",
        "default": "false"
      },
      "placeholder": {
        "desc": "选择框默认文字",
        "type": "string",
        "default": "-"
      },
      "searchPlaceholder": {
        "desc": "搜索框默认文字",
        "type": "string",
        "default": "-"
      },
      "searchValue": {
        "desc": "搜索框的值，可以通过 search 事件获取用户输入",
        "type": "string",
        "default": "-"
      },
      "treeIcon": {
        "desc": "是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",
        "type": "boolean",
        "default": "false"
      },
      "showSearch": {
        "desc": "在下拉中显示搜索框(仅在单选模式下生效)",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "选择框大小，可选 large small",
        "type": ['large', 'small'],
        "default": "'default'"
      },
      "treeCheckable": {
        "desc": "显示 checkbox",
        "type": "boolean",
        "default": "false"
      },
      "treeCheckStrictly": {
        "desc": "checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true",
        "type": "boolean",
        "default": "false"
      },
      "treeDefaultExpandAll": {
        "desc": "默认展开所有树节点",
        "type": "boolean",
        "default": "false"
      },
      "treeNodeFilterProp": {
        "desc": "输入项过滤对应的 treeNode 属性",
        "type": "string",
        "default": "'value'"
      },
      "treeNodeLabelProp": {
        "desc": "作为显示的 prop 设置",
        "type": "string",
        "default": "'title'"
      },
    }
  },
  'a-tree-node': {
    props: {
      "selectable": {
        "desc": "是否可选",
        "type": "boolean",
        "default": "true"
      },
      "checkable": {
        "desc": "当树为 checkable 时，设置独立节点是否展示 Checkbox",
        "type": "boolean",
        "default": "-"
      },
      "disableCheckbox": {
        "desc": "禁掉 checkbox",
        "type": "boolean",
        "default": "false"
      },
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "isLeaf": {
        "desc": "是否是叶子节点",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "此项必须设置（其值在整个树范围内唯一）",
        "type": "string",
        "default": "-"
      },
      "title": {
        "desc": "树节点显示的内容",
        "type": "string",
        "default": "'---'"
      },
      "value": {
        "desc": "默认根据此属性值进行筛选（其值在整个树范围内唯一）",
        "type": "string",
        "default": "-"
      },
    }
  }
}