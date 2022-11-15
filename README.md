# pang-utils

集成了项目中经常使用的工具函数

## 安装

```text
npm i pang-utils 

yarn add pang-utils
```

# 函数列表

## 事件

```ts
import { Event } from 'pang-utils'

const event = new Event()

// 监听触发事件
event.on('message', (data) => handleData(data))
event.emit('message', {})

// 取消事件监听
event.off('message')

// 对事件只监听一次
event.once('message')

// 清除所有事件监听
event.clear()
```

### websocket

```ts
import { EnclosureWebSocket } from 'pang-utils'

// 其中重连次数和心跳信息可以不传
// 默认为5和ping
const ws = new EnclosureWebSocket('url', '5', 'heartbeatText')

// 链接websocket
ws.init()

// 发送消息 支持promise
ws.sendMsg('message').then(res => {})

// 主动断开链接
ws.closeWS()
```

## 水印

```ts
import { WaterMark } from "pang-utils";

// selector默认为body
const waterMark = new WaterMark('selector')

// 生成水印
const config = { text: 'pang-utils' }
waterMark.setWaterMark(config)

// config配置
interface ISetWaterMarkConfig {
  text: string;
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  rotate?: number;
  /**
   * 水印X轴间距
   */
  offsetX?: number;
  /**
   * 水印的Y轴间距类型
   */
  offsetY?: number;
  /**
   * 是否允许删除水印 默认为false
   */
  allowDelete?: boolean;
}

// 删除水印
waterMark.clear()
```

## 生成随机id

```ts
import { uuid } from 'pang-utils'

// 默认是10位 16进制
uuid(16, 10)
```

## base64转换

* urlToBase64 -- url地址转换为base64
* dataURLtoBlob -- base64转换为blob

## 下载

* downloadByBase64
* downloadByData
* downloadByOnlineUrl
* downloadByUrl

## 校验

* isObject
* isEmpty

## 时间操作 基于 [dayjs](https://github.com/iamkun/dayjs)

```ts
import { formatDate, handleDate, getTimeDuration} from 'pang-utils'

// 格式化时间 支持Date和时间戳
formatDate(new Date(2022, 1, 2), 'YYYY-MM-DD')
formatDate(Date.now(), 'YYYY-MM-DD HH:mm:ss')

// 时间 增加 减少
handleDate('add', 1, 'day', new Date(), 'YYYY-MM-DD')
handleDate('subtract', 1, 'month', new Date(), 'YYYY-MM-DD')

// getTimeDuration 获取两个时间的差值
const date1 = new Date(2022, 2, 2, 11, 10);
const date2 = new Date(2022, 3, 15, 13, 1);
getTimeDuration(date1, date2) // 44天1小时51分
```

## 列表和树形状的转换

```ts
import { treeToList, listToTree } from 'pang-utils'

// 默认配置 可以根据数据自行修改
interface TreeHelperConfig {
  id: string;
  children: string;
  pid: string;
}
```
