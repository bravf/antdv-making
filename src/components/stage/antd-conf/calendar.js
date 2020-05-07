export default {
  'a-calendar': {
    props: {
      "dateCellRender": {
        "desc": "作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格,",
        "type": "function(date: moment)",
        "default": "无"
      },
      "dateFullCellRender": {
        "desc": "作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格",
        "type": "function(date: moment)",
        "default": "无"
      },
      "defaultValue": {
        "desc": "默认展示的日期",
        "type": "moment",
        "default": "默认日期"
      },
      "disabledDate": {
        "desc": "不可选择的日期",
        "type": "(currentDate: moment) => boolean",
        "default": "无"
      },
      "fullscreen": {
        "desc": "是否全屏显示",
        "type": "boolean",
        "default": "true"
      },
      "locale": {
        "desc": "国际化配置",
        "type": "object",
        "default": "默认配置"
      },
      "mode": {
        "desc": "初始模式，month/year",
        "type": "string",
        "default": "month"
      },
      "monthCellRender": {
        "desc": "作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格",
        "type": "function(date: moment)",
        "default": "无"
      },
      "monthFullCellRender": {
        "desc": "作用域插槽，自定义渲染月单元格，返回内容覆盖单元格",
        "type": "function(date: moment)",
        "default": "无"
      },
      "validRange": {
        "desc": "设置可以显示的日期",
        "type": "[moment, moment]",
        "default": "无"
      },
      "value(v-model)": {
        "desc": "展示日期",
        "type": "moment",
        "default": "当前日期"
      },
      "headerRender": {
        "desc": "自定义头部内容",
        "type": "function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | slot-scope",
        "default": "-"
      },
      "valueFormat": {
        "desc": "可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象",
        "type": "string，具体格式",
        "default": "-"
      }
    }
  }
}