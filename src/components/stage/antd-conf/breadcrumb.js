export default {
  'a-breadcrumb': {
    props: {
      "itemRender": {
        "desc": "自定义链接函数，和 vue-router 配置使用， 也可使用 slot=\"itemRender\" 和 slot-scope=\"props\"",
        "type": "({route, params, routes, paths, h}) => vNode",
        "default": ""
      },
      "params": {
        "desc": "路由的参数",
        "type": "object",
        "default": ""
      },
      "routes": {
        "desc": "router 的路由栈信息",
        "type": "routes[]",
        "default": ""
      },
      "separator": {
        "desc": "分隔符自定义",
        "type": "string|slot",
        "default": ""
      }
    }
  },
  'a-breadcrumb-item': {
    props: {
      "href": {
        "desc": "链接的目的地",
        "type": "string",
        "default": "-"
      },
      "overlay": {
        "desc": "下拉菜单的内容",
        "type": "Menu | () => Menu",
        "default": "-"
      }
    }
  }
}