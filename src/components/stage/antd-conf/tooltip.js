let commonProps = {
  "arrowPointAtCenter": {
    "desc": "箭头是否指向目标元素中心",
    "type": "boolean",
    "default": "false"
  },
  "autoAdjustOverflow": {
    "desc": "气泡被遮挡时自动调整位置",
    "type": "boolean",
    "default": "true"
  },
  "defaultVisible": {
    "desc": "默认是否显隐",
    "type": "boolean",
    "default": "false"
  },
  "getPopupContainer": {
    "desc": "浮层渲染父节点，默认渲染到 body 上",
    "type": "Function(triggerNode)",
    "default": "() => document.body"
  },
  "mouseEnterDelay": {
    "desc": "鼠标移入后延时多少才显示 Tooltip，单位：秒",
    "type": "number",
    "default": "0"
  },
  "mouseLeaveDelay": {
    "desc": "鼠标移出后延时多少才隐藏 Tooltip，单位：秒",
    "type": "number",
    "default": "0.1"
  },
  "overlayClassName": {
    "desc": "卡片类名",
    "type": "string",
    "default": "无"
  },
  "overlayStyle": {
    "desc": "卡片样式",
    "type": "object",
    "default": "无"
  },
  "placement": {
    "desc": "气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
    "type": ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
    "default": "top"
  },
  "trigger": {
    "desc": "触发行为，可选 hover/focus/click/contextmenu",
    "type": ['hover', 'focus', 'click', 'contextmenu'],
    "default": "hover"
  },
  "visible(v-model)": {
    "desc": "用于手动控制浮层显隐",
    "type": "boolean",
    "default": "false"
  },
  "destroyTooltipOnHide": {
    "desc": "隐藏后是否销毁 tooltip",
    "type": "boolean",
    "default": "false"
  },
  "align": {
    "desc": "该值将合并到 placement 的配置中，设置参考 dom-align",
    "type": "Object",
    "default": "无"
  }
}
export default {
  'a-tooltip': {
    props: {
      ...commonProps,
      "title": {
        "desc": "提示文字",
        "type": "string|slot",
        "default": "无"
      }
    }
  }
}