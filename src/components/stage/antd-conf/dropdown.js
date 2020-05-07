export default {
  'a-dropdown': {
    props: {
      "disabled": {
        "desc": "菜单是否禁用",
        "type": "boolean",
        "default": "-"
      },
      "getPopupContainer": {
        "desc": "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",
        "type": "Function(triggerNode)",
        "default": "() => document.body"
      },
      "overlay(slot-scope)": {
        "desc": "菜单",
        "type": "Menu",
        "default": "-"
      },
      "overlayClassName": {
        "desc": "下拉根元素的类名称",
        "type": "string",
        "default": "-"
      },
      "overlayStyle": {
        "desc": "下拉根元素的样式",
        "type": "object",
        "default": "-"
      },
      "placement": {
        "desc": "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight",
        "type": ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft topCenter', 'topRight'],
        "default": "bottomLeft"
      },
      "trigger": {
        "desc": "触发下拉的行为, 移动端不支持 hover",
        "type": "Array<click|hover|contextmenu>",
        "default": "['hover']"
      },
      "visible(v-model)": {
        "desc": "菜单是否显示",
        "type": "boolean",
        "default": "-"
      }
    }
  },
  'a-dropdown-button': {
    props: {
      "disabled": {
        "desc": "菜单是否禁用",
        "type": "boolean",
        "default": "-"
      },
      "icon": {
        "desc": "右侧的 icon",
        "type": "VNode | slot",
        "default": "-"
      },
      "overlay(slot-scope)": {
        "desc": "菜单",
        "type": "Menu",
        "default": "-"
      },
      "placement": {
        "desc": "菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight",
        "type": ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft topCenter', 'topRight'],
        "default": "bottomLeft"
      },
      "size": {
        "desc": "按钮大小，和 Button 一致",
        "type": ['large', 'small'],
        "default": "'default'"
      },
      "trigger": {
        "desc": "触发下拉的行为",
        "type": "Array<click|hover|contextmenu>",
        "default": "['hover']"
      },
      "type": {
        "desc": "按钮类型，和 Button 一致",
        "type": "string",
        "default": "'default'"
      },
      "visible(v-model)": {
        "desc": "菜单是否显示",
        "type": "boolean",
        "default": "-"
      }
    }
  },
}