export default {
  'a-skeleton': {
    props: {
      "active": {
        "desc": "是否展示动画效果",
        "type": "boolean",
        "default": "false"
      },
      "avatar": {
        "desc": "是否显示头像占位图",
        "type": "boolean",
        "default": "false"
      },
      "loading": {
        "desc": "为 true 时，显示占位图。反之则直接展示子组件",
        "type": "boolean",
        "default": "-"
      },
      "paragraph": {
        "desc": "是否显示段落占位图",
        "type": "boolean",
        "default": "true"
      },
      "title": {
        "desc": "是否显示标题占位图",
        "type": "boolean",
        "default": "true"
      }
    }
  }
}
