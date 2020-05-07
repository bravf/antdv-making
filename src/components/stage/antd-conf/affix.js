export default {
  'a-affix': {
    props: {
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
      "target": {
        "desc": "设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数",
        "type": "() => HTMLElement",
        "default": "() => window"
      }
    }
  }
}