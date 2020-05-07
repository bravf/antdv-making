export default {
  'a-config-provider': {
    props: {
      "autoInsertSpaceInButton": {
        "desc": "设置为 false 时，移除按钮中 2 个汉字之间的空格",
        "type": "boolean",
        "default": "true"
      },
      "csp": {
        "desc": "设置 Content Security Policy 配置",
        "type": "{ nonce: string }",
        "default": "-"
      },
      "renderEmpty": {
        "desc": "自定义组件空状态。参考 空状态",
        "type": "slot-scope | Function(componentName: string): VNode",
        "default": "-"
      },
      "getPopupContainer": {
        "desc": "弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。",
        "type": "Function(triggerNode, dialogContext)",
        "default": "() => document.body"
      },
      "locale": {
        "desc": "语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找",
        "type": "object",
        "default": "-"
      },
      "pageHeader": {
        "desc": "统一设置 pageHeader 的 ghost，参考 pageHeader",
        "type": "{ ghost: boolean }",
        "default": "'true'"
      },
      "transformCellText": {
        "desc": "Table 数据渲染前可以再次改变，一般用户空数据的默认配置",
        "type": "Function({ text, column, record, index }) => any",
        "default": "-"
      }
    }
  }
}