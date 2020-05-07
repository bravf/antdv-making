export default {
  'a-table': {
    props: {
      "tableLayout": {
        "desc": "表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局",
        "type": "- | 'auto' | 'fixed'",
        "default": "无\n固定表头/列或使用了 column.ellipsis 时，默认值为 fixed"
      },
      "bordered": {
        "desc": "是否展示外边框和列边框",
        "type": "boolean",
        "default": "false"
      },
      "childrenColumnName": {
        "desc": "指定树形结构的列名",
        "type": "string[]",
        "default": "children"
      },
      "columns": {
        "desc": "表格列的配置描述，具体项见下表",
        "type": "array",
        "default": "-"
      },
      "components": {
        "desc": "覆盖默认的 table 元素",
        "type": "object",
        "default": "-"
      },
      "dataSource": {
        "desc": "数据数组",
        "type": "any[]",
        "default": ""
      },
      "defaultExpandAllRows": {
        "desc": "初始时，是否展开所有行",
        "type": "boolean",
        "default": "false"
      },
      "defaultExpandedRowKeys": {
        "desc": "默认展开的行",
        "type": "string[]",
        "default": "-"
      },
      "expandedRowKeys": {
        "desc": "展开的行，控制属性",
        "type": "string[]",
        "default": "-"
      },
      "expandedRowRender": {
        "desc": "额外的展开行",
        "type": "Function(record, index, indent, expanded):VNode | slot=\"expandedRowRender\" slot-scope=\"record, index, indent, expanded\"",
        "default": "-"
      },
      "expandIcon": {
        "desc": "自定义展开图标",
        "type": "Function(props):VNode | slot=\"expandIcon\" slot-scope=\"props\"",
        "default": "-"
      },
      "expandRowByClick": {
        "desc": "通过点击行来展开子行",
        "type": "boolean",
        "default": "false"
      },
      "expandIconColumnIndex": {
        "desc": "展开的图标显示在哪一列，如果没有 rowSelection，默认显示在第一列，否则显示在选择框后面",
        "type": "number",
        "default": ""
      },
      "footer": {
        "desc": "表格尾部",
        "type": "Function(currentPageData)|slot-scope",
        "default": ""
      },
      "indentSize": {
        "desc": "展示树形数据时，每层缩进的宽度，以 px 为单位",
        "type": "number",
        "default": "15"
      },
      "loading": {
        "desc": "页面是否加载中",
        "type": "boolean",
        "default": "false"
      },
      "locale": {
        "desc": "默认文案设置，目前包括排序、过滤、空数据文案",
        "type": "object",
        "default": "filterConfirm: '确定'\nfilterReset: '重置'\nemptyText: '暂无数据'\n\n"
      },
      "pagination": {
        "desc": "分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页",
        "type": "object",
        "default": ""
      },
      "rowClassName": {
        "desc": "表格行的类名",
        "type": "Function(record, index):string",
        "default": "-"
      },
      "rowKey": {
        "desc": "表格行 key 的取值，可以是字符串或一个函数",
        "type": "string|Function(record):string",
        "default": "'key'"
      },
      "rowSelection": {
        "desc": "列表项是否可选择，配置项",
        "type": "object",
        "default": "null"
      },
      "scroll": {
        "desc": "设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }",
        "type": "{ x: number | true, y: number }",
        "default": "-"
      },
      "showHeader": {
        "desc": "是否显示表头",
        "type": "boolean",
        "default": "true"
      },
      "size": {
        "desc": "表格大小",
        "type": ['default', 'middle', 'small'],
        "default": "default"
      },
      "title": {
        "desc": "表格标题",
        "type": "Function(currentPageData)|slot-scope",
        "default": ""
      },
      "customHeaderRow": {
        "desc": "设置头部行属性",
        "type": "Function(column, index)",
        "default": "-"
      },
      "customRow": {
        "desc": "设置行属性",
        "type": "Function(record, index)",
        "default": "-"
      },
      "getPopupContainer": {
        "desc": "设置表格内各类浮层的渲染节点，如筛选菜单",
        "type": "(triggerNode) => HTMLElement",
        "default": "() => TableHtmlElement"
      },
      "transformCellText": {
        "desc": "数据渲染前可以再次改变，一般用户空数据的默认配置，可以通过 ConfigProvider 全局统一配置",
        "type": "Function({ text, column, record, index }) => any",
        "default": "-"
      }
    }
  },
  'a-table-column': {
    props: {
      "align": {
        "desc": "设置列内容的对齐方式",
        "type": ['left', 'right' , 'center'],
        "default": "'left'"
      },
      "ellipsis": {
        "desc": "超过宽度将自动省略，暂不支持和排序筛选一起使用。\n设置为 true 时，表格布局将变成 tableLayout=\"fixed\"。",
        "type": "boolean",
        "default": "false"
      },
      "colSpan": {
        "desc": "表头列合并,设置为 0 时，不渲染",
        "type": "number",
        "default": ""
      },
      "dataIndex": {
        "desc": "列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法",
        "type": "string",
        "default": "-"
      },
      "defaultFilteredValue": {
        "desc": "默认筛选值",
        "type": "string[]",
        "default": "-"
      },
      "filterDropdown": {
        "desc": "可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互",
        "type": "VNode | slot-scope",
        "default": "-"
      },
      "filterDropdownVisible": {
        "desc": "用于控制自定义筛选菜单是否可见",
        "type": "boolean",
        "default": "-"
      },
      "filtered": {
        "desc": "标识数据是否经过过滤，筛选图标会高亮",
        "type": "boolean",
        "default": "false"
      },
      "filteredValue": {
        "desc": "筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组",
        "type": "string[]",
        "default": "-"
      },
      "filterIcon": {
        "desc": "自定义 fiter 图标。",
        "type": "VNode | (filtered: boolean, column: Column) => vNode |slot |slot-scope",
        "default": "false"
      },
      "filterMultiple": {
        "desc": "是否多选",
        "type": "boolean",
        "default": "true"
      },
      "filters": {
        "desc": "表头的筛选菜单项",
        "type": "object[]",
        "default": "-"
      },
      "fixed": {
        "desc": "列是否固定，可选 true(等效于 left) 'left' 'right'",
        "type": "boolean|string",
        "default": "false"
      },
      "key": {
        "desc": "Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性",
        "type": "string",
        "default": "-"
      },
      "customRender": {
        "desc": "生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并",
        "type": "Function(text, record, index) {}|slot-scope",
        "default": "-"
      },
      "sorter": {
        "desc": "排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true",
        "type": "Function|boolean",
        "default": "-"
      },
      "sortOrder": {
        "desc": "排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false",
        "type": "boolean|string",
        "default": "-"
      },
      "sortDirections": {
        "desc": "支持的排序方式，取值为 'ascend' 'descend'",
        "type": "Array",
        "default": "['ascend', 'descend']"
      },
      "title": {
        "desc": "列头显示文字",
        "type": "string|slot",
        "default": "-"
      },
      "width": {
        "desc": "列宽度",
        "type": "string|number",
        "default": "-"
      },
      "customCell": {
        "desc": "设置单元格属性",
        "type": "Function(record, rowIndex)",
        "default": "-"
      },
      "customHeaderCell": {
        "desc": "设置头部单元格属性",
        "type": "Function(column)",
        "default": "-"
      },
      "onFilter": {
        "desc": "本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用",
        "type": "Function",
        "default": "-"
      },
      "onFilterDropdownVisibleChange": {
        "desc": "自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownVisibleChange事件使用",
        "type": "function(visible) {}",
        "default": "-"
      },
      "slots": {
        "desc": "使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}",
        "type": "object",
        "default": "-"
      },
      "scopedSlots": {
        "desc": "使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'}",
        "type": "object",
        "default": "-"
      }
    }
  },
  'a-table-column-group': {
    props: {
      "title": {
        "desc": "列头显示文字",
        "type": "string|slot",
        "default": "-"
      },
      "slots": {
        "desc": "使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { title: 'XXX'}",
        "type": "object",
        "default": "-"
      }
    }
  }
}