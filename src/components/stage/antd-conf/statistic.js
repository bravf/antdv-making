export default {
  'a-statistic': {
    props: {
      "decimalSeparator": {
        "desc": "设置小数点",
        "type": "string",
        "default": "."
      },
      "formatter": {
        "desc": "自定义数值展示",
        "type": "v-slot | ({h, value}) => VNode",
        "default": "-"
      },
      "groupSeparator": {
        "desc": "设置千分位标识符",
        "type": "string",
        "default": ","
      },
      "precision": {
        "desc": "数值精度",
        "type": "number",
        "default": "-"
      },
      "prefix": {
        "desc": "设置数值的前缀",
        "type": "string | v-slot",
        "default": "-"
      },
      "suffix": {
        "desc": "设置数值的后缀",
        "type": "string | v-slot",
        "default": "-"
      },
      "title": {
        "desc": "数值的标题",
        "type": "string | v-slot",
        "default": "-"
      },
      "value": {
        "desc": "数值内容",
        "type": "string | number",
        "default": "-"
      },
      "valueStyle": {
        "desc": "设置数值的样式",
        "type": "style",
        "default": "-"
      }
    }
  },
  'a-statistic-countdown': {
    props: {
      "format": {
        "desc": "格式化倒计时展示，参考 moment",
        "type": "string",
        "default": "'HH:mm:ss'"
      },
      "prefix": {
        "desc": "设置数值的前缀",
        "type": "string | v-slot",
        "default": "-"
      },
      "suffix": {
        "desc": "设置数值的后缀",
        "type": "string | v-slot",
        "default": "-"
      },
      "title": {
        "desc": "数值的标题",
        "type": "string | v-slot",
        "default": "-"
      },
      "value": {
        "desc": "数值内容",
        "type": "number | moment",
        "default": "-"
      },
      "valueStyle": {
        "desc": "设置数值的样式",
        "type": "style",
        "default": "-"
      }
    }
  }
}