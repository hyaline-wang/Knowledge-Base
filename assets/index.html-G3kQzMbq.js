import{_ as s,c as i,a,o as t}from"./app-C150NBw6.js";const n={};function l(d,e){return t(),i("div",null,e[0]||(e[0]=[a(`<h2 id="性能占用" tabindex="-1"><a class="header-anchor" href="#性能占用"><span>性能占用</span></a></h2><p>注意这样会增加CPU占用，在 i7-1145g 和 i5-1135g ，i5-1240p 中测试影响不大，但是在Xavier NX 中还是有一些影响(每一家的板子感觉性能时有一些区别的)</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>一般来说使用远程软件时需要插着显示器或者一个显卡欺骗器，但是nomachine可以做到什么都不插。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gdm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/NX/nxserver</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的方法需要每次开机输入，<strong>你也可以直接用下面这行 一劳永逸解决问题</strong></p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> set-default</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 然后</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样会有一些隐患，当你正常使用HDMI时，会发现没有图形界面了。 不过不用担心，若之后不用nomachine 了你可以使用</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> set-default</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> graphical.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后重启即可恢复要是之后还用，可以使用</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> isolate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> graphical.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>临时解决问题。</p><h2 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题"><span>权限问题</span></a></h2><p>打开使用nomachine远程时打开 设置 会一直提示你输密码，似乎wifi的周期性检测需要。还没有找到解决办法。但是可以通过sudo权限命令行打开设置来解决</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gnome-control-center</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15)]))}const h=s(n,[["render",l],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/linux_base/common_pkg_install/4u4llyja/","title":"nomachine","lang":"zh-CN","frontmatter":{"title":"nomachine","createTime":"2024/09/09 13:22:12","permalink":"/linux_base/common_pkg_install/4u4llyja/","description":"性能占用 注意这样会增加CPU占用，在 i7-1145g 和 i5-1135g ，i5-1240p 中测试影响不大，但是在Xavier NX 中还是有一些影响(每一家的板子感觉性能时有一些区别的) 安装 一般来说使用远程软件时需要插着显示器或者一个显卡欺骗器，但是nomachine可以做到什么都不插。 上面的方法需要每次开机输入，你也可以直接用下面这行...","head":[["meta",{"property":"og:url","content":"https://hyaline-wang.github.io/Knowledge-Base/Knowledge-Base/linux_base/common_pkg_install/4u4llyja/"}],["meta",{"property":"og:site_name","content":"Reflections of Hyaline"}],["meta",{"property":"og:title","content":"nomachine"}],["meta",{"property":"og:description","content":"性能占用 注意这样会增加CPU占用，在 i7-1145g 和 i5-1135g ，i5-1240p 中测试影响不大，但是在Xavier NX 中还是有一些影响(每一家的板子感觉性能时有一些区别的) 安装 一般来说使用远程软件时需要插着显示器或者一个显卡欺骗器，但是nomachine可以做到什么都不插。 上面的方法需要每次开机输入，你也可以直接用下面这行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-20T14:14:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-20T14:14:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nomachine\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-20T14:14:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"性能占用","slug":"性能占用","link":"#性能占用","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"权限问题","slug":"权限问题","link":"#权限问题","children":[]}],"readingTime":{"minutes":1.01,"words":304},"git":{"createdTime":1725899925000,"updatedTime":1729433657000,"contributors":[{"name":"hyaline-wang","email":"hyaline-wang","commits":1}]},"autoDesc":true,"filePathRelative":"notes/linux_base/常用软件安装/nomachine.md"}');export{h as comp,p as data};
