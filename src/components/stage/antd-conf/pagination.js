export default {
  'a-pagination': {
    props: {
      "current": {
        "desc": "当前页数",
        "type": "number",
        "default": "-"
      },
      "defaultCurrent": {
        "desc": "默认的当前页数",
        "type": "number",
        "default": "1"
      },
      "defaultPageSize": {
        "desc": "默认的每页条数",
        "type": "number",
        "default": "10"
      },
      "disabled": {
        "desc": "禁用分页",
        "type": "boolean",
        "default": "-"
      },
      "hideOnSinglePage": {
        "desc": "只有一页时是否隐藏分页器",
        "type": "boolean",
        "default": "false"
      },
      "pageSize": {
        "desc": "每页条数",
        "type": "number",
        "default": "-"
      },
      "pageSizeOptions": {
        "desc": "指定每页可以显示多少条",
        "type": "string[]",
        "default": "['10', '20', '30', '40']"
      },
      "showLessItems": {
        "desc": "show less page items",
        "type": "boolean",
        "default": "false"
      },
      "showQuickJumper": {
        "desc": "是否可以快速跳转至某页",
        "type": "boolean",
        "default": "false"
      },
      "showSizeChanger": {
        "desc": "是否可以改变 pageSize",
        "type": "boolean",
        "default": "false"
      },
      "simple": {
        "desc": "当添加该属性时，显示为简单分页",
        "type": "boolean",
        "default": "-"
      },
      "size": {
        "desc": "当为「small」时，是小尺寸分页",
        "type": "string",
        "default": "\"\""
      },
      "total": {
        "desc": "数据总数",
        "type": "number",
        "default": "0"
      }
    }
  }
}