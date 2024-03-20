---
layout: ../../layouts/MarkdownPostLayout.astro
title: '关于element的问题记录'
pubDate: 2024-03-20
description: '关于一些在项目中element使用的问题记录和解决'
author: '帅宁'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["element", "vue", "前端"]
---

# 关于element的问题记录

### 弹窗编辑form resetFields()方法失效
resetFields()在清空数据的时候，会默认恢复数据到数据的初始值，如果第一次表单回显时初始化数据被替换，那么后续resetFields()清空数据后恢复到的值会一直是第一次回显的值。
<b>使用nextTick()解决</b>
```jsx
const showEdit = async (row) => {
  dialogFormVisible.value = true
  await nextTick()
  // 回显赋值form
  ...
}
```