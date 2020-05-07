export default {
  'a-list': {
    "bordered": {
      "desc": "是否展示边框",
      "type": "boolean",
      "default": "false"
    },
    "footer": {
      "desc": "列表底部",
      "type": "string|slot",
      "default": "-"
    },
    "grid": {
      "desc": "列表栅格配置",
      "type": "object",
      "default": "-"
    },
    "header": {
      "desc": "列表头部",
      "type": "string|slot",
      "default": "-"
    },
    "itemLayout": {
      "desc": "设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排",
      "type": ['vertical'],
      "default": "-"
    },
    "loading": {
      "desc": "当卡片内容还在加载中时，可以用 loading 展示一个占位",
      "type": "boolean|object",
      "default": "false"
    },
    "loadMore": {
      "desc": "加载更多",
      "type": "string|slot",
      "default": "-"
    },
    "locale": {
      "desc": "默认文案设置，目前包括空数据文案",
      "type": "object",
      "default": "emptyText: '暂无数据'"
    },
    "pagination": {
      "desc": "对应的 pagination 配置, 设置 false 不显示",
      "type": "boolean|object",
      "default": "false"
    },
    "size": {
      "desc": "list 的尺寸",
      "type": ['default', 'middle', 'small'],
      "default": "default"
    },
    "split": {
      "desc": "是否展示分割线",
      "type": "boolean",
      "default": "true"
    },
    "dataSource": {
      "desc": "列表数据源",
      "type": "any[]",
      "default": "-"
    },
    "renderItem": {
      "desc": "自定义Item函数，也可使用 slot=\"renderItem\" 和 slot-scope=\"item, index\"",
      "type": "(item, index) => vNode",
      "default": ""
    },
    "rowKey": {
      "desc": "各项 key 的取值，可以是字符串或一个函数",
      "type": "item => string|number",
      "default": ""
    }
  },
  'a-list-item': {
    props: {
      "extra": {
        "desc": "额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧",
        "type": "string|slot",
        "default": "-"
      }
    }
  },
  'a-list-item-meta': {
    props: {
      "description": {
        "desc": "列表元素的描述内容",
        "type": "string|slot",
        "default": "-"
      },
      "title": {
        "desc": "列表元素的标题",
        "type": "string|slot",
        "default": "-"
      }
    }
  }
}