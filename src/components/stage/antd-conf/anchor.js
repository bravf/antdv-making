export default {
  'a-anchor': {
    props: {
      "affix": {
        "desc": "固定模式",
        "type": "boolean",
        "default": "true"
      },
      "bounds": {
        "desc": "锚点区域边界",
        "type": "number",
        "default": "5(px)"
      },
      "offsetBottom": {
        "desc": "距离窗口底部达到指定偏移量后触发",
        "type": "number",
        "default": ""
      },
      "offsetTop": {
        "desc": "距离窗口顶部达到指定偏移量后触发",
        "type": "number",
        "default": ""
      },
      "showInkInFixed": {
        "desc": "固定模式是否显示小圆点",
        "type": "boolean",
        "default": "false"
      },
      "wrapperClass": {
        "desc": "容器的类名",
        "type": "string",
        "default": "-"
      },
      "wrapperStyle": {
        "desc": "容器样式",
        "type": "object",
        "default": "-"
      },
      "targetOffset": {
        "desc": "锚点滚动偏移量，默认与 offsetTop 相同，例子",
        "type": "number",
        "default": "offsetTop"
      }
    }
  },
  'a-anchor-link': {
    props: {
      "href": {
        "desc": "锚点链接",
        "type": "string",
        "default": ""
      },
      "title": {
        "desc": "文字内容",
        "type": "string|slot",
        "default": ""
      },
      "target": {
        "desc": "该属性指定在何处显示链接的资源。",
        "type": "string",
        "default": ""
      }
    }
  }
}