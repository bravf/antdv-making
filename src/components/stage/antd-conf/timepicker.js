export default {
  'a-time-picker': {
    props: {
      "allowClear": {
        "desc": "是否展示清除按钮",
        "type": "boolean",
        "default": "true"
      },
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "clearText": {
        "desc": "清除按钮的提示文案",
        "type": "string",
        "default": "clear"
      },
      "disabled": {
        "desc": "禁用全部操作",
        "type": "boolean",
        "default": "false"
      },
      "format": {
        "desc": "展示的时间格式",
        "type": "string",
        "default": "\"HH:mm:ss\""
      },
      "hideDisabledOptions": {
        "desc": "隐藏禁止选择的选项",
        "type": "boolean",
        "default": "false"
      },
      "hourStep": {
        "desc": "小时选项间隔",
        "type": "number",
        "default": "1"
      },
      "inputReadOnly": {
        "desc": "设置输入框为只读（避免在移动设备上打开虚拟键盘）",
        "type": "boolean",
        "default": "false"
      },
      "minuteStep": {
        "desc": "分钟选项间隔",
        "type": "number",
        "default": "1"
      },
      "open(.sync)": {
        "desc": "面板是否打开",
        "type": "boolean",
        "default": "false"
      },
      "placeholder": {
        "desc": "没有值的时候显示的内容",
        "type": "string",
        "default": "\"请选择时间\""
      },
      "popupClassName": {
        "desc": "弹出层类名",
        "type": "string",
        "default": "''"
      },
      "secondStep": {
        "desc": "秒选项间隔",
        "type": "number",
        "default": "1"
      },
      "suffixIcon": {
        "desc": "自定义的选择框后缀图标",
        "type": "string",
        "default": "-"
      },
      "clearIcon": {
        "desc": "自定义的清除图标",
        "type": "string",
        "default": "-"
      },
      "use12Hours": {
        "desc": "使用 12 小时制，为 true 时 format 默认为 h:mm:ss a",
        "type": "boolean",
        "default": "false"
      },
      "value(v-model)": {
        "desc": "当前时间",
        "type": "moment",
        "default": "无"
      },
      "valueFormat": {
        "desc": "可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象",
        "type": "string",
        "default": "-"
      }
    }
  }
}