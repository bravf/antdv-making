export default {
  'a-icon': {
    props: {
      "type": {
        "desc": "图标类型。遵循图标的命名规范",
        "type": "string",
        "default": "-"
      },
      "style": {
        "desc": "设置图标的样式，例如 fontSize 和 color",
        "type": "CSSProperties",
        "default": "-"
      },
      "theme": {
        "desc": "图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标",
        "type": ['filled', 'outlined', 'twoTone'],
        "default": "outlined"
      },
      "spin": {
        "desc": "是否有旋转动画",
        "type": "boolean",
        "default": "false"
      },
      "rotate": {
        "desc": "图标旋转角度（1.4.0 后新增，IE9 无效）",
        "type": "number",
        "default": "-"
      },
      "component": {
        "desc": "控制如何渲染图标，通常是一个渲染根标签为 <svg> 的 Vue 组件，会使 type 属性失效",
        "type": "ComponentType<CustomIconComponentProps>",
        "default": "-"
      },
      "twoToneColor": {
        "desc": "仅适用双色图标。设置双色图标的主要颜色",
        "type": "string (十六进制颜色)",
        "default": "-"
      }
    }
  }
}