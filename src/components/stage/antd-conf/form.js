export default {
  'a-form': {
    props: {
      "form": {
        "desc": "经 Form.create() 包装过的组件会自带 this.form 属性，如果使用 template 语法，可以使用 this.$form.createForm(this, options)",
        "type": "object",
        "default": "无"
      },
      "hideRequiredMark": {
        "desc": "隐藏所有表单项的必选标记",
        "type": "boolean",
        "default": "false"
      },
      "labelAlign": {
        "desc": "label 标签的文本对齐方式",
        "type": ['left', 'right'],
        "default": "right"
      },
      "layout": {
        "desc": "表单布局",
        "type": ['horizontal', 'vertical', 'inline'],
        "default": "'horizontal'"
      },
      "labelCol": {
        "desc": "label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}",
        "type": "object",
        "default": ""
      },
      "wrapperCol": {
        "desc": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
        "type": "object",
        "default": ""
      },
      "selfUpdate": {
        "desc": "自定义字段更新逻辑，说明见下，需 1.3.17 版本以上",
        "type": "boolean",
        "default": "false"
      },
      "colon": {
        "desc": "配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)",
        "type": "boolean",
        "default": "true"
      } 
    }
  }
}