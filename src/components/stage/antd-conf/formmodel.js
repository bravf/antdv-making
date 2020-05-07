export default {
  'a-form-model': {
    props: {
      "hideRequiredMark": {
        "desc": "隐藏所有表单项的必选标记",
        "type": "Boolean",
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
      "colon": {
        "desc": "配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)",
        "type": "boolean",
        "default": "true"
      },
      "validateOnRuleChange": {
        "desc": "是否在 rules 属性改变后立即触发一次验证",
        "type": "boolean",
        "default": "true"
      }
    }
  },
  'a-form-model-item': {
    props: {
      "prop": {
        "desc": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
        "type": "string",
        "default": ""
      },
      "autoLink": {
        "desc": "是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项",
        "type": "boolean",
        "default": "true"
      },
      "colon": {
        "desc": "配合 label 属性使用，表示是否显示 label 后面的冒号",
        "type": "boolean",
        "default": "true"
      },
      "extra": {
        "desc": "额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。",
        "type": "string",
        "default": ""
      },
      "hasFeedback": {
        "desc": "配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用",
        "type": "boolean",
        "default": "false"
      },
      "help": {
        "desc": "提示信息，如不设置，则会根据校验规则自动生成",
        "type": "string",
        "default": ""
      },
      "htmlFor": {
        "desc": "设置子元素 label htmlFor 属性",
        "type": "string",
        "default": ""
      },
      "label": {
        "desc": "label 标签的文本",
        "type": "string",
        "default": ""
      },
      "labelCol": {
        "desc": "label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}",
        "type": "object",
        "default": ""
      },
      "labelAlign": {
        "desc": "标签文本对齐方式",
        "type": ['left', 'right'],
        "default": "'right'"
      },
      "required": {
        "desc": "是否必填，如不设置，则会根据校验规则自动生成",
        "type": "boolean",
        "default": "false"
      },
      "validateStatus": {
        "desc": "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
        "type": ['success', 'warning', 'error', 'validating'],
        "default": ""
      },
      "wrapperCol": {
        "desc": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
        "type": "object",
        "default": ""
      }
    }
  },
}