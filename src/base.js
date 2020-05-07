import { v4 } from  'uuid'

let comCase = str => `-${str}`.replace(/-\w/g, a => a.charAt(1).toUpperCase())
let noop = () => {}
let getUuid = () => v4()
let getElementRect = (ele) => {
  let rect = ele.getBoundingClientRect()
  let docEle = document.documentElement
  return {
    width: rect.width,
    height: rect.height,
    left: rect.left + docEle.scrollLeft,
    top: rect.top + docEle.scrollTop,
  }
}
export {
  comCase,
  getUuid,
  noop,
  getElementRect,
}