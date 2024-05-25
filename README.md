标签使用文档

## 目录
- [抽取](#抽取)
- [文档内容](#文档内容)
- [AI标题](#AI标题)
- [AI文章](#AI文章)
- [HTML转码](#HTML转码)
- [随机数](#随机数)
- [随机字母](#随机字母)
- [选择](#选择)
- [替换](#替换)
- [文件路径](#文件路径)
- [文件名](#文件名)
- [JSON](#json)

---

## 抽取

按顺序从文档抽取数据，返回从文档中按顺序抽取的数据，数量由 `count` 参数决定，数据间用 `join_sign` 拼接。

### 参数
- `path` (必填): 文档路径
- `count` (默认1): 抽取数
- `join_sign` (默认换行符): 拼接字符
- `start` (默认1): 开始行数
- `random` (默认0): 是否随机抽取

### 返回值
返回从文档中抽取的数据，数量由 `count` 参数决定，数据间用 `join_sign` 拼接。

### 示例
```python
抽取('doc_path.txt', count=2, join_sign=',', start=3)
```

---

## 文档内容

获取文档中所有数据，或文件夹中随机文档中所有数据。

### 参数
- `path` (必填): “文档路径”或“文件夹路径”
- `random` (默认0): 是否随机选择文件

### 返回值
返回文档中的所有数据，或文件夹中随机文档中的所有数据。

### 示例
```python
文档内容('doc_path.txt')
```

---

## AI标题

以“关键词”生成一个标题。

### 参数
- `keyword` (必填): 核心关键词

### 返回值
返回一个符合谷歌Seo标准的网站标题。

### 示例
```python
AI标题('关键词')
```

---

## AI文章

以“标题”生成一篇文章。

### 参数
- `title` (必填): 文章标题

### 返回值
返回一篇不少于500字的文章。

### 示例
```python
AI文章('标题')
```

---

## HTML转码

html实体转码。

### 参数
- `content` (必填): 需转码的内容

### 返回值
返回转码后的内容。

### 示例
```python
HTML转码('转码内容')
```

---

## 随机数

生成一个范围在3到6（包括3和6）之间的随机整数。

### 参数
- `start_end_num` (必填): 范围

### 返回值
返回一个随机整数。

### 示例
```python
随机数('3-6')
```

---

## 随机字母

生成随机字母。

### 参数
- `length` (必填): 生成字母的长度范围
- `lower` (默认1): 是否包含小写字母
- `upper` (默认0): 是否包含大写字母
- `num` (默认0): 是否包含数字

### 返回值
返回随机生成的字母。

### 示例
```python
随机字母('3-6', lower=1, upper=1, num=1)
```

---

## 选择

在给定的字符串中，选择单个字符返回。存在‘|’时，将按“|”来分割字符串，返回字符。

### 参数
- `string` (必填): 给定的字符串
- `single` (默认0): 是否无视‘|’分割符，强制只返回单个字符。

### 返回值
返回选择的字符串。

### 示例
```python
选择('Apple|Banana|Coconut')
选择('?@!.*')
```

---

## 替换

替换字符串。

### 参数
- `a` (必填): 需要被替换的内容
- `b` (必填): 替换后的内容
- `text` (必填): 原文本

### 返回值
返回替换后的字符串。

### 示例
```python
替换('a', 'b', 'abcabc')
```

---

## 文件路径

获取文件路径。

### 参数
- `dir_path` (必填): 文件夹路径
- `random` (默认0): 是否随机选择文件

### 返回值
返回文件路径。

### 示例
```python
文件路径('dir_path', random=1)
```

---

## 文件名

获取文件名。

### 参数
- `dir_path` (必填): 文件夹路径
- `random` (默认0): 是否随机选择文件

### 返回值
返回文件名。

### 示例
```python
文件名('dir_path', random=1)
```

---

## JSON

从JSON文件中获取数据。

### 参数
- `json_path` (必填): JSON文件路径
- `key` (必填): 数据键

### 返回值
返回键对应的数据。

### 示例
```python
JSON('json_path', 'key')
```
