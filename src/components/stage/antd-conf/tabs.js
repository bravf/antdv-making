export default {
  'a-tabs': {
    props: {
      "activeKey(v-model)": {
        "desc": "当前激活 tab 面板的 key",
        "type": "string",
        "default": "无"
      },
      "animated": {
        "desc": "是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效",
        "type": "boolean | {inkBar:boolean, tabPane:boolean}",
        "default": "true, 当 type=\"card\" 时为 false"
      },
      "defaultActiveKey": {
        "desc": "初始化选中面板的 key，如果没有设置 activeKey",
        "type": "string",
        "default": "第一个面板"
      },
      "hideAdd": {
        "desc": "是否隐藏加号图标，在 type=\"editable-card\" 时有效",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "大小，提供 large default 和 small 三种大小",
        "type": ['small', 'large'],
        "default": "'default'"
      },
      "tabBarExtraContent": {
        "desc": "tab bar 上额外的元素",
        "type": "slot",
        "default": "无"
      },
      "tabBarStyle": {
        "desc": "tab bar 的样式对象",
        "type": "object",
        "default": "-"
      },
      "tabPosition": {
        "desc": "页签位置，可选值有 top right bottom left",
        "type": ['top', 'right', 'bottom', 'left'],
        "default": "'top'"
      },
      "type": {
        "desc": "页签的基本样式，可选 line、card editable-card 类型",
        "type": ['line', 'card', 'editable-card'],
        "default": "'line'"
      },
      "tabBarGutter": {
        "desc": "tabs 之间的间隙",
        "type": "number",
        "default": "无"
      }
    }
  },
  'a-tab-pane': {
    props: {
      "forceRender": {
        "desc": "被隐藏时是否渲染 DOM 结构",
        "type": "boolean",
        "default": "false"
      },
      "key": {
        "desc": "对应 activeKey",
        "type": "string",
        "default": "无"
      },
      "tab": {
        "desc": "选项卡头显示文字",
        "type": "string|slot",
        "default": "无"
      }
    }
  },
}