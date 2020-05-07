// 获取 antdv 某个组件的属性说明文档
let props = {}
Array.from($0.children).forEach(tr => {
  let tds = Array.from(tr.children)
  props[tds[0].innerText] = {
    desc: tds[1].innerText,
    type: tds[2].innerText,
    default: tds[3].innerText,
  }
})
console.log(props)
copy(props)