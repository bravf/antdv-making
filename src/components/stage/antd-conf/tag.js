export default {
  'a-tag': {
    props: {
      "afterClose": {
        "desc": "关闭动画完成后的回调",
        "type": "() => void",
        "default": "-"
      },
      "closable": {
        "desc": "标签是否可以关闭",
        "type": "boolean",
        "default": "false"
      },
      "color": {
        "desc": "标签色",
        "type": "string",
        "default": "-"
      },
      "visible(v-model)": {
        "desc": "是否显示标签",
        "type": "boolean",
        "default": "true"
      }
    }
  },
  'a-checkable-tag': {
  }
}