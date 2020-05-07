let elements = {
  'div': {
  },
  'text': {
    props: {
      value: {
        type: String,
        default: '',
        desc: '文本内容',
      }
    }
  }
}
for (let type in elements) {
  elements[type]['native'] = true
}

export default elements