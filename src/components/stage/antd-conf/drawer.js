export default {
  'a-drawer': {
    props: {
      "closable": {
        "desc": "是否显示右上角的关闭按钮",
        "type": "boolean",
        "default": "true"
      },
      "destroyOnClose": {
        "desc": "关闭时销毁 Drawer 里的子元素",
        "type": "boolean",
        "default": "false"
      },
      "getContainer": {
        "desc": "指定 Drawer 挂载的 HTML 节点",
        "type": "HTMLElement | () => HTMLElement | Selectors",
        "default": "'body'"
      },
      "maskClosable": {
        "desc": "点击蒙层是否允许关闭",
        "type": "boolean",
        "default": "true"
      },
      "mask": {
        "desc": "是否展示遮罩",
        "type": "Boolean",
        "default": "true"
      },
      "maskStyle": {
        "desc": "遮罩样式",
        "type": "object",
        "default": "{}"
      },
      "title": {
        "desc": "标题",
        "type": "string | slot",
        "default": "-"
      },
      "visible": {
        "desc": "Drawer 是否可见",
        "type": "boolean",
        "default": "-"
      },
      "wrapClassName": {
        "desc": "对话框外层容器的类名",
        "type": "string",
        "default": "-"
      },
      "wrapStyle": {
        "desc": "可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask",
        "type": "object",
        "default": "-"
      },
      "drawerStyle": {
        "desc": "用于设置 Drawer 弹出层的样式",
        "type": "object",
        "default": "-"
      },
      "headerStyle": {
        "desc": "用于设置 Drawer 头部的样式",
        "type": "object",
        "default": "-"
      },
      "bodyStyle": {
        "desc": "可用于设置 Drawer 内容部分的样式",
        "type": "object",
        "default": "-"
      },
      "width": {
        "desc": "宽度",
        "type": "string | number",
        "default": "256"
      },
      "height": {
        "desc": "高度, 在 placement 为 top 或 bottom 时使用",
        "type": "string | number",
        "default": "256"
      },
      "zIndex": {
        "desc": "设置 Drawer 的 z-index",
        "type": "Number",
        "default": "1000"
      },
      "placement": {
        "desc": "抽屉的方向",
        "type": ['top', 'right', 'bottom', 'left'],
        "default": "'right'"
      },
      "handle": {
        "desc": "设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭",
        "type": "VNode | slot",
        "default": "-"
      },
      "afterVisibleChange": {
        "desc": "切换抽屉时动画结束后的回调",
        "type": "function(visible)",
        "default": "无"
      },
      "keyboard": {
        "desc": "是否支持键盘 esc 关闭",
        "type": "boolean",
        "default": "true"
      }
    }
  }
}