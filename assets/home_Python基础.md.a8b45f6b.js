import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.4c635b23.js";const b=JSON.parse('{"title":"1. 输出","description":"","frontmatter":{},"headers":[],"relativePath":"home/Python基础.md","filePath":"home/Python基础.md","lastUpdated":1703082481000}'),p={name:"home/Python基础.md"},l=e(`<h1 id="_1-输出" tabindex="-1">1. 输出 <a class="header-anchor" href="#_1-输出" aria-label="Permalink to &quot;1. 输出&quot;">​</a></h1><h2 id="_1-1-打印" tabindex="-1">1.1 打印 <a class="header-anchor" href="#_1-1-打印" aria-label="Permalink to &quot;1.1 打印&quot;">​</a></h2><h3 id="print-方法" tabindex="-1">print()方法 <a class="header-anchor" href="#print-方法" aria-label="Permalink to &quot;print()方法&quot;">​</a></h3><h3 id="格式化输出" tabindex="-1">格式化输出 <a class="header-anchor" href="#格式化输出" aria-label="Permalink to &quot;格式化输出&quot;">​</a></h3><ul><li>连接符 +</li><li>格式符 %s、%d、%r</li><li>格式化函数 format()</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name = &#39;cky&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">age = 26</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 通过连接符 + 进行拼接 （age是整型，需要转换成字符串）</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;name is :&quot; + name + &quot;,age is :&quot; + str(age))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 通过格式符 %s、%d 进行替换，%s指定字符串，%d(data)指定数字，不确定数据类型则用 %r </span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;name is : %s, age is :%d&quot; % (name, age))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 通过格式化函数 format()进行格式化，未指定位置则按默认顺序，也可通过{0} {1}指定位置，或用变量指定对应关系（最推荐的方法)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;name is :{}, age is :{}&quot;.format(name, age))      # 默认顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;name is :{1}, age is :{0}&quot;.format(age, name))       # 位置指定</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;name is :{n}, age is :{a}&quot;.format(n=name, a=age))       # 变量指定对应关系</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name = &#39;cky&#39;</span></span>
<span class="line"><span style="color:#24292e;">age = 26</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 通过连接符 + 进行拼接 （age是整型，需要转换成字符串）</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;name is :&quot; + name + &quot;,age is :&quot; + str(age))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 通过格式符 %s、%d 进行替换，%s指定字符串，%d(data)指定数字，不确定数据类型则用 %r </span></span>
<span class="line"><span style="color:#24292e;">print(&quot;name is : %s, age is :%d&quot; % (name, age))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 通过格式化函数 format()进行格式化，未指定位置则按默认顺序，也可通过{0} {1}指定位置，或用变量指定对应关系（最推荐的方法)</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;name is :{}, age is :{}&quot;.format(name, age))      # 默认顺序</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;name is :{1}, age is :{0}&quot;.format(age, name))       # 位置指定</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;name is :{n}, age is :{a}&quot;.format(n=name, a=age))       # 变量指定对应关系</span></span></code></pre></div><h2 id="_1-2-引号和注释" tabindex="-1">1.2 引号和注释 <a class="header-anchor" href="#_1-2-引号和注释" aria-label="Permalink to &quot;1.2 引号和注释&quot;">​</a></h2><h3 id="引号" tabindex="-1">引号 <a class="header-anchor" href="#引号" aria-label="Permalink to &quot;引号&quot;">​</a></h3><p>Python中不区分单引号、双引号；</p><p>可以互相嵌套使用，但不能交叉使用。</p><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h3><p>单行注释：#，位于代码前一行或代码末尾</p><p>多行注释：三引号，不区分单、双引号</p><h1 id="_2-分支和循环" tabindex="-1">2. 分支和循环 <a class="header-anchor" href="#_2-分支和循环" aria-label="Permalink to &quot;2. 分支和循环&quot;">​</a></h1><h2 id="_2-1-if语句" tabindex="-1">2.1 if语句 <a class="header-anchor" href="#_2-1-if语句" aria-label="Permalink to &quot;2.1 if语句&quot;">​</a></h2><p>不使用{}语句体，通过语句缩进判断语句体，缩进默认4个空格；</p><p>判断相等 ==</p><p>判断不等 !=</p><p>判断是否包含 in 、not in</p><p>进行布尔类型判断 if True</p><h2 id="_2-2-for语句" tabindex="-1">2.2 for语句 <a class="header-anchor" href="#_2-2-for语句" aria-label="Permalink to &quot;2.2 for语句&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 循环遍历字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">for s in &quot;hello&quot;:</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(s)			# 按顺序输出字符串每个字符</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 循环遍历字符串</span></span>
<span class="line"><span style="color:#24292e;">for s in &quot;hello&quot;:</span></span>
<span class="line"><span style="color:#24292e;">	print(s)			# 按顺序输出字符串每个字符</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 循环遍历列表</span></span>
<span class="line"><span style="color:#e1e4e8;">lists = [&#39;aaa&#39;,&#39;bbb&#39;,&#39;ccc&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">for li in lists:</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(li)			# 按顺序输出列表中每个元素</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 循环遍历列表</span></span>
<span class="line"><span style="color:#24292e;">lists = [&#39;aaa&#39;,&#39;bbb&#39;,&#39;ccc&#39;]</span></span>
<span class="line"><span style="color:#24292e;">for li in lists:</span></span>
<span class="line"><span style="color:#24292e;">	print(li)			# 按顺序输出列表中每个元素</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 按一定次数循环</span></span>
<span class="line"><span style="color:#e1e4e8;">for i in range(5):</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(i)			# 输出0-4，range()函数默认从0开始循环</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;"># range()函数设置起始位置和步长：range(start,end[,step])</span></span>
<span class="line"><span style="color:#e1e4e8;"># 如以下输出10以内的奇数</span></span>
<span class="line"><span style="color:#e1e4e8;">for i in range(1,10,2):</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(i)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 按一定次数循环</span></span>
<span class="line"><span style="color:#24292e;">for i in range(5):</span></span>
<span class="line"><span style="color:#24292e;">	print(i)			# 输出0-4，range()函数默认从0开始循环</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;"># range()函数设置起始位置和步长：range(start,end[,step])</span></span>
<span class="line"><span style="color:#24292e;"># 如以下输出10以内的奇数</span></span>
<span class="line"><span style="color:#24292e;">for i in range(1,10,2):</span></span>
<span class="line"><span style="color:#24292e;">	print(i)</span></span></code></pre></div><h1 id="_3-列表、元组和字典" tabindex="-1">3. 列表、元组和字典 <a class="header-anchor" href="#_3-列表、元组和字典" aria-label="Permalink to &quot;3. 列表、元组和字典&quot;">​</a></h1><h2 id="_3-1-列表" tabindex="-1">3.1 列表 <a class="header-anchor" href="#_3-1-列表" aria-label="Permalink to &quot;3.1 列表&quot;">​</a></h2><p>list：列表，即数组，用 [] 表示</p><p>list[0]：列表第一个元素</p><p>list[-1]：列表最后一个元素</p><p>list[i]：列表第 i+1 个元素</p><p>list.append()：列表末尾添加元素</p><p>list.pop()：列表删除指定位置的元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 列表</span></span>
<span class="line"><span style="color:#e1e4e8;">lists = [1, 2, 3, &#39;a&#39;, 5]      # 定义列表</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists[0])</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists[-1])    # 输出列表最后一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">lists[4] = &#39;b&#39;      # 修改列表第5个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists)</span></span>
<span class="line"><span style="color:#e1e4e8;">lists.append(&#39;c&#39;)   # 列表末尾追加元素</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists)</span></span>
<span class="line"><span style="color:#e1e4e8;">lists.pop(0)        # 删除列表第一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">print(lists)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 列表</span></span>
<span class="line"><span style="color:#24292e;">lists = [1, 2, 3, &#39;a&#39;, 5]      # 定义列表</span></span>
<span class="line"><span style="color:#24292e;">print(lists)</span></span>
<span class="line"><span style="color:#24292e;">print(lists[0])</span></span>
<span class="line"><span style="color:#24292e;">print(lists[-1])    # 输出列表最后一个元素</span></span>
<span class="line"><span style="color:#24292e;">lists[4] = &#39;b&#39;      # 修改列表第5个元素</span></span>
<span class="line"><span style="color:#24292e;">print(lists)</span></span>
<span class="line"><span style="color:#24292e;">lists.append(&#39;c&#39;)   # 列表末尾追加元素</span></span>
<span class="line"><span style="color:#24292e;">print(lists)</span></span>
<span class="line"><span style="color:#24292e;">lists.pop(0)        # 删除列表第一个元素</span></span>
<span class="line"><span style="color:#24292e;">print(lists)</span></span></code></pre></div><h2 id="_3-2-元组" tabindex="-1">3.2 元组 <a class="header-anchor" href="#_3-2-元组" aria-label="Permalink to &quot;3.2 元组&quot;">​</a></h2><p>tuple：元组，用 () 表示，也可不用</p><p>单个元素用 () 时需在后面加逗号</p><p>元组之间可以使用 +、+=和 * 号进行运算，得到新的元组</p><p><strong>元组和列表的区别：</strong></p><p>列表是可变的，可追加/修改/删除其中元素；元组不可变；</p><p>不确定元素个数时用列表，提前知道元素数量时用元组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 元组</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple1 = (1, 2, 3)      # 定义元组</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple2 = &#39;a&#39;, &#39;b&#39;, &#39;c&#39;  # 可不用()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tuple1[0])        # 查看元组</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tuple2[0:1])</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple3 = tuple1 + tuple2    # 连接元组</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tuple3)</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple4 = (&#39;hello&#39;,)     # 单个元素用()时需加逗号，否则括号会被当作运算符使用</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tuple4 * 3)       # 复制元组</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 元组</span></span>
<span class="line"><span style="color:#24292e;">tuple1 = (1, 2, 3)      # 定义元组</span></span>
<span class="line"><span style="color:#24292e;">tuple2 = &#39;a&#39;, &#39;b&#39;, &#39;c&#39;  # 可不用()</span></span>
<span class="line"><span style="color:#24292e;">print(tuple1[0])        # 查看元组</span></span>
<span class="line"><span style="color:#24292e;">print(tuple2[0:1])</span></span>
<span class="line"><span style="color:#24292e;">tuple3 = tuple1 + tuple2    # 连接元组</span></span>
<span class="line"><span style="color:#24292e;">print(tuple3)</span></span>
<span class="line"><span style="color:#24292e;">tuple4 = (&#39;hello&#39;,)     # 单个元素用()时需加逗号，否则括号会被当作运算符使用</span></span>
<span class="line"><span style="color:#24292e;">print(tuple4 * 3)       # 复制元组</span></span></code></pre></div><h2 id="_3-3-字典" tabindex="-1">3.3 字典 <a class="header-anchor" href="#_3-3-字典" aria-label="Permalink to &quot;3.3 字典&quot;">​</a></h2><p>字典：用 {} 表示，每个元素由key和value组成，中间用冒号，不同元素之间用逗号</p><p>keys()：返回字典key的列表</p><p>values()：返回字典value的列表</p><p>items()：将所有字典元素以列表的形式返回，列表中每一项都包含key和value</p><p>pop()：通过指定key删除字典中的元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 字典</span></span>
<span class="line"><span style="color:#e1e4e8;">dicts = {&quot;username&quot;: &quot;cky&quot;, &quot;password&quot;: &quot;123&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dicts.keys())     # keys()方法返回字典key的列表</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dicts.values())   # values()返回字典value的列表</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dicts.items())    # items()将所有字典元素以列表的形式返回，列表中每一项都包含key和value</span></span>
<span class="line"><span style="color:#e1e4e8;">for k, v in dicts.items():   # 循环打印字典key和value</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&quot;dicts keys is %r&quot; %k)</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&quot;dicts values is %r&quot; %v)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">dicts[&quot;age&quot;] = 25    # 向字典中添加键值对</span></span>
<span class="line"><span style="color:#e1e4e8;">dicts.pop(&quot;password&quot;)   # 删除键是password的项</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dicts.items())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 字典</span></span>
<span class="line"><span style="color:#24292e;">dicts = {&quot;username&quot;: &quot;cky&quot;, &quot;password&quot;: &quot;123&quot;}</span></span>
<span class="line"><span style="color:#24292e;">print(dicts.keys())     # keys()方法返回字典key的列表</span></span>
<span class="line"><span style="color:#24292e;">print(dicts.values())   # values()返回字典value的列表</span></span>
<span class="line"><span style="color:#24292e;">print(dicts.items())    # items()将所有字典元素以列表的形式返回，列表中每一项都包含key和value</span></span>
<span class="line"><span style="color:#24292e;">for k, v in dicts.items():   # 循环打印字典key和value</span></span>
<span class="line"><span style="color:#24292e;">    print(&quot;dicts keys is %r&quot; %k)</span></span>
<span class="line"><span style="color:#24292e;">    print(&quot;dicts values is %r&quot; %v)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">dicts[&quot;age&quot;] = 25    # 向字典中添加键值对</span></span>
<span class="line"><span style="color:#24292e;">dicts.pop(&quot;password&quot;)   # 删除键是password的项</span></span>
<span class="line"><span style="color:#24292e;">print(dicts.items())</span></span></code></pre></div><h1 id="_4-函数、类和方法" tabindex="-1">4 函数、类和方法 <a class="header-anchor" href="#_4-函数、类和方法" aria-label="Permalink to &quot;4 函数、类和方法&quot;">​</a></h1><h2 id="_4-1-函数" tabindex="-1">4.1 函数 <a class="header-anchor" href="#_4-1-函数" aria-label="Permalink to &quot;4.1 函数&quot;">​</a></h2><p>def关键字定义函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 定义add()函数</span></span>
<span class="line"><span style="color:#e1e4e8;">def add1(a, b):      # 创建add()函数，接收a,b两个参数</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(a+b)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 调用add()函数</span></span>
<span class="line"><span style="color:#e1e4e8;">add1(1, 2)       # 调用函数，传两个参数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def add2(a, b):</span></span>
<span class="line"><span style="color:#e1e4e8;">    return a + b    # 函数通常不直接打印结果，而是将结果通过return关键字返回</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">c = add2(3, 4)      # 使用变量c接收add()函数的返回值</span></span>
<span class="line"><span style="color:#e1e4e8;">print(c)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def add(a=1, b=3):  # add()函数设置默认参数</span></span>
<span class="line"><span style="color:#e1e4e8;">    return a + b</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">c1 = add()          # 调用时不传参，则使用默认参数进行计算</span></span>
<span class="line"><span style="color:#e1e4e8;">c2 = add(2, 4)      # 调用时传参，则计算传入参数的值</span></span>
<span class="line"><span style="color:#e1e4e8;">print(c1)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(c2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 定义add()函数</span></span>
<span class="line"><span style="color:#24292e;">def add1(a, b):      # 创建add()函数，接收a,b两个参数</span></span>
<span class="line"><span style="color:#24292e;">    print(a+b)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 调用add()函数</span></span>
<span class="line"><span style="color:#24292e;">add1(1, 2)       # 调用函数，传两个参数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def add2(a, b):</span></span>
<span class="line"><span style="color:#24292e;">    return a + b    # 函数通常不直接打印结果，而是将结果通过return关键字返回</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">c = add2(3, 4)      # 使用变量c接收add()函数的返回值</span></span>
<span class="line"><span style="color:#24292e;">print(c)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def add(a=1, b=3):  # add()函数设置默认参数</span></span>
<span class="line"><span style="color:#24292e;">    return a + b</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">c1 = add()          # 调用时不传参，则使用默认参数进行计算</span></span>
<span class="line"><span style="color:#24292e;">c2 = add(2, 4)      # 调用时传参，则计算传入参数的值</span></span>
<span class="line"><span style="color:#24292e;">print(c1)</span></span>
<span class="line"><span style="color:#24292e;">print(c2)</span></span></code></pre></div><h2 id="_4-2-类和方法" tabindex="-1">4.2 类和方法 <a class="header-anchor" href="#_4-2-类和方法" aria-label="Permalink to &quot;4.2  类和方法&quot;">​</a></h2><p>class关键字创建类；</p><p>Python3中，object为所有类的基类，所有类在创建时默认继承object，可不声明；</p><p>方法是在类中定义的函数，也用def关键字定义，和函数的区别是，方法的第一个参数必须声明，一般为self，调用方法时不需要为self设置参数值；</p><p>创建类时会先声明初始化方法 <code>__init__</code>声明类的属性和方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 定义MyClass类</span></span>
<span class="line"><span style="color:#e1e4e8;">class MyClass(object):      # 创建类，继承object基类，可不声明（默认）</span></span>
<span class="line"><span style="color:#e1e4e8;">    def say_hello(self, name): 		# 类下创建方法，同函数用def关键字，但方法第一个参数必须声明，一般为self</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello,&quot; + name</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 调用MyClass类</span></span>
<span class="line"><span style="color:#e1e4e8;">mc = MyClass()      # 实例化类</span></span>
<span class="line"><span style="color:#e1e4e8;">print(mc.say_hello(&quot;cky&quot;))      # 访问类的方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 定义MyClass类</span></span>
<span class="line"><span style="color:#24292e;">class MyClass(object):      # 创建类，继承object基类，可不声明（默认）</span></span>
<span class="line"><span style="color:#24292e;">    def say_hello(self, name): 		# 类下创建方法，同函数用def关键字，但方法第一个参数必须声明，一般为self</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello,&quot; + name</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 调用MyClass类</span></span>
<span class="line"><span style="color:#24292e;">mc = MyClass()      # 实例化类</span></span>
<span class="line"><span style="color:#24292e;">print(mc.say_hello(&quot;cky&quot;))      # 访问类的方法</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class A:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, a, b):       # 初始化方法将输入的参数类型转为整型，保证程序容错性</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.a = int(a)</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.b = int(b)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def add(self):      # add()直接拿初始化方法的self.a, self.b，下面调用add()方法时不需再传参</span></span>
<span class="line"><span style="color:#e1e4e8;">        return self.a + self.b</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 调用类时需要传入初始化参数</span></span>
<span class="line"><span style="color:#e1e4e8;">count = A(&#39;3&#39;, 5)       # 调用A类时，会执行初始化方法，所以需传初始化参数</span></span>
<span class="line"><span style="color:#e1e4e8;">print(count.add())</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class B(A):         # 创建B类，继承A类</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># B类中实现sub1()方法，声明两个参数，后续调用时需传参</span></span>
<span class="line"><span style="color:#e1e4e8;">def sub1(self, a, b):   </span></span>
<span class="line"><span style="color:#e1e4e8;">        return a - b</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># B类中方法sub2()方法直接拿初始化方法的参数self.a, self.b，后续调用时不需要传参,用调用时传的初始化参数值</span></span>
<span class="line"><span style="color:#e1e4e8;">    def sub2(self):         </span></span>
<span class="line"><span style="color:#e1e4e8;">        return self.a - self.b</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">test = B(2, 3)		# B类继承A类，也会执行初始化方法，需要传初始化参数</span></span>
<span class="line"><span style="color:#e1e4e8;">print(test.add())</span></span>
<span class="line"><span style="color:#e1e4e8;">print(test.sub1(1, 5))      # 需要传参，用参数计算（1-5）</span></span>
<span class="line"><span style="color:#e1e4e8;">print(test.sub2())          # 不需要传参，用调用时传的初始化参数值计算（2-3）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class A:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, a, b):       # 初始化方法将输入的参数类型转为整型，保证程序容错性</span></span>
<span class="line"><span style="color:#24292e;">        self.a = int(a)</span></span>
<span class="line"><span style="color:#24292e;">        self.b = int(b)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def add(self):      # add()直接拿初始化方法的self.a, self.b，下面调用add()方法时不需再传参</span></span>
<span class="line"><span style="color:#24292e;">        return self.a + self.b</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 调用类时需要传入初始化参数</span></span>
<span class="line"><span style="color:#24292e;">count = A(&#39;3&#39;, 5)       # 调用A类时，会执行初始化方法，所以需传初始化参数</span></span>
<span class="line"><span style="color:#24292e;">print(count.add())</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class B(A):         # 创建B类，继承A类</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># B类中实现sub1()方法，声明两个参数，后续调用时需传参</span></span>
<span class="line"><span style="color:#24292e;">def sub1(self, a, b):   </span></span>
<span class="line"><span style="color:#24292e;">        return a - b</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># B类中方法sub2()方法直接拿初始化方法的参数self.a, self.b，后续调用时不需要传参,用调用时传的初始化参数值</span></span>
<span class="line"><span style="color:#24292e;">    def sub2(self):         </span></span>
<span class="line"><span style="color:#24292e;">        return self.a - self.b</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">test = B(2, 3)		# B类继承A类，也会执行初始化方法，需要传初始化参数</span></span>
<span class="line"><span style="color:#24292e;">print(test.add())</span></span>
<span class="line"><span style="color:#24292e;">print(test.sub1(1, 5))      # 需要传参，用参数计算（1-5）</span></span>
<span class="line"><span style="color:#24292e;">print(test.sub2())          # 不需要传参，用调用时传的初始化参数值计算（2-3）</span></span></code></pre></div><h1 id="_5-模组" tabindex="-1">5 模组 <a class="header-anchor" href="#_5-模组" aria-label="Permalink to &quot;5 模组&quot;">​</a></h1><p>模组，一般称为类库或模块。</p><h2 id="_5-1-调用模块" tabindex="-1">5.1 调用模块 <a class="header-anchor" href="#_5-1-调用模块" aria-label="Permalink to &quot;5.1 调用模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 导入模块下多个函数</span></span>
<span class="line"><span style="color:#e1e4e8;">from time import sleep,ctime</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 用 * 导入模块下所有函数，不推荐</span></span>
<span class="line"><span style="color:#e1e4e8;">from time import *</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 对导入函数重命名</span></span>
<span class="line"><span style="color:#e1e4e8;">from time import sleep as sys_sleep</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 导入模块下多个函数</span></span>
<span class="line"><span style="color:#24292e;">from time import sleep,ctime</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 用 * 导入模块下所有函数，不推荐</span></span>
<span class="line"><span style="color:#24292e;">from time import *</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 对导入函数重命名</span></span>
<span class="line"><span style="color:#24292e;">from time import sleep as sys_sleep</span></span></code></pre></div><h2 id="_5-2-自定义模块" tabindex="-1">5.2 自定义模块 <a class="header-anchor" href="#_5-2-自定义模块" aria-label="Permalink to &quot;5.2 自定义模块&quot;">​</a></h2><p>项目中根据功能会划分不同模块，存放在不同目录和文件中。</p><p>同目录下跨文件的函数导入例子：</p><p>project/calculator.py</p><p>project/test.py</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># calculator.py中创建add()函数</span></span>
<span class="line"><span style="color:#e1e4e8;">def add(a,b):</span></span>
<span class="line"><span style="color:#e1e4e8;">	return a + b</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># calculator.py中创建add()函数</span></span>
<span class="line"><span style="color:#24292e;">def add(a,b):</span></span>
<span class="line"><span style="color:#24292e;">	return a + b</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建test.py，导入calculator.py中的add()函数</span></span>
<span class="line"><span style="color:#e1e4e8;">from calculator import add</span></span>
<span class="line"><span style="color:#e1e4e8;">print(add(2,3))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建test.py，导入calculator.py中的add()函数</span></span>
<span class="line"><span style="color:#24292e;">from calculator import add</span></span>
<span class="line"><span style="color:#24292e;">print(add(2,3))</span></span></code></pre></div><h2 id="_5-3-跨目录调用文件" tabindex="-1">5.3 跨目录调用文件 <a class="header-anchor" href="#_5-3-跨目录调用文件" aria-label="Permalink to &quot;5.3 跨目录调用文件&quot;">​</a></h2><p>调用（import）一个文件时，会在当前文件的系统路径（path）列表下查找被调用的文件或目录，跨目录时会查找不到，只需将被调用的文件所属目录添加到系统的path中。</p><p>跨目录调用文件例子：</p><p>D:\\PythonCases\\project\\module\\calculator.py</p><p>D:\\PythonCases\\project\\test\\test.py</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 在test.py中调用calculator.py</span></span>
<span class="line"><span style="color:#e1e4e8;">import sys</span></span>
<span class="line"><span style="color:#e1e4e8;">sys.path.append(&#39;D:\\\\PythonCases\\\\project\\\\module&#39;)		# 将被调用的calculator.py绝对路径添加到系统的path中</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">from calculator import add		# 上面添加后，就可直接调用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在test.py中调用calculator.py</span></span>
<span class="line"><span style="color:#24292e;">import sys</span></span>
<span class="line"><span style="color:#24292e;">sys.path.append(&#39;D:\\\\PythonCases\\\\project\\\\module&#39;)		# 将被调用的calculator.py绝对路径添加到系统的path中</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">from calculator import add		# 上面添加后，就可直接调用</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 优化，不使用绝对路径</span></span>
<span class="line"><span style="color:#e1e4e8;">import sys</span></span>
<span class="line"><span style="color:#e1e4e8;">project_path = dirname(dirname(abspath(__file__)))	# 得到test.py绝对路径后取两次上级目录得到目录D:\\\\PythonCases\\\\project</span></span>
<span class="line"><span style="color:#e1e4e8;">sys.path.append(project_path + &#39;\\\\module&#39;)		# 再和\\\\module拼接得到calculator.py所属目录，这样获取目录，只要project项目中目录结构不变，任何环境都可执行</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">from calculator import add</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 优化，不使用绝对路径</span></span>
<span class="line"><span style="color:#24292e;">import sys</span></span>
<span class="line"><span style="color:#24292e;">project_path = dirname(dirname(abspath(__file__)))	# 得到test.py绝对路径后取两次上级目录得到目录D:\\\\PythonCases\\\\project</span></span>
<span class="line"><span style="color:#24292e;">sys.path.append(project_path + &#39;\\\\module&#39;)		# 再和\\\\module拼接得到calculator.py所属目录，这样获取目录，只要project项目中目录结构不变，任何环境都可执行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">from calculator import add</span></span></code></pre></div><h2 id="_5-4-编写自测代码" tabindex="-1">5.4 编写自测代码 <a class="header-anchor" href="#_5-4-编写自测代码" aria-label="Permalink to &quot;5.4 编写自测代码&quot;">​</a></h2><p><code>if __name-- == &#39;__main__&#39;</code> 表示当模块被直接运行时，下面的代码块会被运行；当模块被其他程序文件调用时，下面的代码块不会运行。（避免在调用模块时，测试代码也被运行）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">def add(a, b):</span></span>
<span class="line"><span style="color:#e1e4e8;">	return a + b </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">	# 自测代码</span></span>
<span class="line"><span style="color:#e1e4e8;">	c = add(3, 5)</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(c)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">def add(a, b):</span></span>
<span class="line"><span style="color:#24292e;">	return a + b </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span style="color:#24292e;">	# 自测代码</span></span>
<span class="line"><span style="color:#24292e;">	c = add(3, 5)</span></span>
<span class="line"><span style="color:#24292e;">	print(c)</span></span></code></pre></div><h1 id="_6-异常" tabindex="-1">6. 异常 <a class="header-anchor" href="#_6-异常" aria-label="Permalink to &quot;6. 异常&quot;">​</a></h1><h2 id="_6-1-一般用法" tabindex="-1">6.1 一般用法 <a class="header-anchor" href="#_6-1-一般用法" aria-label="Permalink to &quot;6.1 一般用法&quot;">​</a></h2><p><strong>try except</strong></p><p>Python用异常对象（Exception Object）表示异常情况，遇到错误时异常对象如果未被处理或捕捉，程序会用回溯（Traceback，一种错误信息）来终止程序。</p><p>大多数错误会导致异常，但异常不一定代表错误，可能是警告，可能是终止信息如退出循环。</p><p>Python提供try except语句来捕捉并处理异常。</p><p>eg：处理找不到文件异常</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">try:</span></span>
<span class="line"><span style="color:#e1e4e8;">	open(&#39;abc.txt&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">except FileNotFoundError:</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(&quot;找不到文件&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">try:</span></span>
<span class="line"><span style="color:#24292e;">	open(&#39;abc.txt&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#24292e;">except FileNotFoundError:</span></span>
<span class="line"><span style="color:#24292e;">	print(&quot;找不到文件&quot;)</span></span></code></pre></div><p>Python中所有异常类都继承Exception，2.5版本后，异常类新的基类是BaseException，Exception也继承自BaseException，可以用BaseException来接收所有类型的异常。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">try:</span></span>
<span class="line"><span style="color:#e1e4e8;">	open(&#39;abc.txt&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">except BaseException as msg:	# 定义msg变量来接收异常信息并通过print()打印出来，方便查看异常原因</span></span>
<span class="line"><span style="color:#e1e4e8;">	print(msg)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">try:</span></span>
<span class="line"><span style="color:#24292e;">	open(&#39;abc.txt&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#24292e;">except BaseException as msg:	# 定义msg变量来接收异常信息并通过print()打印出来，方便查看异常原因</span></span>
<span class="line"><span style="color:#24292e;">	print(msg)</span></span></code></pre></div><h2 id="_6-2-更多用法" tabindex="-1">6.2 更多用法 <a class="header-anchor" href="#_6-2-更多用法" aria-label="Permalink to &quot;6.2 更多用法&quot;">​</a></h2><p><strong>try except else</strong>：</p><p>若没有异常，执行else后面的内容</p><p><strong>try except finally：</strong></p><p>不管是否出现异常，均执行finally后面的内容（如文件关闭、锁的释放等）</p><h2 id="_6-3-抛出异常" tabindex="-1">6.3 抛出异常 <a class="header-anchor" href="#_6-3-抛出异常" aria-label="Permalink to &quot;6.3 抛出异常&quot;">​</a></h2><p>Python中用raise关键字来抛出异常信息。</p><p>raise只能使用Python提供的异常类，如想用raise使用自定义异常类，则自定义异常类需要继承Exception.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">def say_hello(name=None):	</span></span>
<span class="line"><span style="color:#e1e4e8;">	if name is None:</span></span>
<span class="line"><span style="color:#e1e4e8;">		raise NameError(&#39;&quot;name&quot; cannot be empty&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">	else:</span></span>
<span class="line"><span style="color:#e1e4e8;">		print(&#39;hello,%s&#39;%name)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 调用say_hello()函数，不传参，则运行后会抛出异常</span></span>
<span class="line"><span style="color:#e1e4e8;">say_hello()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">def say_hello(name=None):	</span></span>
<span class="line"><span style="color:#24292e;">	if name is None:</span></span>
<span class="line"><span style="color:#24292e;">		raise NameError(&#39;&quot;name&quot; cannot be empty&#39;)</span></span>
<span class="line"><span style="color:#24292e;">	else:</span></span>
<span class="line"><span style="color:#24292e;">		print(&#39;hello,%s&#39;%name)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 调用say_hello()函数，不传参，则运行后会抛出异常</span></span>
<span class="line"><span style="color:#24292e;">say_hello()</span></span></code></pre></div><h1 id="_7-新手常犯错误" tabindex="-1">7. 新手常犯错误 <a class="header-anchor" href="#_7-新手常犯错误" aria-label="Permalink to &quot;7. 新手常犯错误&quot;">​</a></h1><ul><li>以：结尾的语句，要用四个空格或tab键缩进，但一个语句体中两者不要混用</li><li>大部分方法两边的下划线是双下划线，如<code>__init__</code></li><li>项目不要都创建在Python的安装目录中，只要正确把Python目录配置到环境变量Path中，则任何目录下的Python程序都可以执行</li><li>Python程序文件路径中，应尽量避免空格或中文，可能导致有些编辑器无法运行程序</li><li>创建的目录和文件名不要与引用类库同名</li></ul>`,101),o=[l];function t(c,i,r,d,y,u){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{b as __pageData,g as default};
