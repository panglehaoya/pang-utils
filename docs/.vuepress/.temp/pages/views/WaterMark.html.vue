<template>
  <h1 id="水印" tabindex="-1">
    <a class="header-anchor" href="#水印" aria-hidden="true">#</a> 水印
  </h1>
  <div class="language-vue ext-vue">
    <pre v-pre class="language-vue"><code>import { WaterMark } from 'pang-utils'

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果不传 selector 默认是body元素</span>
    <span class="token keyword">const</span> waterMark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WaterMark</span><span class="token punctuation">(</span><span class="token string">'selector'</span><span class="token punctuation">)</span>
    waterMark<span class="token punctuation">.</span><span class="token function">setWaterMark</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'pang-utils'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
  </div>
</template>
