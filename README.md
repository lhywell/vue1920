# 1920宽屏Vue项目适配方案

## 技术栈
vuecli3 + webpack4 + postcss + elementUI

## 路由
1. 轮播图

## 原理
设计稿在1920宽度的情况下，通过安装postcss-px2rem，px2rem-loader插件将像素单位自动转为rem单位

### 不转化单位
在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个

在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个