export default {
  'a-timeline': {
    props: {
      "pending": {
        "desc": "指定最后一个幽灵节点是否存在或内容",
        "type": "boolean|string|slot",
        "default": "false"
      },
      "pendingDot": {
        "desc": "当最后一个幽灵节点存在時，指定其时间图点",
        "type": "string|slot",
        "default": "<Icon type=\"loading\" />"
      },
      "reverse": {
        "desc": "节点排序",
        "type": "boolean",
        "default": "false"
      },
      "mode": {
        "desc": "通过设置 mode 可以改变时间轴和内容的相对位置",
        "type": ['left', 'alternate', 'right'],
        "default": ""
      }
    }
  },
  'a-timeline-item': {
    props: {
      "color": {
        "desc": "指定圆圈颜色 blue, red, green，或自定义的色值",
        "type": ['blue', 'red', 'green'],
        "default": "blue"
      },
      "dot": {
        "desc": "自定义时间轴点",
        "type": "string|slot",
        "default": "-"
      },
      "position": {
        "desc": "自定义节点位置",
        "type": "left | right",
        "default": "-"
      }
    }
  }
}