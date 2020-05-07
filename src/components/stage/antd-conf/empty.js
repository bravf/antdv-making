export default {
  'a-empty': {
    props: {
      "description": {
        "desc": "自定义描述内容",
        "type": "string | v-slot",
        "default": "-"
      },
      "imageStyle": {
        "desc": "图片样式",
        "type": "CSSProperties",
        "default": "-"
      },
      "image": {
        "desc": "设置显示图片，为 string 时表示自定义图片地址",
        "type": "string | v-slot",
        "default": "false"
      }
    }
  }
}