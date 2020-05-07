export default {
  'a-comment': {
    props: {
      "author": {
        "desc": "要显示为注释作者的元素",
        "type": "string|slot",
        "default": "-"
      },
      "avatar": {
        "desc": "要显示为评论头像的元素 - 通常是 antd Avatar 或者 src",
        "type": "string|slot",
        "default": "-"
      },
      "content": {
        "desc": "评论的主要内容",
        "type": "string|slot",
        "default": "-"
      },
      "datetime": {
        "desc": "展示时间描述",
        "type": "string|slot",
        "default": "-"
      }
    }
  }
}