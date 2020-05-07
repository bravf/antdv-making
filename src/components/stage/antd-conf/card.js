export default {
  'a-card': {
    props: {
      "activeTabKey": {
        "desc": "当前激活页签的 key",
        "type": "string",
        "default": "-"
      },
      "headStyle": {
        "desc": "自定义标题区域样式",
        "type": "object",
        "default": "-"
      },
      "bodyStyle": {
        "desc": "内容区域自定义样式",
        "type": "object",
        "default": "-"
      },
      "bordered": {
        "desc": "是否有边框",
        "type": "boolean",
        "default": "true"
      },
      "defaultActiveTabKey": {
        "desc": "初始化选中页签的 key，如果没有设置 activeTabKey",
        "type": "string",
        "default": "第一个页签"
      },
      "extra": {
        "desc": "卡片右上角的操作区域",
        "type": "string|slot",
        "default": "-"
      },
      "hoverable": {
        "desc": "鼠标移过时可浮起",
        "type": "boolean",
        "default": "false"
      },
      "loading": {
        "desc": "当卡片内容还在加载中时，可以用 loading 展示一个占位",
        "type": "boolean",
        "default": "false"
      },
      "size": {
        "desc": "card 的尺寸",
        "type": ['default', 'small'],
        "default": "default"
      },
      "title": {
        "desc": "卡片标题",
        "type": "string|slot",
        "default": "-"
      },
      "type": {
        "desc": "卡片类型，可设置为 inner 或 不设置",
        "type": ['inner'],
        "default": "-"
      }
    }
  },
  'a-card-grid': {},
  'a-card-meta': {
    props: {
      "description": {
        "desc": "描述内容",
        "type": "string|slot",
        "default": "-"
      },
      "title": {
        "desc": "标题内容",
        "type": "string|slot",
        "default": "-"
      }
    }
  }
}