export default {
  'a-spin': {
    props: {
      "delay": {
        "desc": "延迟显示加载效果的时间（防止闪烁）",
        "type": "number (毫秒)",
        "default": "-"
      },
      "indicator": {
        "desc": "加载指示符",
        "type": "vNode | slot",
        "default": "-"
      },
      "size": {
        "desc": "组件大小，可选值为 small default large",
        "type": ['small', 'default', 'large'],
        "default": "'default'"
      },
      "spinning": {
        "desc": "是否为加载中状态",
        "type": "boolean",
        "default": "true"
      },
      "tip": {
        "desc": "当作为包裹元素时，可以自定义描述文案",
        "type": "string",
        "default": "-"
      },
      "wrapperClassName": {
        "desc": "包装器的类属性",
        "type": "string",
        "default": "-"
      }
    }
  }
}