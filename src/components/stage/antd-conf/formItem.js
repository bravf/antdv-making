export default {
  'a-form-item': {
    props: {
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
        "default": 'right'
      },
      "required": {
        "desc": "是否必填，如不设置，则会根据校验规则自动生成",
        "type": "boolean",
        "default": "false"
      },
      "validateStatus": {
        "desc": "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
        "type": ['success', 'warning', 'error'],
        "default": ""
      },
      "wrapperCol": {
        "desc": "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
        "type": "object",
        "default": ""
      },
      "selfUpdate": {
        "desc": "自定义字段更新逻辑，你可以通过 Form 的 selfUpdate 进行统一设置。当和 Form 同时设置时，以 Item 为准。 说明见下 需 1.3.17 版本以上",
        "type": "boolean",
        "default": "false"
      }
    }  
  }
}