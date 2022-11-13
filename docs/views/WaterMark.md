# 水印
```vue
import { WaterMark } from 'pang-utils'

<script lang="scss">
export default {
  mounted() {
    // 如果不传 selector 默认是body元素
    const waterMark = new WaterMark('selector')
    waterMark.setWaterMark({text: 'pang-utils'})
  }
}
</script>
```
