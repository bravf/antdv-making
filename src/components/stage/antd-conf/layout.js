export default {
  'a-layout': {
    props: {
      "class": {
        "desc": "容器 class",
        "type": "string",
        "default": "-"
      },
      "style": {
        "desc": "指定样式",
        "type": "object",
        "default": "-"
      },
      "hasSider": {
        "desc": "表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动",
        "type": "boolean",
        "default": "-"
      }
    }
  },
  'a-layout-header': {},
  'a-layout-content': {},
  'a-layout-sider': {
    props: {
      "breakpoint": {
        "desc": "触发响应式布局的断点",
        "type": ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        "default": "-"
      },
      "class": {
        "desc": "容器 class",
        "type": "string",
        "default": "-"
      },
      "collapsed(v-model)": {
        "desc": "当前收起状态",
        "type": "boolean",
        "default": "-"
      },
      "collapsedWidth": {
        "desc": "收缩宽度，设置为 0 会出现特殊 trigger",
        "type": "number",
        "default": "80"
      },
      "collapsible": {
        "desc": "是否可收起",
        "type": "boolean",
        "default": "false"
      },
      "defaultCollapsed": {
        "desc": "是否默认收起",
        "type": "boolean",
        "default": "false"
      },
      "reverseArrow": {
        "desc": "翻转折叠提示箭头的方向，当 Sider 在右边时可以使用",
        "type": "boolean",
        "default": "false"
      },
      "style": {
        "desc": "指定样式",
        "type": "object|string",
        "default": "-"
      },
      "theme": {
        "desc": "主题颜色",
        "type": ['light', 'dark'],
        "default": "dark"
      },
      "trigger": {
        "desc": "自定义 trigger，设置为 null 时隐藏 trigger",
        "type": "string|slot",
        "default": "-"
      },
      "width": {
        "desc": "宽度",
        "type": "number",
        "default": "200"
      },
      "zeroWidthTriggerStyle": {
        "desc": "指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式",
        "type": "object",
        "default": "-"
      }
    },
  },
}