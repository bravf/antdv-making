export default {
  'a-modal': {
    props: {
      "afterClose": {
        "desc": "Modal 完全关闭后的回调",
        "type": "function",
        "default": "无"
      },
      "bodyStyle": {
        "desc": "Modal body 样式",
        "type": "object",
        "default": "{}"
      },
      "cancelText": {
        "desc": "取消按钮文字",
        "type": "string| slot",
        "default": "取消"
      },
      "centered": {
        "desc": "垂直居中展示 Modal",
        "type": "Boolean",
        "default": "false"
      },
      "closable": {
        "desc": "是否显示右上角的关闭按钮",
        "type": "boolean",
        "default": "true"
      },
      "closeIcon": {
        "desc": "自定义关闭图标",
        "type": "VNode | slot",
        "default": "-"
      },
      "confirmLoading": {
        "desc": "确定按钮 loading",
        "type": "boolean",
        "default": "无"
      },
      "destroyOnClose": {
        "desc": "关闭时销毁 Modal 里的子元素",
        "type": "boolean",
        "default": "false"
      },
      "footer": {
        "desc": "底部内容，当不需要默认底部按钮时，可以设为 :footer=\"null\"",
        "type": "string|slot",
        "default": "确定取消按钮"
      },
      "forceRender": {
        "desc": "强制渲染 Modal",
        "type": "boolean",
        "default": "false"
      },
      "getContainer": {
        "desc": "指定 Modal 挂载的 HTML 节点",
        "type": "(instance): HTMLElement",
        "default": "() => document.body"
      },
      "keyboard": {
        "desc": "是否支持键盘 esc 关闭",
        "type": "boolean",
        "default": "true"
      },
      "mask": {
        "desc": "是否展示遮罩",
        "type": "Boolean",
        "default": "true"
      },
      "maskClosable": {
        "desc": "点击蒙层是否允许关闭",
        "type": "boolean",
        "default": "true"
      },
      "maskStyle": {
        "desc": "遮罩样式",
        "type": "object",
        "default": "{}"
      },
      "okText": {
        "desc": "确认按钮文字",
        "type": "string|slot",
        "default": "确定"
      },
      "okType": {
        "desc": "确认按钮类型",
        "type": "string",
        "default": "primary"
      },
      "okButtonProps": {
        "desc": "ok 按钮 props, 遵循 jsx规范",
        "type": "{props: ButtonProps, on: {}}",
        "default": "-"
      },
      "cancelButtonProps": {
        "desc": "cancel 按钮 props, 遵循 jsx规范",
        "type": "{props: ButtonProps, on: {}}",
        "default": "-"
      },
      "title": {
        "desc": "标题",
        "type": "string|slot",
        "default": "无"
      },
      "visible": {
        "desc": "对话框是否可见",
        "type": "boolean",
        "default": "无"
      },
      "width": {
        "desc": "宽度",
        "type": "string|number",
        "default": "520"
      },
      "wrapClassName": {
        "desc": "对话框外层容器的类名",
        "type": "string",
        "default": "-"
      },
      "zIndex": {
        "desc": "设置 Modal 的 z-index",
        "type": "number",
        "default": "1000"
      }
    }
  }
}