export default {
  'a-divider': {
    props: {
      "dashed": {
        "desc": "是否虚线",
        "type": "Boolean",
        "default": "false"
      },
      "orientation": {
        "desc": "分割线标题的位置",
        "type": ['left', 'right'],
        "default": "center"
      },
      "type": {
        "desc": "水平还是垂直类型",
        "type": ['horizontal', 'vertical'],
        "default": "horizontal"
      }
    }
  }
}