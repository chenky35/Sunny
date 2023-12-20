# 1. 输出

## 1.1 打印

### print()方法

### 格式化输出

- 连接符 +
- 格式符 %s、%d、%r
- 格式化函数 format()

```
name = 'cky'
age = 26

# 通过连接符 + 进行拼接 （age是整型，需要转换成字符串）
print("name is :" + name + ",age is :" + str(age))

# 通过格式符 %s、%d 进行替换，%s指定字符串，%d(data)指定数字，不确定数据类型则用 %r 
print("name is : %s, age is :%d" % (name, age))

# 通过格式化函数 format()进行格式化，未指定位置则按默认顺序，也可通过{0} {1}指定位置，或用变量指定对应关系（最推荐的方法)
print("name is :{}, age is :{}".format(name, age))      # 默认顺序
print("name is :{1}, age is :{0}".format(age, name))       # 位置指定
print("name is :{n}, age is :{a}".format(n=name, a=age))       # 变量指定对应关系
```

## 1.2 引号和注释

### 引号

Python中不区分单引号、双引号；

可以互相嵌套使用，但不能交叉使用。

### 注释

单行注释：#，位于代码前一行或代码末尾

多行注释：三引号，不区分单、双引号

# 2. 分支和循环

## 2.1 if语句

不使用{}语句体，通过语句缩进判断语句体，缩进默认4个空格；

判断相等 ==

判断不等 !=

判断是否包含  in 、not in 

进行布尔类型判断 if True

## 2.2 for语句

```
# 循环遍历字符串
for s in "hello":
	print(s)			# 按顺序输出字符串每个字符
```

```
# 循环遍历列表
lists = ['aaa','bbb','ccc']
for li in lists:
	print(li)			# 按顺序输出列表中每个元素
```

```
# 按一定次数循环
for i in range(5):
	print(i)			# 输出0-4，range()函数默认从0开始循环
	
# range()函数设置起始位置和步长：range(start,end[,step])
# 如以下输出10以内的奇数
for i in range(1,10,2):
	print(i)
```

# 3. 列表、元组和字典

## 3.1 列表

list：列表，即数组，用 [] 表示

list[0]：列表第一个元素

list[-1]：列表最后一个元素

list[i]：列表第 i+1 个元素

list.append()：列表末尾添加元素

list.pop()：列表删除指定位置的元素

```
# 列表
lists = [1, 2, 3, 'a', 5]      # 定义列表
print(lists)
print(lists[0])
print(lists[-1])    # 输出列表最后一个元素
lists[4] = 'b'      # 修改列表第5个元素
print(lists)
lists.append('c')   # 列表末尾追加元素
print(lists)
lists.pop(0)        # 删除列表第一个元素
print(lists)
```

## 3.2 元组

tuple：元组，用 () 表示，也可不用

单个元素用 () 时需在后面加逗号

元组之间可以使用 +、+=和 * 号进行运算，得到新的元组

**元组和列表的区别：**

列表是可变的，可追加/修改/删除其中元素；元组不可变；

不确定元素个数时用列表，提前知道元素数量时用元组。

```
# 元组
tuple1 = (1, 2, 3)      # 定义元组
tuple2 = 'a', 'b', 'c'  # 可不用()
print(tuple1[0])        # 查看元组
print(tuple2[0:1])
tuple3 = tuple1 + tuple2    # 连接元组
print(tuple3)
tuple4 = ('hello',)     # 单个元素用()时需加逗号，否则括号会被当作运算符使用
print(tuple4 * 3)       # 复制元组
```

## 3.3 字典

字典：用 {} 表示，每个元素由key和value组成，中间用冒号，不同元素之间用逗号

keys()：返回字典key的列表

values()：返回字典value的列表

items()：将所有字典元素以列表的形式返回，列表中每一项都包含key和value

pop()：通过指定key删除字典中的元素

```
# 字典
dicts = {"username": "cky", "password": "123"}
print(dicts.keys())     # keys()方法返回字典key的列表
print(dicts.values())   # values()返回字典value的列表
print(dicts.items())    # items()将所有字典元素以列表的形式返回，列表中每一项都包含key和value
for k, v in dicts.items():   # 循环打印字典key和value
    print("dicts keys is %r" %k)
    print("dicts values is %r" %v)

dicts["age"] = 25    # 向字典中添加键值对
dicts.pop("password")   # 删除键是password的项
print(dicts.items())
```

# 4 函数、类和方法

## 4.1 函数

def关键字定义函数

```
# 定义add()函数
def add1(a, b):      # 创建add()函数，接收a,b两个参数
    print(a+b)

# 调用add()函数
add1(1, 2)       # 调用函数，传两个参数


def add2(a, b):
    return a + b    # 函数通常不直接打印结果，而是将结果通过return关键字返回

c = add2(3, 4)      # 使用变量c接收add()函数的返回值
print(c)


def add(a=1, b=3):  # add()函数设置默认参数
    return a + b

c1 = add()          # 调用时不传参，则使用默认参数进行计算
c2 = add(2, 4)      # 调用时传参，则计算传入参数的值
print(c1)
print(c2)
```

## 4.2  类和方法

class关键字创建类；

Python3中，object为所有类的基类，所有类在创建时默认继承object，可不声明；

方法是在类中定义的函数，也用def关键字定义，和函数的区别是，方法的第一个参数必须声明，一般为self，调用方法时不需要为self设置参数值；

创建类时会先声明初始化方法 `__init__`声明类的属性和方法

