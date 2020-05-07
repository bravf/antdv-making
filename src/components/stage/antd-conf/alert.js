export default {
  'a-alert': {
    props: {
      "afterClose": {
        "desc": "关闭动画结束后触发的回调函数",
        "type": "() => void",
        "default": "-"
      },
      "banner": {
        "desc": "是否用作顶部公告",
        "type": "boolean",
        "default": "false"
      },
      "closable": {
        "desc": "默认不显示关闭按钮",
        "type": "boolean",
        "default": "无"
      },
      "closeText": {
        "desc": "自定义关闭按钮",
        "type": "string|slot",
        "default": "无"
      },
      "description": {
        "desc": "警告提示的辅助性文字介绍",
        "type": "string|slot",
        "default": "无"
      },
      "icon": {
        "desc": "自定义图标，showIcon 为 true 时有效",
        "type": "vnode | slot",
        "default": "-"
      },
      "message": {
        "desc": "警告提示内容",
        "type": "string|slot",
        "default": "无"
      },
      "showIcon": {
        "desc": "是否显示辅助图标",
        "type": "boolean",
        "default": "false，banner 模式下默认值为 true"
      },
      "type": {
        "desc": "指定警告提示的样式，有四种选择 success、info、warning、error",
        "type": ['success', 'info', 'warning', 'error'],
        "default": "info，banner 模式下默认值为 warning"
      }
    }
  }
}