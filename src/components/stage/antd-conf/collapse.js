export default {
  'a-collapse': {
    props: {
      "activeKey": {
        "desc": "当前激活 tab 面板的 key",
        "type": "string[]|string",
        "default": "默认无，accordion 模式下默认第一个元素"
      },
      "defaultActiveKey": {
        "desc": "初始化选中面板的 key",
        "type": "string",
        "default": "无"
      },
      "bordered": {
        "desc": "带边框风格的折叠面板",
        "type": "boolean",
        "default": "true"
      },
      "accordion": {
        "desc": "手风琴模式",
        "type": "boolean",
        "default": "false"
      },
      "expandIcon": {
        "desc": "自定义切换图标",
        "type": "Function(props):VNode | slot=\"expandIcon\" slot-scope=\"props\"|v-slot:expandIcon=\"props\"",
        "default": ""
      },
      "expandIconPosition": {
        "desc": "设置图标位置： left, right",
        "type": ['left', 'right'],
        "default": "-"
      },
      "destroyInactivePanel": {
        "desc": "销毁折叠隐藏的面板",
        "type": "boolean",
        "default": "false"
      }
    }
  },
  'a-collapse-panel': {
    props: {
      "disabled": {
        "desc": "禁用后的面板展开与否将无法通过用户交互改变",
        "type": "boolean",
        "default": "false"
      },
      "forceRender": {
        "desc": "被隐藏时是否渲染 DOM 结构",
        "type": "boolean",
        "default": "false"
      },
      "header": {
        "desc": "面板头内容",
        "type": "string|slot",
        "default": "无"
      },
      "key": {
        "desc": "对应 activeKey",
        "type": "string",
        "default": "无"
      },
      "showArrow": {
        "desc": "是否展示当前面板上的箭头",
        "type": "boolean",
        "default": "true"
      },
      "extra": {
        "desc": "自定义渲染每个面板右上角的内容",
        "type": "VNode | slot",
        "default": "-"
      }
    }
  }
}