let commonProps = {
  "allowClear": {
    "desc": "是否显示清除按钮",
    "type": "boolean",
    "default": "true"
  },
  "autoFocus": {
    "desc": "自动获取焦点",
    "type": "boolean",
    "default": "false"
  },
  "disabled": {
    "desc": "禁用",
    "type": "boolean",
    "default": "false"
  },
  "mode": {
    "desc": "日期面板的状态（设置后无法选择年份/月份？）",
    "type": ['time', 'date', 'month', 'year', 'decade'],
    "default": "'date'"
  },
  "open": {
    "desc": "控制弹层是否展开",
    "type": "boolean",
    "default": "-"
  },
  "placeholder": {
    "desc": "输入框提示文字",
    "type": "string",
    "default": "-"
  },
  "dropdownClassName": {
    "desc": "额外的弹出日历 className",
    "type": "string",
    "default": "-"
  },
  "size": {
    "desc": "输入框大小，large 高度为 40px，small 为 24px，默认是 32px",
    "type": ['large', 'default', 'small'],
    "default": "无"
  },
  "inputReadOnly": {
    "desc": "设置输入框为只读（避免在移动设备上打开虚拟键盘）",
    "type": "boolean",
    "default": "-"
  },
}
export default {
  'a-date-picker': {
    props: {
      ...commonProps,
      "format": {
        "desc": "设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js",
        "type": "string",
        "default": "\"YYYY-MM-DD\""
      },
      "showToday": {
        "desc": "是否展示“今天”按钮",
        "type": "boolean",
        "default": "true"
      },
    }
  },
  'a-month-picker': {
    props: {
      ...commonProps,
      "format": {
        "desc": "展示的日期格式，配置参考 moment.js",
        "type": "string",
        "default": "\"YYYY-MM\""
      },
    }
  },
  'a-week-picker': {
    props: {
      ...commonProps,
      "format": {
        "desc": "展示的日期格式，配置参考 moment.js",
        "type": "string",
        "default": "\"YYYY-MM\""
      },
    }
  },
  'a-range-picker': {
    props:{
      ...commonProps,
      "format": {
        "desc": "展示的日期格式",
        "type": "string",
        "default": "\"YYYY-MM-DD HH:mm:ss\""
      },
      "separator": {
        "desc": "设置分隔符",
        "type": "string",
        "default": "'~'"
      },
    }
  }
}