import{_ as a,o as e,c as t,Q as i}from"./chunks/framework.4c635b23.js";const o="/Sunny/assets/image-20230525215138063.450830d4.png",r="/Sunny/assets/image-20230525220018800.b309c261.png",l="/Sunny/assets/image-20230525220305880.67d40b55.png",f=JSON.parse('{"title":"1. 起步","description":"","frontmatter":{},"headers":[],"relativePath":"home/Pro Git.md","filePath":"home/Pro Git.md","lastUpdated":1703082481000}'),s={name:"home/Pro Git.md"},n=i('<p>学习来源：</p><p>ProGit：<a href="https://gitee.com/progit/index.html" target="_blank" rel="noreferrer">https://gitee.com/progit/index.html</a></p><p>廖雪峰官方网站：<a href="https://www.liaoxuefeng.com/wiki/896043488029600" target="_blank" rel="noreferrer">https://www.liaoxuefeng.com/wiki/896043488029600</a></p><h1 id="_1-起步" tabindex="-1">1. 起步 <a class="header-anchor" href="#_1-起步" aria-label="Permalink to &quot;1. 起步&quot;">​</a></h1><h2 id="_1-1-关于版本控制" tabindex="-1">1.1 关于版本控制 <a class="header-anchor" href="#_1-1-关于版本控制" aria-label="Permalink to &quot;1.1 关于版本控制&quot;">​</a></h2><p>版本控制：记录若干个文件内容变化，便于查阅特定版本修订情况的系统。</p><h3 id="本地版本控制系统" tabindex="-1">本地版本控制系统 <a class="header-anchor" href="#本地版本控制系统" aria-label="Permalink to &quot;本地版本控制系统&quot;">​</a></h3><p>采用简单的数据库记录文件的历次更新差异，最流行的是rcs，原理是保存并管理文件补丁（patch）。</p><p>文件补丁是一种特定格式的文本文件，记录着对应文件修订前后的内容变化。根据每次修订后的补丁，rcs 可以通过不断打补丁，计算出各个版本的文件内容。</p><img src="'+o+'" alt="image-20230525215138063" style="zoom:80%;"><h3 id="集中化版本控制系统" tabindex="-1">集中化版本控制系统 <a class="header-anchor" href="#集中化版本控制系统" aria-label="Permalink to &quot;集中化版本控制系统&quot;">​</a></h3><p>（Centralized Version Control Systems：CVCS）</p><p>如CVS、SVN、Perforce，有一个集中管理的服务器，保存所有文件的修订版本，协同工作的人都通过客户端连到这台服务器，取出最新的文件或者提交更新。</p><p>好处：比本地的容易管理，可多人协同，管理员可掌控各开发者权限</p><p>缺点：中央服务器的单点故障，有丢失数据的风险；操作需要联网</p><img src="'+r+'" alt="image-20230525220018800" style="zoom:67%;"><h3 id="分布式版本控制系统" tabindex="-1">分布式版本控制系统 <a class="header-anchor" href="#分布式版本控制系统" aria-label="Permalink to &quot;分布式版本控制系统&quot;">​</a></h3><p>（Distributed Version Control System：DVCS）</p><p>如Git、Mercurial、Bazaar、Darcs ，客户端不是提取最新版本的文件快照，而是把代码仓库完整地镜像下来。任何一处协同工作用的服务器发生故障，都可以用任何一个镜像出来的本地仓库恢复。</p><img src="'+l+'" alt="image-20230525220305880" style="zoom:67%;"><h2 id="_1-2-git简史" tabindex="-1">1.2 Git简史 <a class="header-anchor" href="#_1-2-git简史" aria-label="Permalink to &quot;1.2 Git简史&quot;">​</a></h2><p>1991年，Linus创建开源的Linux；</p><p>1991-2002年，Linux代码维护靠Linus手工合并；</p><p>2002-2005年，Linux社区启用分布式版本控制系统 BitKeeper维护代码；</p><p>2005年， BitKeeper免费使用权被收回，Linus用C写了分布式版本控制系统Git；</p><p>2008年，GitHub网站上线，无数开源项目开始迁移至GitHub。</p><h2 id="_1-3-git基础" tabindex="-1">1.3 Git基础 <a class="header-anchor" href="#_1-3-git基础" aria-label="Permalink to &quot;1.3 Git基础&quot;">​</a></h2><h3 id="文件状态" tabindex="-1">文件状态 <a class="header-anchor" href="#文件状态" aria-label="Permalink to &quot;文件状态&quot;">​</a></h3><p>任何一个文件，在 Git 内都只有三种状态：已提交（committed），已修改（modified）和已暂存（staged）。</p><p>已修改表示修改了某个文件，但还没有提交保存；（工作目录）</p><p>已暂存表示把已修改的文件放在下次提交时要保存的清单中；（暂存区域）</p><p>已提交表示该文件已经被安全地保存在本地数据库中了。（本地仓库）</p><h3 id="git目录" tabindex="-1">Git目录 <a class="header-anchor" href="#git目录" aria-label="Permalink to &quot;Git目录&quot;">​</a></h3><p>每个项目都有一个 Git 目录，用来保存元数据和对象数据库的地方（重要！！！）</p><p>每次克隆镜像仓库，实际拷贝的就是这个目录里面的数据。</p><p>（如果 <code>git clone</code> 出来，就是其中 <code>.git</code> 的目录；如果 <code>git clone --bare</code> ，新建的目录本身就是 Git 目录）</p><h2 id="_1-4-安装git" tabindex="-1">1.4 安装Git <a class="header-anchor" href="#_1-4-安装git" aria-label="Permalink to &quot;1.4 安装Git&quot;">​</a></h2><h3 id="从源代码安装" tabindex="-1">从源代码安装 <a class="header-anchor" href="#从源代码安装" aria-label="Permalink to &quot;从源代码安装&quot;">​</a></h3><p>版本最新（复杂，略）</p><h3 id="安装包安装" tabindex="-1">安装包安装 <a class="header-anchor" href="#安装包安装" aria-label="Permalink to &quot;安装包安装&quot;">​</a></h3><h4 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><ul><li><p>Fedora上用yum安装：yum install git-core</p></li><li><p>Ubuntu(Debian体系）用apt-get安装：sudo apt-get install git</p></li></ul><h4 id="mac" tabindex="-1">Mac <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;Mac&quot;">​</a></h4><ul><li><p>图形化安装工具：<a href="http://code.google.com/p/git-osx-installer" target="_blank" rel="noreferrer">http://code.google.com/p/git-osx-installer</a></p></li><li><p>通过MacPorts (<code>http://www.macports.org</code>) 安装，安装后用下面的命令安装 Git：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ sudo port install git-core +svn +doc +bash_completion +gitweb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ sudo port install git-core +svn +doc +bash_completion +gitweb</span></span></code></pre></div><ul><li>直接从AppStore安装Xcode，Xcode集成了Git，默认没有安装，需要运行Xcode，选择菜单“Xcode”-&gt;“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就完成安装了。</li></ul><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><ul><li><p><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">https://git-scm.com/downloads</a> （Git官网）</p></li><li><p><a href="https://gitforwindows.org/" target="_blank" rel="noreferrer">https://gitforwindows.org/</a></p><p>安装完成后，开始菜单找到Git-Git Bash，弹出命令行窗口即说明安装成功</p></li></ul><h2 id="_1-5-初次运行git前的配置" tabindex="-1">1.5 初次运行Git前的配置 <a class="header-anchor" href="#_1-5-初次运行git前的配置" aria-label="Permalink to &quot;1.5 初次运行Git前的配置&quot;">​</a></h2><h2 id="_1-6-获取帮助" tabindex="-1">1.6 获取帮助 <a class="header-anchor" href="#_1-6-获取帮助" aria-label="Permalink to &quot;1.6 获取帮助&quot;">​</a></h2><h2 id="_1-7-小结" tabindex="-1">1.7 小结 <a class="header-anchor" href="#_1-7-小结" aria-label="Permalink to &quot;1.7 小结&quot;">​</a></h2>',51),p=[n];function h(c,d,u,m,g,b){return e(),t("div",null,p)}const q=a(s,[["render",h]]);export{f as __pageData,q as default};
