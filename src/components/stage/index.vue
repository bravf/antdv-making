<style lang="scss">
@import './index.scss';
</style>
<script>
import Vue from 'vue'
import jsx from 'vue-jsx'
import antdConf from './antd-conf/index.js'
import nativeConf from './native-conf'
import antdJsx from './antd-jsx'
import { 
  comCase,
  getUuid,
  noop,
  getElementRect,
} from '@/base'
import {
  isString,
  isNil,
  cloneDeep,
} from 'lodash'
let {
  create,
  h1,
  h3,
  div,  
  span,
  table,
  tr,
  td,
} = jsx
let { 
  ALayout, 
  ALayoutHeader, 
  ALayoutContent, 
  ALayoutSider, 
  AIcon,
  ATabs,
  ATabPane,
  AForm,
  AFormItem,
  AInput,
  AInputNumber,
  ATextarea,
  ATooltip,
  ARadioGroup,
  ARadioButton,
  ARadio,
  AModal,
  AButton,
  // ARow,
  // ACol
} = antdJsx
let comConf = {
  ...nativeConf,
  ...antdConf,
}
let Event = new Vue()
let Data = {
  objects: {},
  activePage: null,
  activeCom: null,
  activeComIndex: 0,
  hoverCom: null,
  dragCom: null,
  // 拍平的组件列表
  flatComList: [],
  dragComRect: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
  mouseEvent: {
    isDown: false,
    isDrag: false,
    type: 'move',
    xy: {
      clientX: 0,
      clientY: 0,
      moveX: 0,
      moveY: 0,
    }
  },
  comList: {
    sword: '',
  },
  comTree: {
    hook: 1,
  },
  codeView: {
    isOpen: false,
    space: '  ',
  },
}
let Common = {
  data () {
    return Data
  },
  methods: {
    _walkTree (
      bf = noop, 
      af = noop, 
      object = this.activePage,
      checkGroupOpen = false,
    ) {
      let _f = (
        _object, 
        z = 0
      ) => {
        _object = this._safeObject(_object)
        bf(_object, z)
        let isLoopChildren = !(checkGroupOpen && _object.cache.isGroupOpen === false)
        let childrenRes = isLoopChildren
          ? _object.childrenIds.map(child => {
            return _f(child, z + 1)
          })
          : []
        return af(_object, childrenRes, z)
      }
       return _f(object)
    },
    _createObject () {
      return {
        id: getUuid(),
        childrenIds: [],
        cache: {
          isGroupOpen: true,
        },
      }
    },
    _createPage () {
      return {
        ...this._createObject(),
        props: {},
        type: 'div',
      }
    },
    _createCom (type) {
      return {
        ...this._createObject(),
        type,
        parentId: '',
        props: {},
        styles: {},
      }
    },
    _addObject (object) {
      this.objects[object.id] = object
      this._flatComTree()
    },
    _safeObject (object) {
      return isString(object)
        ? this.objects[object]
        : object
    },
    _isSameObject (
      object, 
      object2
    ) {
      if (isNil(object) || isNil(object2)) {
        return false
      }
      object = this._safeObject(object)
      object2 = this._safeObject(object2)
      return object.id === object2.id
    },
    _isFirstChild (child) {
      child = this._safeObject(child)
      let parent = this._safeObject(child.parentId)
      return parent && (parent.childrenIds.indexOf(child.id) === 0)
    },
    _getChildIndex (child) {
      child = this._safeObject(child)
      let parent = this._safeObject(child.parentId)
      return parent.childrenIds.indexOf(child.id)
    },
    _removeChild (child) {
      child = this._safeObject(child)
      if (child.parentId) {
        let parent = this._safeObject(child.parentId)
        let index = this._getChildIndex(child)
        parent.childrenIds.splice(index, 1)
        child.parentId = ''
        this._flatComTree()
        return index
      }
      return -1
    },
    _addChild (
      parent = this.activePage, 
      child
    ) {
      parent = this._safeObject(parent)
      child = this._safeObject(child)
      if (!(child.id in this.objects)) {
        this._addObject(child)
      }
      this._removeChild(child)
      child.parentId = parent.id
      parent.childrenIds.push(child.id)
      this._flatComTree()
    },
    _copyChild (child) {
      child = this._safeObject(child)
      let parent = this._safeObject(child.parentId)
      let _copyf = object => {
        let copyed = cloneDeep(object)
        copyed.id = getUuid()
        copyed.parentId = ''
        copyed.childrenIds = []
        this._addObject(copyed)
        return copyed
      }
      let copyed = this._walkTree(noop, (object, childrenRes) => {
        let _copyed = _copyf(object)
        childrenRes.forEach(_child => {
          this._addChild(_copyed, _child)
        })
        return _copyed
      }, child)
      copyed.parentId = parent.id
      let childIndex = this._getChildIndex(child)
      parent.childrenIds.splice(childIndex + 1, 0, copyed.id)
      this._flatComTree()
      return copyed
    },
    _inserBeforeOrAfter (
      object,
      target,
      type = 'before',
    ) {
      object = this._safeObject(object)
      target = this._safeObject(target)
      if (!(object.id in this.objects)) {
        this._addObject(object)
      }
      if (!(object.id in this.objects)) {
        this._addObject(object)
      }
      this._removeChild(object)
      object.parentId = target.parentId
      let parent = this._safeObject(target.parentId)
      let targetIndex = parent.childrenIds.indexOf(target.id)
      if (type === 'after') {
        targetIndex ++
      }
      parent.childrenIds.splice(targetIndex, 0, object.id)
      this._flatComTree()
    },
    _inserBefore (
      object, target
    ) {
      this._inserBeforeOrAfter(object, target)
    },
    _insertAfter (
      object,
      target,
    ) {
      this._inserBeforeOrAfter(object, target, 'after')
    },
    _flatComTree () {
      this.flatComList = []
      let bf = (object, z) => { 
        this.flatComList.push({ object, z })
      }
      this._walkTree(bf, noop, this.activePage, true)
    },
    _getComConf (object) {
      object = this._safeObject(object)
      return comConf[object.type] || {}
    },
    _getCode (object = this.activeCom, space = ' ') {
      let code = this._walkTree(noop, (_object, childrenRes, n) => {
        let { props, type } = _object
        let spaces = Array(n).fill(space).join('')
        if (type === 'text') {
          return props.value ? spaces + (props.value || '') + '\n' : ''
        }
        let line = []
        let tag = type
        let start = ['<', tag]
        
        childrenRes = childrenRes.join('')
        Object.keys(props).forEach(key => {
          let value = props[key]
          start.push(` ${key}="${value}"`)
        })
        start.push('>')
        line = [
          spaces + start.join(''),
          childrenRes ? '\n' + childrenRes + spaces : '',
          `</${tag}>\n`
        ]
        return line.join('')
      }, object)
      return code
    },
    _renderTreeItemCode (object) {
      let { props } = object
      let children = ['<', span('.style', comCase(object.type))]
      Object.keys(props).forEach(key => {
        let value = props[key]
        children = [
          ...children,
          span('.style', ` ${key}=`),
          span('"'),
          span('.style2', `${value}`),
          span('"')
        ]
      })
      children.push('>') 
      return span(
        ...children
      )
    },
    _action_removeChild (object) {
      this._removeChild(object)
      this.activeComIndex = Math.min(this.activeComIndex, this.flatComList.length - 1)
      this.activeCom = this.flatComList[this.activeComIndex].object
    },
    _action_copyChild (object) {
      this.activeCom = this._copyChild(object)
    },
  },
}
let ComList = {
  name: 'ComList',
  mixins: [
    Common,
  ],
  render () {
    console.log('ComList render')
    let me = this
    let mouseEvent = this.mouseEvent
    return div('.com-tree com-list',
      h3(
        AInput({
          props_placeholder: '拖动组件到 Dom 树',
          props_value: this.comList.sword,
          props_allowClear: true,
          on_change (e) {
            me.comList.sword = e.target.value
          }
        }),
      ),
      div('.com-tree-list',
      ...Object.keys(comConf).map(str => {
        if (!str.toLowerCase().includes(me.comList.sword)) {
          return null
        }
        let id = `cl-${str}`
        return div('.com-tree-item', {
          key: str,
          attrs_id: id,
          'on_mousedown' (e) {
            mouseEvent.isDown = true
            mouseEvent.xy.clientX = e.clientX
            mouseEvent.xy.clientY = e.clientY
            me.dragCom = me._createCom(str)
            me.dragComRect = getElementRect(document.getElementById(id))
          },
          'on_mousemove' () {
            if (!mouseEvent.isDown) {
              return
            }
            mouseEvent.isDrag = true
          },
        }, 
          div('.com-tree-text', comCase(str))
        )
      })
    ))
  }
}
let ComTree = {
  name: 'ComTree',
  mixins: [
    Common,
  ],
  methods: {
    _renderTool () {
      let me = this
      let object = this.activeCom
      let isPage = this._isSameObject(object, this.activePage)
      let children = [
        ATooltip(
          div({
            slot: 'title'
          },
            '复制代码',
          ),
          AIcon({
            props_type: 'code',
            on_click () {
              me.codeView.isOpen = true
            }
          })
        )
      ]
      if (!isPage) {
        children = [
          ...children,
          ATooltip(
            div({
              slot: 'title'
            },
              '复制节点',
            ),
            AIcon({
              props_type: 'copy',
              on_click () {
                me._action_copyChild(object)
              }
            }),
          ),
          ATooltip(
            div({
              slot: 'title'
            },
              '删除节点',
            ),
            AIcon({
              props_type: 'delete',
              on_click () {
                me._action_removeChild(object)
              }
            }),
          ),
        ]
      }
      return div('.com-tree-item-tool', {
        'on_mousedown' (e) {
          e.stopPropagation()
        }
      },
        ...children,
      )
    },
  },
  render () {
    console.log('ComTree render')
    this.comTree.hook
    let me = this
    let mouseEvent = this.mouseEvent
    let items = this.flatComList
    let scrollTimer
    let getScrollEvent = (type = 'up') => {
      if (!mouseEvent.isDrag) {
        return {}
      }
      let isUp = type === 'up'
      let isDown = type === 'down'
      let isLeft = type === 'left'
      let isRight = type === 'right'
      return {
        on_mouseover () {
          let ele = document.querySelector('#comTreeList')
          clearInterval(scrollTimer)
          scrollTimer = setInterval(() => {
            if (isUp) {
              ele.scrollTop --
            }
            else if (isDown) {
              ele.scrollTop ++
            }
            else if (isLeft) {
              ele.scrollLeft --
            }
            else if (isRight) {
              ele.scrollLeft ++
            }
          })
        },
        on_mouseout () {
          clearInterval(scrollTimer)
        }
      }
    }
    return div('.com-tree', {
      'class_com-tree-drag': mouseEvent.isDrag,
    },
      h3('Dom 树'),
      div('.com-tree-holder com-tree-holder-top', {
        ...getScrollEvent('up')
      }),
      div('.com-tree-holder com-tree-holder-bottom', {
        ...getScrollEvent('down')
      }),
      div('.com-tree-holder2 com-tree-holder-left', {
        ...getScrollEvent('left')
      }),
      div('.com-tree-holder2 com-tree-holder-right', {
        ...getScrollEvent('right')
      }),
      this._renderTool(),
      div('.com-tree-list', {
        attrs_id: 'comTreeList',
        'on_mouseup' (e) {
          e.stopPropagation()
          if (mouseEvent.isDrag) {
            me.activePage.cache.isGroupOpen = true
            me._addChild(me.activePage, me.dragCom)
          }
          Event.$emit('g-mouseup', e)
        }
      },
        table(
        ...items.map((o, i) => {
          let { object, z } = o
          let isPage = this._isSameObject(object, this.activePage)
          let isActive = this._isSameObject(object, this.activeCom)
          let isDrag = this._isSameObject(object, this.dragCom)
          let paddingLeft = z * 16
          let textChildren = [
            me._renderTreeItemCode(object)
          ]
          let children = [
            span('.com-tree-text', ...textChildren)
          ]
          if (!isPage && !isDrag) {
            let isFirstChild = this._isFirstChild(object)
            if (isFirstChild) {
              children.push(
                div('.com-tree-drag-holder com-tree-drag-holder-top', {
                  'on_mouseup' (e) {
                    e.stopPropagation()
                    if (mouseEvent.isDrag) {
                      me._inserBefore(me.dragCom, object)
                    }
                    Event.$emit('g-mouseup', e)
                  }
                }),
              )
            }
            children.push(
              div('.com-tree-drag-holder com-tree-drag-holder-bottom', {
                'on_mouseup' (e) {
                  e.stopPropagation()
                  if (mouseEvent.isDrag) { 
                    me._insertAfter(me.dragCom, object)
                  }
                  Event.$emit('g-mouseup', e)
                }
              })
            )
          }
          
          if (object.childrenIds.length) {
            let cache = object.cache
            children = [
              AIcon('.com-tree-arrow', {
                props_type: cache.isGroupOpen 
                  ? 'caret-down' 
                  : 'caret-right',
                on_mousedown (e) {
                  e.stopPropagation()
                },
                on_click () {
                  cache.isGroupOpen = !cache.isGroupOpen
                  me._flatComTree()
                }
              }),
              ...children
            ]
          }
          else {
            paddingLeft += 14
          }
          return tr(td(div('.com-tree-item', {
            key: object.id,
            'attrs_id': `dt-${object.id}`,
            'style_padding-left': paddingLeft + 'px',
            'class_com-tree-active': isActive,
            'on_mousedown' (e) {
              me.activeCom = object
              if (object === me.activePage) {
                return
              }
              mouseEvent.isDown = true
              mouseEvent.xy.clientX = e.clientX
              mouseEvent.xy.clientY = e.clientY
              me.dragCom = me.activeCom
              me.activeComIndex = i
              me.dragComRect = getElementRect(document.querySelector(`#dt-${object.id}>.com-tree-text`))
            },
            'on_mouseup' (e) {
              e.stopPropagation()
              if (mouseEvent.isDrag && (me.dragCom !== object)) {
                object.cache.isGroupOpen = true
                me._addChild(object, me.dragCom)
              }
              Event.$emit('g-mouseup', e)
            }
          },
            ...children,
          )))
        })
      ))
    )
  }
}
let ComView = {
  name: 'ComView',
  mixins: [
    Common,
  ],
  render () {
    console.log('ComView render')
    return this._walkTree(noop, (
      object, 
      childrenRes
    ) => {
      let { type, props } = object
      if (type === 'text') {
        return props.value
      }
      let me = this
      let isPage = object === this.activePage
      let conf = this._getComConf(object)
      let isNative = conf.native
      let eventPrefix = isNative ? 'on' : 'nativeOn'
      let jsxProps = {
        key: object.id,
        'class_com-wrapper': true,
        'class_page': isPage,  
        'class_com-active': this._isSameObject(object, this.activeCom),
        [`${eventPrefix}_click`] (e) {
          e.stopPropagation()
          me.activeCom = object
        },
      }
      for (let key in props) {
        let val = props[key]
        if (key === 'key' || key === 'slot') {
          jsxProps[key] = val
        }
        else {
          jsxProps['props_' + key] = val
        }
        
      }
      return create(
        object.type,
        jsxProps,
        ...childrenRes,
      )
    })
  }
}
let Setting = {
  name: 'Setting',
  mixins: [
    Common,
  ],
  methods: {
    _renderProp () {
      let me = this
      let com = this.activeCom
      let props = comConf[com.type].props || {}
      props = {
        slot: {
          desc: '插槽名称',
          type: 'string'
        },
        ...props,
      }
      let comProps = com.props
      return AForm(
        ...Object.keys(props).map(key => {
          let { type, desc } = props[key]
          let inputChildren = []
          let isArrayType = Array.isArray(type)
          let isBooleanType = type === 'boolean'
          let isNumberType = type === 'number'
          let propValue = comProps[key]

          if (isArrayType || isBooleanType) {
            let enums = isArrayType ? type : [true, false]

            inputChildren = [
              ARadioGroup({
                props_buttonStyle: 'solid',
                props_value: propValue,
                on_input (val) {
                  if (val !== '-') {
                    me.$set(comProps, key, val)
                  }
                }
              },
                ARadioButton({
                  props_value: '-',
                  nativeOn_click () {
                    me.$set(comProps, key ,'')
                    delete comProps[key]
                  }
                }, '-'),
                ...enums.map(val => {
                  return ARadioButton({
                    props_value: val
                  }, val + '')
                })
              )
            ]
          }
          else if (isNumberType) {
            inputChildren = [
              AInputNumber({
                props_value: propValue,
                on_change (val) {
                  me.$set(comProps, key, val)
                  if (isNil(val)) {
                    delete comProps[key]
                  }
                }
              })
            ]
          }
          else {
            inputChildren = [
              AInput({
                props_allowClear: true,
                props_value: propValue,
                on_change (e) {
                  let val = e.target.value
                  me.$set(comProps, key, val)
                  if (!val) {
                    delete comProps[key]
                  }
                }
              })
            ]
          }
          return AFormItem({
            key,
            props_colon: false,
          },
            ATooltip({
              slot: 'label',
            }, 
              div({
                slot: 'title'
              },
                desc,
              ),
              key,
              AIcon({
                props_type: 'exclamation-circle',
                'style_padding-left': '4px'
              })
            ),
            ...inputChildren,
          )
        })
      )
    },
    _renderStyle () {
      // let me = this
      // let com = this.activeCom
      // let comProps = com.props
      // let styles = {
      //   'margin': {
      //     type: 'number',
      //     desc: 'margin',
      //   },
      //   'padding': {
      //     type: 'number',
      //     desc: 'padding'
      //   },
      // }
      // return AForm(
      //   ...Object.keys(styles).map(key => {
      //     // 
      //   })
      // )
    },
  },
  render () {
    console.log('Setting render')
    return ATabs('.com-setting', {
      props_defaultActiveKey: '1',
      'on_keydown' (e) {
        e.stopPropagation()
      }
    },
      ATabPane({
        props_tab: '属性设置',
        key: '1',
      },
        this._renderProp(),
      ),
      // ATabPane({
      //   props_tab: '样式设置',
      //   key: '2',
      // })
    )
  }
}
let DragCom = {
  name: 'DragCom',
  mixins: [
    Common,
  ],
  render () {
    console.log('DragCom render')
    let me = this
    let mouseEvent = this.mouseEvent
    let dragCom = me.dragCom
    let isDrag = mouseEvent.isDrag
    let dragComRect = me.dragComRect
    let xy = mouseEvent.xy

    if (isDrag) {
      return div('.com-tree-item com-drag', {
        'style_left': dragComRect.left + xy.moveX + 'px',
        'style_top': dragComRect.top + xy.moveY + 'px',
        'style_width': dragComRect.width + 'px',
        'style_height': dragComRect.height + 'px',
      },
        div('.com-tree-text',
          this._renderTreeItemCode(dragCom)
        )
      )
    }
    else {
      return null
    }
  }
}
let CodeView = {
  name: 'CodeView',
  mixins: [
    Common
  ],
  render (h) {
    jsx.h = h
    let me = this
    let codeView = this.codeView
    return AModal({
      props_title: 'Copy code',
      props_visible: codeView.isOpen,
      props_width: 800,
      props_footer: '',
      'on_cancel' () {
        codeView.isOpen = false
      },
    },
      div({
        'style_padding-bottom': '10px'
      },
        AButton({
          props_type: 'primary',
          on_click () {
            let $el = me.$refs.codeTextarea.$el
            $el.select()
            document.execCommand('copy')
            me.$message.success('复制成功')
          }
        }, '复制代码'),
        ARadioGroup({
          'style_padding-left': '10px',
          props_value: codeView.space,
          on_change (e) {
            codeView.space = e.target.value
          }
        },
          ARadio({
            props_value: '  ',
          }, '2空格'),
          ARadio({
            props_value: '    ',
          }, '4空格'),
          ARadio({
            props_value: '\t',
          }, 'Tab'),
        ),
      ),
      ATextarea('.code-textarea', {
        ref: 'codeTextarea',
        props_value: this._getCode(this.activePage, codeView.space),
        props_autoSize: true,
        'on_keydown' (e) {
          e.stopPropagation()
        }
      })
    )
  },
}
export default {
  name: 'Stage',
  mixins: [
    Common,
  ],
  components: {
    ComList,
    ComTree,
    ComView,
    Setting,
    DragCom,
    CodeView,
  },
  methods: {
    _renderHeader () {
      return h1('Antdv making~')
    },
    _renderLeftSide () {
      return create('com-list')
    },
    _renderLeftSide2 () {
      return create('com-tree')
    },
    _renderContent () {
      return create('com-view')
    },
    _renderDragCom () {
      return create('drag-com')
    },
    _renderRight () {
      return create('setting')
    },
    _renderMain () {
      return div('.root',
        this._renderDragCom(),
        create('code-view'),
        ALayout('.app',
          ALayoutHeader('.header', 
            this._renderHeader(),
          ),
          ALayout(
            ALayoutSider('.side-left',
              this._renderLeftSide(),
            ),
            ALayoutSider('.side-left side-left2',
              this._renderLeftSide2(),
            ),
            ALayoutContent('.content',
              this._renderContent(),
            ),
            ALayoutSider('.side-right',
              this._renderRight()
            ),
          ),
        )
      )
    },
  },
  created () {
    let page = this._createPage()
    this.activePage = page
    this.activeCom = page
    this._addObject(page)

    // let form = this._createCom('a-form')
    // this._addChild(page, form)

    // let formItem = this._createCom('a-form-item')
    // this._addChild(form, formItem)
    
    // let input = this._createCom('a-input')
    // this._addChild(formItem, input)
    // this._addChild(formItem, this._createCom('a-button'))
    // this._addChild(formItem, this._createCom('a-input'))

    // let formItem2 = this._createCom('a-form-item')
    // this._addChild(form, formItem2)
    // this._addChild(fromItem2, this._createCom('a-input-number'))

    // this.activeCom = formItem2
  },
  mounted () {
    let mouseEvent = this.mouseEvent
    Event.$on('g-mouseup', () => {
      if (!mouseEvent.isDown) {
        return
      }
      if (mouseEvent.isDrag && (this.dragCom.id in this.objects)) {
        this.activeCom = this.dragCom
      }
      mouseEvent.isDown = false
      mouseEvent.isDrag = false
    })
    window.addEventListener('mouseup', (e) => {
      Event.$emit('g-mouseup', e)
    })
    window.addEventListener('mousemove', (e) => {
      if (!mouseEvent.isDown) {
        return
      }
      this.dragCom.cache.isGroupOpen = false
      mouseEvent.isDrag = true
      mouseEvent.xy.moveX = e.clientX - mouseEvent.xy.clientX
      mouseEvent.xy.moveY = e.clientY - mouseEvent.xy.clientY
    })
    window.addEventListener('keydown', (e) => {
      let keyCode = e.keyCode
      let index = this.activeComIndex
      let maxIndex = this.flatComList.length - 1
      if (keyCode === 38) {
        index --
      }
      else if (keyCode === 40) {
        index ++
      }
      index = Math.max(0, Math.min(index, maxIndex))
      this.activeCom = this.flatComList[index].object
      this.activeComIndex = index
    })
  },
  render (h) {
    jsx.h = h
    console.log('Stage render')
    return this._renderMain()
  }
}
</script>