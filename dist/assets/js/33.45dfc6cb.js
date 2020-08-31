(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{411:function(t,a,r){"use strict";r.r(a);var e=r(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"进程和线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),r("p",[t._v("一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。")]),t._v(" "),r("ul",[r("li",[t._v("进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）")]),t._v(" "),r("li",[t._v("线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）")])]),t._v(" "),r("ol",[r("li",[t._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),t._v(" "),r("li",[t._v("同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）")]),t._v(" "),r("li",[t._v("当一个进程关闭之后，操作系统会回收进程所占用的内存。")]),t._v(" "),r("li",[t._v("进程之间的内容相互隔离、相互独立。")])]),t._v(" "),r("h2",{attrs:{id:"单进程浏览器的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器的问题"}},[t._v("#")]),t._v(" 单进程浏览器的问题")]),t._v(" "),r("p",[t._v("单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里。如此多的功能模块运行在一个进程里，是导致单进程浏览器不稳定、不流畅和不安全的一个主要因素。")]),t._v(" "),r("ol",[r("li",[t._v("不稳定。插件、渲染引擎不稳定奔溃导致整个浏览器崩溃。")]),t._v(" "),r("li",[t._v("不流畅。同一时刻只能有一个模块可以执行。")]),t._v(" "),r("li",[t._v("不安全。恶意插件、恶意脚本引起安全问题。")])]),t._v(" "),r("h2",{attrs:{id:"多进程浏览器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器"}},[t._v("#")]),t._v(" 多进程浏览器")]),t._v(" "),r("p",[t._v("Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程(进程间通过IPC通信)。")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("浏览器进程")])]),t._v(" "),r("ol",[r("li",[t._v("负责浏览器界面显示，与用户交互。如前进，后退等")]),t._v(" "),r("li",[t._v("负责各个页面的管理，创建和销毁其他进程")]),t._v(" "),r("li",[t._v("将渲染进程得到的内存中的位图(Bitmap)，绘制到用户界面上")]),t._v(" "),r("li",[t._v("网络资源的管理，下载等")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("渲染进程")])]),t._v(" "),r("ol",[r("li",[t._v("内部多线程。")]),t._v(" "),r("li",[t._v("默认每个Tab页面一个进程，互不影响")]),t._v(" "),r("li",[t._v("页面渲染，脚本执行，事件处理")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("GPU进程")]),t._v(" 用于3D绘制等，最多一个")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("网络进程")]),t._v(" 主要负责页面的网络资源加载(之前是作为一个模块运行在浏览器进程里面的)")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("插件进程")]),t._v(" 每种类型的插件对应一个进程，仅当使用该插件时才创建(插件易崩溃，所以需要通过插件进程来隔离)")])])]),t._v(" "),r("p",[r("strong",[t._v("优点")]),t._v(" 避免单个page crash影响整个浏览器；避免第三方插件crash影响整个浏览器；多进程充分利用多核优势；方便使用沙盒模型隔离插件等进程，提高浏览器稳定性")]),t._v(" "),r("p",[r("strong",[t._v("缺点")]),t._v(" 更高的资源占用；更复杂的体系架构")]),t._v(" "),r("h2",{attrs:{id:"渲染进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程"}},[t._v("#")]),t._v(" 渲染进程")]),t._v(" "),r("h3",{attrs:{id:"多站点下的渲染进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多站点下的渲染进程"}},[t._v("#")]),t._v(" 多站点下的渲染进程")]),t._v(" "),r("p",[t._v("默认情况下，如果打开一个标签页，那么浏览器会默认为其创建一个渲染进程。但是，当新标签页和当前标签页属于同一站点(相同协议、相同根域名)的话，那么新标签页会复用当前标签页的渲染进程。")]),t._v(" "),r("p",[t._v("标签之间的链接：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("通过标签来和新标签建立连接")]),t._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("www.baidu.com"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("百度"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[t._v("window.open")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[t._v("window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://time.geekbang.org"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),r("p",[t._v("通常情况下，我们把一个标签页所包含的内容，诸如 window 对象，历史记录，滚动条位置等信息称为浏览上下文。这些通过脚本相互连接起来的浏览上下文就是浏览上下文组。")]),t._v(" "),r("p",[t._v("Chrome 浏览器会将浏览上下文组中属于同一站点的标签分配到同一个渲染进程中。如果在链接中加入了 rel=noopener 属性，那么通过链接打开的新标签页和源标签页之间就不会建立连接关系了。")]),t._v(" "),r("h3",{attrs:{id:"多线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[t._v("#")]),t._v(" 多线程")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("GUI渲染线程")])]),t._v(" "),r("ul",[r("li",[t._v("负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。")]),t._v(" "),r("li",[t._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行。")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("JS引擎线程")])]),t._v(" "),r("ul",[r("li",[t._v("也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）。")]),t._v(" "),r("li",[t._v("JS引擎线程负责解析Javascript脚本，运行代码。")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("事件触发线程")])]),t._v(" "),r("ul",[r("li",[t._v("归属于浏览器而不是JS引擎，用来控制事件循环。")]),t._v(" "),r("li",[t._v("由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("定时触发器线程")])]),t._v(" "),r("ul",[r("li",[t._v("setTimeout 和 setInterval 所在线程。")]),t._v(" "),r("li",[t._v("通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）")]),t._v(" "),r("li",[t._v("规定要求setTimeout中低于4ms的时间间隔算为4ms。")])])])]),t._v(" "),r("h4",{attrs:{id:"gui渲染线程与js引擎线程互斥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gui渲染线程与js引擎线程互斥"}},[t._v("#")]),t._v(" GUI渲染线程与JS引擎线程互斥")]),t._v(" "),r("p",[t._v("由于JavaScript是可操纵DOM的，如果JS线程和UI线程同时运行，那么渲染线程前后获得的元素数据就可能不一致了。\n因此为了防止渲染出现不可预期的结果，浏览器设置GUI渲染线程与JS引擎为互斥的关系，当JS引擎执行时GUI线程会被挂起， GUI更新则会被保存在一个队列中等到JS引擎线程空闲时立即被执行。")]),t._v(" "),r("h4",{attrs:{id:"js阻塞页面加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js阻塞页面加载"}},[t._v("#")]),t._v(" JS阻塞页面加载")]),t._v(" "),r("p",[t._v("从上述的互斥关系，可以推导出，JS如果执行时间过长就会阻塞页面。要尽量避免JS执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")]),t._v(" "),r("h2",{attrs:{id:"web-worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[t._v("#")]),t._v(" web worker")]),t._v(" "),r("p",[t._v("Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法")]),t._v(" "),r("ul",[r("li",[t._v("创建Worker时，JS引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作DOM）")]),t._v(" "),r("li",[t._v("JS引擎线程与worker线程间通过特定的方式通信（postMessage API，需要通过序列化对象来与线程交互特定的数据）")])]),t._v(" "),r("h3",{attrs:{id:"webworker与sharedworker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webworker与sharedworker"}},[t._v("#")]),t._v(" WebWorker与SharedWorker")]),t._v(" "),r("ul",[r("li",[t._v("WebWorker只属于某个页面，不会和其他页面的Render进程（浏览器内核进程）共享。所以Chrome在Render进程中（每一个Tab页就是一个render进程）创建一个新的线程来运行Worker中的JavaScript程序。")]),t._v(" "),r("li",[t._v("SharedWorker是浏览器所有页面共享的，不能采用与Worker同样的方式实现，因为它不隶属于某个Render进程，可以为多个Render进程共享使用。所以Chrome浏览器为SharedWorker单独创建一个进程来运行JavaScript程序")])]),t._v(" "),r("p",[t._v("本质上就是进程和线程的区别。SharedWorker由独立的进程管理，WebWorker只是属于render进程下的一个线程")]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/article/113513",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome架构：仅仅打开了1个页面，为什么有4个进程？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/article/165897",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览上下文组：如何计算Chrome中渲染进程的个数？"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);