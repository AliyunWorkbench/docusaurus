<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/logo.png" alt="logo" width="35" height="35" align="right" />

# docusaurus

## 一、docusaurus简介及使用
### **背景介绍**

docusaurus是一个用于轻松构建、部署和维护开源项目网站的项目。它拥有简单易上手，可本地化，以及可定制的优点。

项目官网：https://docusaurus.io/

源项目地址：https://github.com/facebook/docusaurus

### **最佳实践**

1.1 docusaurus的本地发布

``` bash
$ npm i
npm run build
npm run serve
```

1.2 docusaurus的线上网站发布

见下一章。

## 二、将docusaurus项目通过云开发平台，快速发布为网站

### **背景介绍**
云开发平台是阿里云面向广大开发者提供的免费云上研发工作平台，可以实现开发的全流程。关于云开发平台的介绍：https://help.aliyun.com/product/161245.html。

### **最佳实践**

**1.创建docusaurus代码项目**

直接fork本项目到自己的GitHub账号下。

**2.打开云开发平台，完成阿里云账号注册登陆，同意云开发平台服务协议** https://workbench.aliyun.com/application

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/sign.png" width="400">

**3.创建云开发平台-前端部署应用**

3.1 创建前端应用

依次点击「应用列表」「前端应用」「新建前端应用」按钮。首先绑定GitHub帐号，允许云开发平台构建、发布你的GitHub代码为可访问的网站。

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/create_0.png" width="200">

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/oauth.png" width="200">

选择第一步中的代码仓库、主干分支等，并点击下一步。主干分支一般指的是代码的master或main等分支。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/creat1.png" width="300">

填写基本信息并点击「完成」。稍等片刻创建成功后，将进入到应用部署界面。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/create2.png" width="600">

3.2 开发部署配置

填写日常/线上环境的部署配置
按照"?"提示，依次填写部署配置信息。其中：

- 如需使用自定义域名访问，可将自定义域名填入对应位置，并在部署成功后，根据步骤3.4进行域名解析后实现自定义域名访问</br>
  <img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/build.png" width="400">

3.3 进行项目的部署和查看

依次点击「部署」「确定」，即可启动日常/线上环境的发布流程。对于每个代码分支，要求先发布日常环境，再发布线上。若不需多套环境，则可以只使用日常环境，或者发布一次日常环境后，仅使用线上环境即可。

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/deploy.png" width="300">

3.3.1 部署完成，查看部署结果

访问**测试域名**或者**自定义域名**，以下以测试域名为例

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/create7.png" width="650">

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/create8.png" width="650">

3.3.2 在部署完成后，部署状态会显示为“已部署”。且部署网站的记录和过程，也会被完整记录下来：

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/create4.png" width="600">

3.3.3可点击部署记录的「查看结果」来查看部署到OSS存储中的静态资源。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/data2.png" width="400">

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/result_download.png" width="350">

3.3.4 可点击部署记录的「查看日志」查看部署的详细过程，并在部署发生错误时，精确定位学习错误情况。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/data1.png" width="400">

部署操作可以在每次更新内容并push后再次进行，实现静态网站内容的按需实时更新。

3.4 将OSS存储中的项目发布为网站链接

3.4.1 解析自己的域名到OSS Bucket的访问域名上

打开自己域名的DNS解析控制台，使用阿里云域名或其它提供商的域名均可，此处以阿里云为例：

首先，找到自己要解析的域名，添加/修改一条解析记录：

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/cname.png" width="650">

如下图所示，配置CNAME、自己的域名、记录值：

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/cname_2.png" width="400">

记录值查看方法示意图：

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/oss_domain.png" width="600">

完成配置后，稍等片刻，确定使用https://zijian.aliyun.com/ ，或者ping/dig/nslookup等指令可以查找到本域名的解析情况。

3.4.2 当URL仅访问目录而非目录下的HTML文件时，由OSS托管路由自动定向至目录下的指定HTML文件

某些前端项目生成的静态代码，其HTML中嵌入的链接地址是不含index.html的。这要求放置HTML文件的存储，或NGINX服务器等，有将裸访问路径自动对应到具体HTML文件的能力。

OSS Bucket具有该托管能力，需要在使用的OSS Bucket内，选择「基础设置」「静态页面」，并如下图所示，填写默认首页为index.html，开通子目录首页功能，并点击「保存」。

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/oss_index.png" width="350">

3.5 （可选）使用CDN加速域名访问，节约流量费用

可点击「部署配置」中的「如何配置CDN加速」，将自己的域名与CDN加速绑定，从而加速网站访问。
