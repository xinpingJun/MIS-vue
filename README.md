##  基于 Star Admin Bootstrap Template 开发的vue后台管理系统

### 使用插件
- Star Admin Bootstrap Template 布局样式
- bootstrap -js css
- jquery
- materialdesignicons -icon
- compass-mixins -scss
- perfect-scrollbar

- 时间估计到1月底
### 备注
- public  存放静态文件
- jquery Bootstrap 在vue-cli 引入
- 更改 jquery Bootstrap 引入方式
-  vue-cli3 静态资源处理
  静态资源可以通过两种方式进行处理:
  1、以下情况下，资源不会被 webpack 处理，而是被直接拷贝：
    放置在 public 目录下，即使未被使用。
    通过绝对路径被引用，即以 / 开头的路径。
  2、以下情况下，资源会被 webpack 处理（URL的resolve、minify、uglify、转 base64 等）：
    使用 JavaScript 导入。
    在 template/CSS 中通过相对路径（即以 . 开头或直接以文件（夹）名开头）被引用。
    URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。
    URL 以 @ 开头，它也会作为一个模块请求被解析（@ 是在 webpack 设置的 alias）
### 未处理问题
- 背景图片路径问题 -- 展示将图片放置在public文件夹中 绝对路径引用
-
