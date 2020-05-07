export default {
  'a-menu': {
    props: {
      "defaultOpenKeys": {
        "desc": "初始展开的 SubMenu 菜单项 key 数组",
        "type": "",
        "default": ""
      },
      "defaultSelectedKeys": {
        "desc": "初始选中的菜单项 key 数组",
        "type": "string[]",
        "default": ""
      },
      "forceSubMenuRender": {
        "desc": "在子菜单展示之前就渲染进 DOM",
        "type": "boolean",
        "default": "false"
      },
      "inlineCollapsed": {
        "desc": "inline 时菜单是否收起状态",
        "type": "boolean",
        "default": "-"
      },
      "inlineIndent": {
        "desc": "inline 模式的菜单缩进宽度",
        "type": "number",
        "default": "24"
      },
      "mode": {
        "desc": "菜单类型，现在支持垂直、水平、和内嵌模式三种",
        "type": ['vertical', 'vertical-right', 'horizontal', 'inline'],
        "default": "vertical"
      },
      "multiple": {
        "desc": "是否允许多选",
        "type": "boolean",
        "default": "false"
      },
      "openKeys(.sync)": {
        "desc": "当前展开的 SubMenu 菜单项 key 数组",
        "type": "string[]",
        "default": ""
      },
      "selectable": {
        "desc": "是否允许选中",
        "type": "boolean",
        "default": "true"
      },
      "selectedKeys(v-model)": {
        "desc": "当前选中的菜单项 key 数组",
        "type": "string[]",
        "default": ""
      },
      "subMenuCloseDelay": {
        "desc": "用户鼠标离开子菜单后关闭延时，单位：秒",
        "type": "number",
        "default": "0.1"
      },
      "subMenuOpenDelay": {
        "desc": "用户鼠标进入子菜单后开启延时，单位：秒",
        "type": "number",
        "default": "0"
      },
      "theme": {
        "desc": "主题颜色",
        "type": ['light', 'dark'],
        "default": "light"
      },
      "overflowedIndicator": {
        "desc": "自定义 Menu 折叠时的图标",
        "type": "DOM",
        "default": "<span>···</span>"
      }
    }
  },
  'a-sub-menu': {
    props: {
      "popupClassName": {
        "desc": "子菜单样式",
        "type": "string",
        "default": ""
      },
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "唯一标志",
        "type": "string",
        "default": ""
      },
      "title": {
        "desc": "子菜单项值",
        "type": "string|slot",
        "default": ""
      }
    }
  },
  'a-menu-item-group': {
    props: {
      "title": {
        "desc": "分组标题",
        "type": "string",
        "default": ""
      }
    }
  },
  'a-menu-item': {
    props: {
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "item 的唯一标志",
        "type": "string",
        "default": ""
      },
      "title": {
        "desc": "设置收缩时展示的悬浮标题",
        "type": "string",
        "default": ""
      }
    }
  },
}