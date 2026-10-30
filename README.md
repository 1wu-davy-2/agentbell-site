# AgentBell 官网

AgentBell 的介绍网站，纯静态 HTML / CSS / JavaScript，无构建步骤、无第三方脚本。

线上地址：<https://1wu-davy-2.github.io/agentbell-site/>

## 内容

- `index.html`：单页站点（中文默认，右上角可切到 English）
- `assets/site.css`：视觉样式与响应式布局
- `assets/site.js`：中英切换、截图标签页、复制指令、滚动动效
- `assets/screenshots/`：AgentBell 真实界面截图
- `assets/mark.svg` / `assets/icon-256.png`：标志与图标

## 本地预览

```bash
python -m http.server 4173
# 打开 http://127.0.0.1:4173/
```

## 发布

仓库 `main` 分支根目录通过 GitHub Pages 发布。推送后等待 Pages 构建完成即可。

## 相关

- 主项目：<https://github.com/1wu-davy-2/AgentBell>
- 下载：<https://github.com/1wu-davy-2/AgentBell/releases/latest>
- 许可：MIT License
