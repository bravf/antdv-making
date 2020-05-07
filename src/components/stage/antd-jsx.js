import jsx from 'vue-jsx'
import antdConf from  './antd-conf'
import { comCase } from '@/base'

let { bind } = jsx
let antd = {}
let antdBind = arr => {
  arr.forEach(str => {
    antd[comCase(str)] = bind(str)
  })
}

antdBind(Object.keys(antdConf))
export default antd