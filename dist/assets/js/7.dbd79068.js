(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(t,a,r){t.exports=r.p+"assets/img/httpRequest.1b49976a.png"},375:function(t,a,r){t.exports=r.p+"assets/img/tcp.943ac29f.png"},376:function(t,a,r){t.exports=r.p+"assets/img/tcp&http.1277f342.png"},417:function(t,a,r){"use strict";r.r(a);var e=r(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http请求流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http请求流程"}},[t._v("#")]),t._v(" HTTP请求流程")]),t._v(" "),e("p",[t._v("浏览器中的 HTTP 请求从发起到结束一共经历了如下八个阶段：构建请求、查找缓存、准备 IP 和端口、等待 TCP 队列、建立 TCP 连接、发起 HTTP 请求、服务器处理请求、服务器返回请求和断开连接。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(374),alt:"HTTP请求流程示意图",title:"HTTP请求流程示意图"}})]),t._v(" "),e("h2",{attrs:{id:"浏览器端发起-http-请求流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端发起-http-请求流程"}},[t._v("#")]),t._v(" 浏览器端发起 HTTP 请求流程")]),t._v(" "),e("h3",{attrs:{id:"构建请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建请求"}},[t._v("#")]),t._v(" 构建请求")]),t._v(" "),e("p",[t._v("构建请求行信息")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("GET /index.html HTTP1.1\n")])])]),e("h3",{attrs:{id:"查找缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找缓存"}},[t._v("#")]),t._v(" 查找缓存")]),t._v(" "),e("p",[t._v("真正发起网络请求之前，浏览器会先在浏览器缓存中查询是否有要请求的文件(强缓存)。发现请求的资源已经在浏览器缓存中存有副本，并且没有过期，拦截请求，返回该资源的副本，并直接结束请求，而不会再去源服务器重新下载。")]),t._v(" "),e("p",[e("strong",[t._v("强缓存")]),t._v("  当浏览器去请求某个文件的时候，服务端就在respone header里面对该文件做了缓存配置。缓存的时间、缓存类型都由服务端控制，具体表现为：srespone header 的cache-control，常见的设置是max-age public private no-cache no-store等")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("cache-control: max-age=xxxx，public"),e("br"),t._v("\n客户端和代理服务器都可以缓存该资源；"),e("br"),t._v("\n客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，如果用户做了刷新操作，就向服务器发起http请求")])]),t._v(" "),e("li",[e("p",[t._v("cache-control: max-age=xxxx，private"),e("br"),t._v("\n只让客户端可以缓存该资源；代理服务器不缓存"),e("br"),t._v("\n客户端在xxx秒内直接读取缓存,statu code:200")])]),t._v(" "),e("li",[e("p",[t._v("cache-control: max-age=xxxx，immutable"),e("br"),t._v("\n客户端在xxx秒的有效期内，如果有请求该资源的需求的话就直接读取缓存,statu code:200 ，即使用户做了刷新操作，也不向服务器发起http请求")])]),t._v(" "),e("li",[e("p",[t._v("cache-control: no-cache"),e("br"),t._v("\n跳过设置强缓存，但是不妨碍设置协商缓存；一般如果你做了强缓存，只有在强缓存失效了才走协商缓存的，设置了no-cache就不会走强缓存了，每次请求都回询问服务端。")])]),t._v(" "),e("li",[e("p",[t._v("cache-control: no-store"),e("br"),t._v("\n不缓存，这个会让客户端、服务器都不缓存，也就没有所谓的强缓存、协商缓存了。")])])]),t._v(" "),e("h3",{attrs:{id:"准备ip和端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备ip和端口"}},[t._v("#")]),t._v(" 准备IP和端口")]),t._v(" "),e("p",[t._v("http和tcp的关系：HTTP协议属于应用层，TCP协议属于传输层，HTTP协议位于TCP协议的上层。请求方要发送的数据包，在应用层加上HTTP头以后会交给传输层的TCP协议处理，应答方接收到的数据包，在传输层拆掉TCP头以后交给应用层的HTTP协议处理。建立 TCP 连接后会顺序收发数据，请求方和应答方都必须依据 HTTP 规范构建和解析HTTP报文。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(375),alt:"tcp"}})]),t._v(" "),e("p",[e("img",{attrs:{src:r(376),alt:"tcp&http"}})]),t._v(" "),e("p",[t._v("第一步浏览器会请求 DNS 返回域名对应的 IP(浏览器还提供了 DNS 数据缓存服务，如果某个域名已经解析过了，那么浏览器会缓存解析的结果，以供下次查询时直接使用)")]),t._v(" "),e("p",[t._v("通常情况下，如果 URL 没有特别指明端口号，那么 HTTP 协议默认是 80 端口")]),t._v(" "),e("h3",{attrs:{id:"等待-tcp-队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#等待-tcp-队列"}},[t._v("#")]),t._v(" 等待 TCP 队列")]),t._v(" "),e("p",[t._v("chrome下同一个域名同时最多只能建立 6 个 TCP 连接，如果当前请求数量少于 6，会直接进入下一步，建立 TCP 连接，否则进入排队等待状态，直至进行中的请求完成。")]),t._v(" "),e("h3",{attrs:{id:"建立-tcp-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-tcp-连接"}},[t._v("#")]),t._v(" 建立 TCP 连接")]),t._v(" "),e("p",[t._v("这个阶段是通过“三次握手”来建立客户端和服务器之间的连接。TCP 提供面向连接的通信传输。面向连接是指在数据通信开始之前先做好两端之间的准备工作。所谓三次握手，是指在建立一个 TCP 连接时，客户端和服务器总共要发送三个数据包以确认连接的建立。")]),t._v(" "),e("h3",{attrs:{id:"发送-http-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求"}},[t._v("#")]),t._v(" 发送 HTTP 请求")]),t._v(" "),e("p",[t._v("浏览器会向服务器发送请求行，它包括了请求方法、请求 URI（Uniform Resource Identifier）和 HTTP 版本协议。如果使用 POST 方法，那么浏览器还要准备数据给服务器，这里准备的数据是通过请求体来发送。")]),t._v(" "),e("p",[e("strong",[t._v("数据传输中的TCP")]),t._v("  传输数据阶段，接收端需要对每个数据包进行确认操作，也就是接收端在接收到数据包之后，需要发送确认数据包给发送端。所以当发送端发送了一个数据包之后，在规定时间内没有接收到接收端反馈的确认消息，则判断为数据包丢失，并触发发送端的重发机制。同样，一个大的文件在传输过程中会被拆分成很多小的数据包，这些数据包到达接收端后，接收端会按照 TCP 头中的序号为其排序，从而保证组成完整的数据。")]),t._v(" "),e("h2",{attrs:{id:"服务器端处理-http-请求流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器端处理-http-请求流程"}},[t._v("#")]),t._v(" 服务器端处理 HTTP 请求流程")]),t._v(" "),e("h3",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),e("p",[t._v("请求资源时，把用户本地该资源的 etag 同时带到服务端，服务端和最新资源做对比。"),e("br"),t._v("\n如果资源没更改，返回304，浏览器读取本地缓存。"),e("br"),t._v("\n如果资源有更改，返回200，返回最新的资源。")]),t._v(" "),e("h3",{attrs:{id:"返回请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回请求"}},[t._v("#")]),t._v(" 返回请求")]),t._v(" "),e("p",[t._v("状态码表示处理结果。返回给浏览器响应头、响应体")]),t._v(" "),e("h3",{attrs:{id:"断开连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[t._v("#")]),t._v(" 断开连接")]),t._v(" "),e("p",[t._v("通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接，断开连接时通过四次挥手断开"),e("br"),t._v("\n如果设置"),e("code",[t._v("Connection:Keep-Alive")]),t._v("，那么 TCP 连接在发送后将仍然保持打开状态。保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。")]),t._v(" "),e("h3",{attrs:{id:"重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),e("p",[t._v("响应行返回的状态码是 301，就是告诉浏览器，我需要重定向到另外一个网址，而需要重定向的网址正是包含在响应头的 Location 字段中，浏览器获取 Location 字段中的地址，并使用该地址重新导航，这就是一个完整重定向的执行流程。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/9c95db596df5",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底弄懂强缓存与协商缓存"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://time.geekbang.org/column/article/116588",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP请求流程：为什么很多站点第二次打开速度会很快？"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://time.geekbang.org/column/article/113550",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP协议：如何保证页面文件能被完整送达浏览器？"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);