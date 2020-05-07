let line = {
  "strokeWidth": {
    "desc": "进度条线的宽度，单位 px",
    "type": "number",
    "default": "10"
  },
  "strokeColor": {
    "desc": "进度条的色彩，传入 object 时为渐变",
    "type": "string | { from: string; to: string; direction: string }",
    "default": "-"
  }
}
let circle = {
  "width": {
    "desc": "圆形进度条画布宽度，单位 px",
    "type": "number",
    "default": "132"
  },
  "strokeWidth": {
    "desc": "圆形进度条线的宽度，单位是进度条画布宽度的百分比",
    "type": "number",
    "default": "6"
  },
  "strokeColor": {
    "desc": "圆形进度条线的色彩，传入 object 时为渐变",
    "type": "string | object",
    "default": "-"
  }
}
let dashboard = {
  "width": {
    "desc": "仪表盘进度条画布宽度，单位 px",
    "type": "number",
    "default": "132"
  },
  "strokeWidth": {
    "desc": "仪表盘进度条线的宽度，单位是进度条画布宽度的百分比",
    "type": "number",
    "default": "6"
  },
  "gapDegree": {
    "desc": "仪表盘进度条缺口角度，可取值 0 ~ 360",
    "type": "number",
    "default": "0"
  },
  "gapPosition": {
    "desc": "仪表盘进度条缺口位置",
    "type": ['top', 'bottom', 'left', 'right'],
    "default": "top"
  }
}
export default {
  'a-progress': {
    props: {
      ...line,
      ...circle,
      ...dashboard,
      "type": {
        "desc": "类型，可选 line circle dashboard",
        "type": ['line', 'circle', 'dashboard'],
        "default": "line"
      },
      "format": {
        "desc": "内容的模板函数",
        "type": "function(percent, successPercent) | v-slot:format=\"percent, successPercent\"",
        "default": "percent => percent + '%'"
      },
      "percent": {
        "desc": "百分比",
        "type": "number",
        "default": "0"
      },
      "showInfo": {
        "desc": "是否显示进度数值或状态图标",
        "type": "boolean",
        "default": "true"
      },
      "status": {
        "desc": "状态，可选：success exception normal active(仅限 line)",
        "type": ['success', 'exception', 'normal', 'active'],
        "default": "-"
      },
      "strokeLinecap": {
        "desc": "",
        "type": ['round', 'square'],
        "default": "round"
      },
      "strokeColor": {
        "desc": "进度条的色彩",
        "type": "string",
        "default": "-"
      },
      "successPercent": {
        "desc": "已完成的分段百分比",
        "type": "number",
        "default": "0"
      },
    }
  }
}