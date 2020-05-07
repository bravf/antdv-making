export default {
  'a-tree': {
    props: {
      "blockNode": {
        "desc": "是否节点占据一行",
        "type": "boolean",
        "default": "false"
      },
      "treeData": {
        "desc": "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）",
        "type": "array<{key, title, children, [disabled, selectable]}>",
        "default": "--"
      },
      "replaceFields": {
        "desc": "替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段",
        "type": "object",
        "default": "{children:'children', title:'title', key:'key' }"
      },
      "autoExpandParent": {
        "desc": "是否自动展开父节点",
        "type": "boolean",
        "default": "true"
      },
      "checkable": {
        "desc": "节点前添加 Checkbox 复选框",
        "type": "boolean",
        "default": "false"
      },
      "checkedKeys(v-model)": {
        "desc": "（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联",
        "type": "string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}",
        "default": "[]"
      },
      "checkStrictly": {
        "desc": "checkable 状态下节点选择完全受控（父子节点选中状态不再关联）",
        "type": "boolean",
        "default": "false"
      },
      "defaultCheckedKeys": {
        "desc": "默认选中复选框的树节点",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "defaultExpandAll": {
        "desc": "默认展开所有树节点",
        "type": "boolean",
        "default": "false"
      },
      "defaultExpandedKeys": {
        "desc": "默认展开指定的树节点",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "defaultExpandParent": {
        "desc": "默认展开父节点",
        "type": "bool",
        "default": "true"
      },
      "defaultSelectedKeys": {
        "desc": "默认选中的树节点",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "disabled": {
        "desc": "将树禁用",
        "type": "bool",
        "default": "false"
      },
      "draggable": {
        "desc": "设置节点可拖拽",
        "type": "boolean",
        "default": "false"
      },
      "expandedKeys(.sync)": {
        "desc": "（受控）展开指定的树节点",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "filterTreeNode": {
        "desc": "按需筛选树节点（高亮），返回 true",
        "type": "function(node)",
        "default": "-"
      },
      "loadData": {
        "desc": "异步加载数据",
        "type": "function(node)",
        "default": "-"
      },
      "loadedKeys": {
        "desc": "（受控）已经加载的节点，需要配合 loadData 使用",
        "type": "string[] | number[]",
        "default": "[]"
      },
      "multiple": {
        "desc": "支持点选多个节点（节点本身）",
        "type": "boolean",
        "default": "false"
      },
      "selectable": {
        "desc": "是否可选中",
        "type": "boolean",
        "default": "true"
      },
      "selectedKeys": {
        "desc": "（受控）设置选中的树节点",
        "type": "string[] | number[]",
        "default": "-"
      },
      "showIcon": {
        "desc": "是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式",
        "type": "boolean",
        "default": "false"
      },
      "switcherIcon": {
        "desc": "自定义树节点的展开/折叠图标",
        "type": "slot",
        "default": "-"
      },
      "showLine": {
        "desc": "是否展示连接线",
        "type": "boolean",
        "default": "false"
      }
    }
  },
  'a-tree-node': {
    props: {
      "class": {
        "desc": "节点的 class",
        "type": "string",
        "default": "-"
      },
      "style": {
        "desc": "节点的 style",
        "type": "string|object",
        "default": "-"
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
        "desc": "禁掉响应",
        "type": "boolean",
        "default": "false"
      },
      "isLeaf": {
        "desc": "设置为叶子节点(设置了loadData时有效)",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！",
        "type": "string | number",
        "default": "内部计算出的节点位置"
      },
      "selectable": {
        "desc": "设置节点是否可被选中",
        "type": "boolean",
        "default": "true"
      },
      "title": {
        "desc": "标题",
        "type": "string|slot|slot-scope",
        "default": "'---'"
      },
      "slots": {
        "desc": "使用 treeNodes 时，可以通过该属性配置支持 slot 的属性，如 slots: { title: 'XXX'}",
        "type": "object",
        "default": "-"
      },
    }
  },
  'a-directory-tree': {
    props: {
      "expandAction": {
        "desc": "目录展开逻辑，可选 false 'click' 'dblclick'",
        "type": ['false', 'click', 'dblclick'],
        "default": "click"
      }
    }
  }
}