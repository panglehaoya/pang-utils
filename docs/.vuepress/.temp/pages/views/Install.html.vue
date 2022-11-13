<template>
  <h1 id="安装使用" tabindex="-1">
    <a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用
  </h1>
  <p>本节将介绍如何在项目中使用 pang-utils</p>
  <h2 id="安装" tabindex="-1">
    <a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装
  </h2>
  <p>使用npm 或 yarn 安装</p>
  <div class="language-text ext-text">
    <pre v-pre class="language-text"><code>npm install pang-utils

yarn add pang-utils
</code></pre>
  </div>
  <h2 id="引入-pang-utils" tabindex="-1">
    <a class="header-anchor" href="#引入-pang-utils" aria-hidden="true">#</a>
    引入 pang-utils
  </h2>
  <div class="language-vue ext-vue">
    <pre
      v-pre
      class="language-vue"
    ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> uuid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pang-utils'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
  </div>
</template>
