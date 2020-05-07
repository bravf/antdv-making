export default {
  'a-avatar': {
    props: {
      "icon": {
        "desc": "设置头像的图标类型，可设为 Icon 的 type 或 VNode",
        "type": "string",
        "default": "-"
      },
      "shape": {
        "desc": "指定头像的形状",
        "type": ['circle', 'square'],
        "default": "circle"
      },
      "size": {
        "desc": "设置头像的大小",
        "type": ['large', 'small', 'default'],
        "default": "default"
      },
      "src": {
        "desc": "图片类头像的资源地址",
        "type": "string",
        "default": "-"
      },
      "srcSet": {
        "desc": "设置图片类头像响应式资源地址",
        "type": "string",
        "default": "-"
      },
      "alt": {
        "desc": "图像无法显示时的替代文本",
        "type": "string",
        "default": "-"
      }
    }
  }
}