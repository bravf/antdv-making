export default {
  'a-descriptions': {
    props: {
      "title": {
        "desc": "描述列表的标题，显示在最顶部",
        "type": "string | VNode | v-slot:title",
        "default": "-"
      },
      "bordered": {
        "desc": "是否展示边框",
        "type": "boolean",
        "default": "false"
      },
      "column": {
        "desc": "一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}",
        "type": "number",
        "default": "3"
      },
      "size": {
        "desc": "设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）",
        "type": ['default', 'middle', 'small'],
        "default": "default"
      },
      "layout": {
        "desc": "描述布局",
        "type": ['horizontal', 'vertical'],
        "default": "horizontal"
      },
      "colon": {
        "desc": "配置 Descriptions.Item 的 colon 的默认值",
        "type": "boolean",
        "default": "true"
      }
    }
  },
  'a-descriptions-item': {
    props: {
      "label": {
        "desc": "内容的描述",
        "type": "string | VNode | v-slot:label",
        "default": "-"
      },
      "span": {
        "desc": "包含列的数量",
        "type": "number",
        "default": "1"
      }
    }
  }
}