export default {
  'a-transfer': {
    props: {
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "lazy": {
        "desc": "Transfer 使用了 [vc-lazy-load]优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。",
        "type": "boolean",
        "default": "{ height: 32, offset: 32 }"
      },
      "showSearch": {
        "desc": "是否显示搜索框",
        "type": "boolean",
        "default": "false"
      },
      "showSelectAll": {
        "desc": "是否展示全选勾选框",
        "type": "boolean",
        "default": "true"
      },
      "titles": {
        "desc": "标题集合，顺序从左至右",
        "type": "string",
        "default": "['', '']"
      }
    }
  }
}