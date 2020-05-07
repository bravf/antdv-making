export default {
  'a-upload': {
    props: {
      "accept": {
        "desc": "接受上传的文件类型, 详见 input accept Attribute",
        "type": "string",
        "default": "无"
      },
      "action": {
        "desc": "上传的地址",
        "type": "string",
        "default": "无"
      },
      "method": {
        "desc": "上传请求的 http method",
        "type": "string",
        "default": "'post'"
      },
      "directory": {
        "desc": "支持上传文件夹（caniuse）",
        "type": "boolean",
        "default": "false"
      },
      "disabled": {
        "desc": "是否禁用",
        "type": "boolean",
        "default": "false"
      },
      "headers": {
        "desc": "设置上传的请求头部，IE10 以上有效",
        "type": "object",
        "default": "无"
      },
      "listType": {
        "desc": "上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card",
        "type": ['text', 'picture', 'picture-card'],
        "default": "'text'"
      },
      "multiple": {
        "desc": "是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。",
        "type": "boolean",
        "default": "false"
      },
      "name": {
        "desc": "发到后台的文件参数名",
        "type": "string",
        "default": "'file'"
      },
      "showUploadList": {
        "desc": "是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon",
        "type": "boolean",
        "default": "true"
      },
      "supportServerRender": {
        "desc": "服务端渲染时需要打开这个",
        "type": "boolean",
        "default": "false"
      },
      "withCredentials": {
        "desc": "上传请求时是否携带 cookie",
        "type": "boolean",
        "default": "false"
      },
      "openFileDialogOnClick": {
        "desc": "点击打开文件对话框",
        "type": "boolean",
        "default": "true"
      },
    }
  }
}