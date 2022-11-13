# 安装使用
本节将介绍如何在项目中使用 pang-utils

## 安装
使用npm 或 yarn 安装

```
npm install pang-utils

yarn add pang-utils
```

## 引入 pang-utils

```vue
<script lang="ts">
import { uuid } from 'pang-utils'

export default {
  mounted() {
    console.log(uuid(10, 16))
  }
}
</script>
```

