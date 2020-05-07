export default {
  'a-badge': {
    props: {
      "color": {
        "desc": "自定义小圆点的颜色",
        "type": "string",
        "default": "-"
      },
      "count": {
        "desc": "展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏",
        "type": "number",
        "default": ""
      },
      "dot": {
        "desc": "不展示数字，只有一个小红点",
        "type": "boolean",
        "default": "false"
      },
      "offset": {
        "desc": "设置状态点的位置偏移，格式为 [x, y]",
        "type": "string",
        "default": "-"
      },
      "overflowCount": {
        "desc": "展示封顶的数字值",
        "type": "number",
        "default": "99"
      },
      "showZero": {
        "desc": "当数值为 0 时，是否展示 Badge",
        "type": "boolean",
        "default": "false"
      },
      "status": {
        "desc": "设置 Badge 为状态点",
        "type": ['success', 'processing', 'default', 'error', 'warning'],
        "default": "''"
      },
      "text": {
        "desc": "在设置了 status 的前提下有效，设置状态点的文本",
        "type": "string",
        "default": "''"
      },
      "numberStyle": {
        "desc": "设置状态点的样式",
        "type": "object",
        "default": "''"
      },
      "title": {
        "desc": "设置鼠标放在状态点上时显示的文字",
        "type": "string",
        "default": "count"
      }
    }
  }
}