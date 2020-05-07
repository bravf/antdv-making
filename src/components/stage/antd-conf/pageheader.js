export default {
  'a-page-header': {
    props: {
      "title": {
        "desc": "自定义标题文字",
        "type": "string",
        "default": "-"
      },
      "subTitle": {
        "desc": "自定义的二级标题文字",
        "type": "string",
        "default": "-"
      },
      "ghost": {
        "desc": "pageHeader 的类型，将会改变背景颜色",
        "type": "boolean",
        "default": "true"
      },
      "avatar": {
        "desc": "标题栏旁的头像",
        "type": "avatar props",
        "default": "-"
      },
      "backIcon": {
        "desc": "自定义 back icon ，如果为 false 不渲染 back icon",
        "type": "string|slot",
        "default": "<Icon type=\"arrow-left\" />"
      },
      "tags": {
        "desc": "title 旁的 tag 列表",
        "type": "Tag[] | Tag",
        "default": "-"
      },
      "extra": {
        "desc": "操作区，位于 title 行的行尾",
        "type": "string",
        "default": "-"
      },
      "breadcrumb": {
        "desc": "面包屑的配置",
        "type": "breadcrumb",
        "default": "-"
      },
      "footer": {
        "desc": "PageHeader 的页脚，一般用于渲染 TabBar",
        "type": "string",
        "default": "-"
      }
    }
  }
}