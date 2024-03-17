---
layout: ../../layouts/MarkdownPostLayout.astro
title: vxe-table
pubDate: 2024-03-16
description: '一个基于 vue 的 PC 端表单/表格组件，支持增删改查、虚拟列表、虚拟树、懒加载、快捷菜单、数据校验、打印导出、表单渲染、数据分页、弹窗、自定义模板、渲染器、JSON 配置式...'
author: 帅宁
tags: ['code','plugin']
---

## vxe-table

一个基于 vue 的 PC 端表单/表格组件，支持增删改查、虚拟列表、虚拟树、懒加载、快捷菜单、数据校验、打印导出、表单渲染、数据分页、弹窗、自定义模板、渲染器、JSON 配置式...

[插件文档：vxe-table](https://vxetable.cn/#/table/start/install)

<b>因为帮朋友排查问题而发现这个组件,记录一下。</b>
盆友因为`element table`的问题 问到我
附上他看到的代码 开始是要把这个代码转成`v3`转完发现报错 `insertAt is not iterable` 明显是此实例没有此方法
```jsx
async insertEvent(type){
  const $table = this.$refs[type]
  let newRow;
  if(type === 'xTable')....

  const {row:data} = await $table.insertAt(newRow,-1)
  await $table.setActiveCell(data,'name')
}
```
然后当我看到后获取的`ref`里没有这些方法，一开始就错失了方向，然后我就去找了一下，发现了这个组件`vxe-table`。这组件方便`element table`表格的操作等等 还有其他组件

#### 使用方法：Vue3.x
```jsx
npm install vxe-table@next
import { createApp } from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(VXETable).mount('#app')
```
然后就可以完美无瑕的使用对应的API和组件