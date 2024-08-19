## 前言

应用开发示例

[Yunzai文档 https://yunzai-org.github.io/docs/](https://yunzai-org.github.io/docs/)

[图片开发文档](https://github.com/lemonade-lab/react-puppeteer)

## 使用方法

- 依赖

```sh
npm install yarn@1.12.1 -y
yarn
```

- 启动

```sh
yarn app
# /
yarn dev
```

- 打包

```sh
yarn build
```

- 发布

```sh
npm login
```

> package.json
> 删除 "private": true

```sh
npm publish
```

## 图片开发

需要启动两个进程

- 浏览器

```sh
yarn img-dev
```

- css解析

```sh
yarn css-dev
```

## 注意

> to a dynamic import() which is available in all CommonJS modules.

- 重新拉依赖

```sh
rm -rf yarn.lock
rm -rf node_modules
yarn
```
