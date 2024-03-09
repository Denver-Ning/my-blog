---
layout: ../../layouts/MarkdownPostLayout.astro
title: Screenshot to Code
pubDate: 2024-03-08
description: '放入屏幕截图并将其转换为干净的代码（HTML/Tailwind/React/Vue）'
author: 帅宁
tags: ['code']
---

# Screenshot to Code

这个简单的应用可以将屏幕截图转换为对应的代码（HTML/Tailwind CSS、React、Bootstrap或Vue）。它使用GPT-4 Vision（或Claude 3）生成代码和DALL-E 3生成相似的图像。现在还支持输入网址以克隆现有的网站。

## 仓库地址

- **Repository:** [Screenshot to Code GitHub Repository](https://github.com/abi/screenshot-to-code)

### 使用方法

该应用程序具有一个React/Vite前端和一个FastAPI后端。您需要一个具有访问GPT-4 Vision API权限的OpenAI API密钥。

运行后端（使用Poetry进行包管理 - 如果没有，安装 `pip install poetry`）：
```bash
cd backend
echo "OPENAI_API_KEY=sk-your-key" > .env
poetry install
poetry shell
poetry run uvicorn main:app --reload --port 7001
```
运行前端：
```bash
cd frontend
yarn
yarn dev
```
打开 http://localhost:5173 即可使用该应用程序。