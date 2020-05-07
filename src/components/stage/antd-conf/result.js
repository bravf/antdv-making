export default {
  'a-result': {
    props: {
      "title": {
        "desc": "title 文字",
        "type": "string | VNode | v-slot:title",
        "default": "-"
      },
      "subTitle": {
        "desc": "subTitle 文字",
        "type": "string | VNode | v-slot:subTitle",
        "default": "-"
      },
      "status": {
        "desc": "结果的状态,决定图标和颜色",
        "type": ['success', 'error', 'info', 'warning','404' ,'403', '500'],
        "default": "'info'"
      },
      "icon": {
        "desc": "自定义 icon",
        "type": "v-slot:icon",
        "default": "-"
      },
      "extra": {
        "desc": "操作区",
        "type": "v-slot:extra",
        "default": "-"
      }
    }
  }
}