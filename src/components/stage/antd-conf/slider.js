export default {
  'a-slider': {
    props: {
      "autoFocus": {
        "desc": "自动获取焦点",
        "type": "boolean",
        "default": "false"
      },
      "defaultValue": {
        "desc": "设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]",
        "type": "number",
        "default": "0"
      },
      "disabled": {
        "desc": "值为 true 时，滑块为禁用状态",
        "type": "boolean",
        "default": "false"
      },
      "dots": {
        "desc": "是否只能拖拽到刻度上",
        "type": "boolean",
        "default": "false"
      },
      "included": {
        "desc": "marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列",
        "type": "boolean",
        "default": "true"
      },
      "max": {
        "desc": "最大值",
        "type": "number",
        "default": "100"
      },
      "min": {
        "desc": "最小值",
        "type": "number",
        "default": "0"
      },
      "range": {
        "desc": "双滑块模式",
        "type": "boolean",
        "default": "false"
      },
      "reverse": {
        "desc": "反向坐标轴",
        "type": "boolean",
        "default": "false"
      },
      "step": {
        "desc": "步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。",
        "type": "number",
        "default": "1"
      },
      "vertical": {
        "desc": "值为 true 时，Slider 为垂直方向",
        "type": "Boolean",
        "default": "false"
      },
      "tooltipPlacement": {
        "desc": "设置 Tooltip 展示位置。参考 Tooltip。",
        "type": "string",
        "default": ""
      },
      "tooltipVisible": {
        "desc": "值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。",
        "type": "Boolean",
        "default": ""
      },
    }
  }
}