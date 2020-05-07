export default {
  'a-carousel': {
    props: {
      "afterChange": {
        "desc": "切换面板的回调",
        "type": "function(current)",
        "default": "无"
      },
      "autoplay": {
        "desc": "是否自动切换",
        "type": "boolean",
        "default": "false"
      },
      "beforeChange": {
        "desc": "切换面板的回调",
        "type": "function(from, to)",
        "default": "无"
      },
      "dotPosition": {
        "desc": "面板指示点位置，可选 top bottom left right",
        "type": ['top', 'bottom', 'left', 'right'],
        "default": "bottom"
      },
      "dots": {
        "desc": "是否显示面板指示点",
        "type": "boolean",
        "default": "true"
      },
      "dotsClass": {
        "desc": "面板指示点类名",
        "type": "string",
        "default": "slick-dots"
      },
      "easing": {
        "desc": "动画效果",
        "type": "string",
        "default": "linear"
      },
      "effect": {
        "desc": "动画效果函数，可取 scrollx, fade",
        "type": ['scrollx', 'fade'],
        "default": "scrollx"
      }
    }
  }
}