export default {
  'a-button-group': {},
  'a-button': {
    props: {
      "disabled": {
        "desc": "按钮失效状态",
        "type": "boolean",
        "default": "false"
      },
      "ghost": {
        "desc": "幽灵属性，使按钮背景透明",
        "type": "boolean",
        "default": "false"
      },
      "htmlType": {
        "desc": "设置 button 原生的 type 值，可选值请参考 HTML 标准",
        "type": "string",
        "default": "button"
      },
      "icon": {
        "desc": "设置按钮的图标类型",
        "type": "string",
        "default": "-"
      },
      "loading": {
        "desc": "设置按钮载入状态",
        "type": "boolean",
        "default": "false"
      },
      "shape": {
        "desc": "设置按钮形状，可选值为 circle、 round 或者不设",
        "type": "string",
        "default": "-"
      },
      "size": {
        "desc": "设置按钮大小，可选值为 small large 或者不设",
        "type": ['small', 'large'],
        "default": "default"
      },
      "type": {
        "desc": "设置按钮类型，可选值为 primary dashed danger link 或者不设",
        "type": ['primary', 'dashed', 'danger', 'link'],
        "default": "default"
      },
      "block": {
        "desc": "将按钮宽度调整为其父宽度的选项",
        "type": "boolean",
        "default": "false"
      }
    }
  }
}