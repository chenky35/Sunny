#  02 内容综述
- Linux背景
- 系统操作
- 服务管理
- Shell脚本
- 文本操作
- 常用服务搭建

# 03 什么是Linux

### 含义
1. Linus编写的开源操作系统的内核  
2. 广义的操作系统  

### 执行环境   
1. 云主机  
2. 无数据的PC（不推荐多系统混跑）  
3. 虚拟机（推荐方式）  

# 04 Linux的内核版本及常见发行版本

## 内核版本
https://www.kernel.org/
1. 主版本号

2. 次版本号

  奇数为开发版，偶数为稳定版

3. 末版本号

## 发行版本
- RedHat Enterprise Linux（经过专业测试，稳定；收费）  
- Fedora(社区提供，免费，软件新，稳定性略差)  
- CentOS(免费，稳定)
- Debian、Ubuntu：图形界面

# 05 安装VirtualBox虚拟机
https://www.virtualbox.org/wiki/Downloads

# 06 在虚拟机中安装Linux
系统镜像下载

http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-1810.iso

# 07 启动Linux
### 图形界面和命令行界面相互切换
- 图形界面-应用程序-终端，输入init　3，打开命令行终端
- 命令行界面，输入init　5，回到图形界面

### 用户登录和操作
- root用户，提示符：#  
- 普通用户，提示符：$  
- 退出当前用户/切换用户：exit
- 关机：init　0
- 重启：reboot

### 终端的使用
- 图形终端
- 命令行终端
- 远程终端（SSH、VNC）

### 常见目录

- <font color=blue>/</font>　根目录
- <font color= blue >/root</font>　root用户的家目录
- <font color=blue >/home/username</font>　普通用户的家目录
- <font color=blue>/etc</font>　配置文件目录
- <font color=blue>/bin</font>　命令目录
- <font color=blue>/sbin</font>　管理命令目录
- <font color=blue>/usr/bin、/usr/sbin</font>　系统预装的其他命令

# 08 帮助命令
### 1. man
- man　命令名称 
  
    可获取命令的相关帮助
    
    eg：man　ls
    
- man　数字　man
  
    man命令有9章，加数字可获取对应章节的帮助（命令可能重名，因此划分多个章节） 
        
    eg： 
    
    man　7　man 
    
    man　1　passwd（或man　passwd）：查找passwd命令的帮助 
    
    man　5　passwd：查找passwd配置文件的帮助 
    
    man　-a　passwd：查找包含passwd关键字的所有帮助，q退出，再按回车可逐个查看
    
    - 第1章：可从终端运行的命令，1可省略  
    - 第2章：系统调用（编程函数）  
    - 第3章：库调用（编程函数）  
    - 第4章：/dev目录中的文件  
    - 第5章：配置文件格式说明  
    - 第6章：游戏  
    - 第7章：宏（文件系统标准描述、网络协议、字符集、man文档等）  
    - 第8章：系统管理命令  
    - 第9章：废弃章节

### 2. help  
- 内部命令使用help帮助(shell自带的命令) 

  help　命令名称 

  eg：help　cd 

- 外部命令使用help帮助 

  命令名称　--help

  eg：ls　--help

### 3. info  
- 比help更详细，作为help补充

  info　命令名称 

# 09 











