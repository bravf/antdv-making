export default {
  'a-steps': {
    props: {
      "type": {
        "desc": "步骤条类型，有 default 和 navigation 两种",
        "type": ['default', 'navigation'],
        "default": "default"
      },
      "current (v-model)": {
        "desc": "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态, 1.5.0 后支持 v-model",
        "type": "number",
        "default": "0"
      },
      "direction": {
        "desc": "指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向",
        "type": ['horizontal', 'vertical'],
        "default": "horizontal"
      },
      "labelPlacement": {
        "desc": "指定标签放置位置，默认水平放图标右侧，可选vertical放图标下方",
        "type": "string",
        "default": "horizontal"
      },
      "progressDot": {
        "desc": "点状步骤条，可以设置为一个 作用域插槽,labelPlacement 将强制为vertical",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "指定大小，目前支持普通（default）和迷你（small）",
        "type": ['default', 'small'],
        "default": "default"
      },
      "status": {
        "desc": "指定当前步骤的状态，可选 wait process finish error",
        "type": ['wait', 'process', 'finish', 'error'],
        "default": "process"
      },
      "initial": {
        "desc": "起始序号，从 0 开始记数",
        "type": "number",
        "default": "0"
      }
    }
  },
  'a-steps-step': {
    props: {
      "description": {
        "desc": "步骤的详情描述，可选",
        "type": "string",
        "default": "-"
      },
      "icon": {
        "desc": "步骤图标的类型，可选",
        "type": "string",
        "default": "-"
      },
      "status": {
        "desc": "指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error",
        "type": ['wait', 'process', 'finish', 'error'],
        "default": "wait"
      },
      "title": {
        "desc": "标题",
        "type": "string",
        "default": "-"
      },
      "subTitle": {
        "desc": "子标题",
        "type": "string",
        "default": "-"
      },
      "disabled": {
        "desc": "禁用点击",
        "type": "boolean",
        "default": "false"
      }
    }
  },
}