```
# 定义MyClass类
class MyClass(object):      # 创建类，继承object基类，可不声明（默认）
    def say_hello(self, name): 		# 类下创建方法，同函数用def关键字，但方法第一个参数必须声明，一般为self
        return "hello," + name

# 调用MyClass类
mc = MyClass()      # 实例化类
print(mc.say_hello("cky"))      # 访问类的方法
```

```
class A:
    def __init__(self, a, b):       # 初始化方法将输入的参数类型转为整型，保证程序容错性
        self.a = int(a)
        self.b = int(b)

    def add(self):      # add()直接拿初始化方法的self.a, self.b，下面调用add()方法时不需再传参
        return self.a + self.b


# 调用类时需要传入初始化参数
count = A('3', 5)       # 调用A类时，会执行初始化方法，所以需传初始化参数
print(count.add())


class B(A):         # 创建B类，继承A类

# B类中实现sub1()方法，声明两个参数，后续调用时需传参
def sub1(self, a, b):   
        return a - b

# B类中方法sub2()方法直接拿初始化方法的参数self.a, self.b，后续调用时不需要传参,用调用时传的初始化参数值
    def sub2(self):         
        return self.a - self.b


test = B(2, 3)		# B类继承A类，也会执行初始化方法，需要传初始化参数
print(test.add())
print(test.sub1(1, 5))      # 需要传参，用参数计算（1-5）
print(test.sub2())          # 不需要传参，用调用时传的初始化参数值计算（2-3）
```

# 5 模组

模组，一般称为类库或模块。

## 5.1 调用模块

```
# 导入模块下多个函数
from time import sleep,ctime

# 用 * 导入模块下所有函数，不推荐
from time import *

# 对导入函数重命名
from time import sleep as sys_sleep
```

## 5.2 自定义模块

项目中根据功能会划分不同模块，存放在不同目录和文件中。

同目录下跨文件的函数导入例子：

project/calculator.py

project/test.py

```
# calculator.py中创建add()函数
def add(a,b):
	return a + b
```

```
# 创建test.py，导入calculator.py中的add()函数
from calculator import add
print(add(2,3))
```

## 5.3 跨目录调用文件

调用（import）一个文件时，会在当前文件的系统路径（path）列表下查找被调用的文件或目录，跨目录时会查找不到，只需将被调用的文件所属目录添加到系统的path中。

跨目录调用文件例子：

D:\\PythonCases\\project\\module\\calculator.py

D:\\PythonCases\\project\\test\\test.py

```
# 在test.py中调用calculator.py
import sys
sys.path.append('D:\\PythonCases\\project\\module')		# 将被调用的calculator.py绝对路径添加到系统的path中

from calculator import add		# 上面添加后，就可直接调用
```

```
# 优化，不使用绝对路径
import sys
project_path = dirname(dirname(abspath(__file__)))	# 得到test.py绝对路径后取两次上级目录得到目录D:\\PythonCases\\project
sys.path.append(project_path + '\\module')		# 再和\\module拼接得到calculator.py所属目录，这样获取目录，只要project项目中目录结构不变，任何环境都可执行

from calculator import add
```

## 5.4 编写自测代码

`if __name-- == '__main__'` 表示当模块被直接运行时，下面的代码块会被运行；当模块被其他程序文件调用时，下面的代码块不会运行。（避免在调用模块时，测试代码也被运行）

```
def add(a, b):
	return a + b 

if __name__ == '__main__':
	# 自测代码
	c = add(3, 5)
	print(c)
```

# 6. 异常

## 6.1 一般用法

**try except**

Python用异常对象（Exception Object）表示异常情况，遇到错误时异常对象如果未被处理或捕捉，程序会用回溯（Traceback，一种错误信息）来终止程序。

大多数错误会导致异常，但异常不一定代表错误，可能是警告，可能是终止信息如退出循环。

Python提供try except语句来捕捉并处理异常。

eg：处理找不到文件异常

```
try:
	open('abc.txt','r')
except FileNotFoundError:
	print("找不到文件")
```

Python中所有异常类都继承Exception，2.5版本后，异常类新的基类是BaseException，Exception也继承自BaseException，可以用BaseException来接收所有类型的异常。

```
try:
	open('abc.txt','r')
except BaseException as msg:	# 定义msg变量来接收异常信息并通过print()打印出来，方便查看异常原因
	print(msg)
```

## 6.2 更多用法

**try except else**：

若没有异常，执行else后面的内容

**try except finally：**

不管是否出现异常，均执行finally后面的内容（如文件关闭、锁的释放等）

## 6.3 抛出异常

Python中用raise关键字来抛出异常信息。

raise只能使用Python提供的异常类，如想用raise使用自定义异常类，则自定义异常类需要继承Exception.

```
def say_hello(name=None):	
	if name is None:
		raise NameError('"name" cannot be empty')
	else:
		print('hello,%s'%name)

# 调用say_hello()函数，不传参，则运行后会抛出异常
say_hello()
```

#  7. 新手常犯错误

- 以：结尾的语句，要用四个空格或tab键缩进，但一个语句体中两者不要混用
- 大部分方法两边的下划线是双下划线，如`__init__` 
- 项目不要都创建在Python的安装目录中，只要正确把Python目录配置到环境变量Path中，则任何目录下的Python程序都可以执行
- Python程序文件路径中，应尽量避免空格或中文，可能导致有些编辑器无法运行程序
- 创建的目录和文件名不要与引用类库同名
