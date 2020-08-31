(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{427:function(v,t,a){"use strict";a.r(t);var _=a(26),r=Object(_.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[v._v("#")]),v._v(" 执行上下文")]),v._v(" "),a("p",[v._v("简而言之，执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。")]),v._v(" "),a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[v._v("#")]),v._v(" 类型")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("全局执行上下文")])])]),v._v(" "),a("p",[v._v("这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("函数执行上下文")])])]),v._v(" "),a("p",[v._v("每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序执行一系列步骤。")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("Eval 函数执行上下文")])])]),v._v(" "),a("p",[v._v("执行在 eval 函数内部的代码也会有它属于自己的执行上下文")]),v._v(" "),a("h2",{attrs:{id:"执行栈-调用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈-调用栈"}},[v._v("#")]),v._v(" 执行栈(调用栈)")]),v._v(" "),a("p",[v._v("执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。")]),v._v(" "),a("p",[v._v("当 JavaScript 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部。")]),v._v(" "),a("p",[v._v("引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文。")]),v._v(" "),a("h2",{attrs:{id:"es3规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es3规范"}},[v._v("#")]),v._v(" ES3规范")]),v._v(" "),a("p",[v._v("一个执行上下文可能包括：变量对象、活动对象、作用域链")]),v._v(" "),a("h3",{attrs:{id:"变量对象-vo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象-vo"}},[v._v("#")]),v._v(" 变量对象(VO)")]),v._v(" "),a("p",[v._v("每个执行环境文都有一个表示变量的对象——变量对象，全局执行环境的变量对象始终存在，而函数这样局部环境的变量，只会在函数执行的过程中存在，在函数被调用时且在具体的函数代码运行之前，JS 引擎会用当前函数的参数列表（arguments）初始化一个 “变量对象” 并将当前执行上下文与之关联 ，函数代码块中声明的 变量 和 函数 将作为属性添加到这个变量对象上。")]),v._v(" "),a("h3",{attrs:{id:"活动对象-ao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动对象-ao"}},[v._v("#")]),v._v(" 活动对象(AO)")]),v._v(" "),a("p",[v._v("函数进入执行阶段时，原本不能访问的变量对象被激活成为一个活动对象，自此，我们可以访问到其中的各种属性。")]),v._v(" "),a("h3",{attrs:{id:"作用域链（scope-chain）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域链（scope-chain）"}},[v._v("#")]),v._v(" 作用域链（scope chain）")]),v._v(" "),a("p",[v._v("作用域 规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做 作用域链。")]),v._v(" "),a("p",[v._v("函数的作用域在函数创建时就已经确定了。当函数创建时，会有一个名为 [[scope]] 的内部属性保存所有父变量对象到其中。当函数执行时，会创建一个执行环境，然后通过复制函数的 [[scope]]  属性中的对象构建起执行环境的作用域链，然后，变量对象 VO 被激活生成 AO 并添加到作用域链的前端")]),v._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[v._v("#")]),v._v(" 生命周期")]),v._v(" "),a("h4",{attrs:{id:"创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[v._v("#")]),v._v(" 创建阶段")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("用当前函数的参数列表（arguments）初始化一个 “变量对象” 并将当前执行上下文与之关联 ，函数代码块中声明的 变量 和 函数 将作为属性添加到这个变量对象上。在这一阶段，会进行变量和函数的初始化声明，变量统一定义为 undefined 需要等到赋值时才会有确值，而函数则会直接定义")])]),v._v(" "),a("li",[a("p",[v._v("构建作用域链")])]),v._v(" "),a("li",[a("p",[v._v("确定 this 的值")])])]),v._v(" "),a("h4",{attrs:{id:"执行阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[v._v("#")]),v._v(" 执行阶段")]),v._v(" "),a("p",[v._v("执行阶段中，JS 代码开始逐条执行，在这个阶段，JS 引擎开始对定义的变量赋值、开始顺着作用域链访问变量、如果内部有函数调用就创建一个新的执行上下文压入执行栈并把控制权交出")]),v._v(" "),a("h4",{attrs:{id:"销毁阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁阶段"}},[v._v("#")]),v._v(" 销毁阶段")]),v._v(" "),a("p",[v._v("一般来讲当函数执行完成后，当前执行上下文（局部环境）会被弹出执行上下文栈并且销毁，控制权被重新交给执行栈上一层的执行上下文。(闭包除外)")]),v._v(" "),a("h3",{attrs:{id:"es3总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es3总结"}},[v._v("#")]),v._v(" ES3总结")]),v._v(" "),a("ol",[a("li",[v._v("函数被调用")]),v._v(" "),a("li",[v._v("在执行具体的函数代码之前，创建了执行上下文")]),v._v(" "),a("li",[v._v("进入执行上下文的创建阶段：\n"),a("ol",[a("li",[v._v("初始化作用域链")]),v._v(" "),a("li",[v._v("创建 arguments object 检查上下文中的参数，初始化名称和值并创建引用副本")]),v._v(" "),a("li",[v._v("扫描上下文找到所有函数声明：对于每个找到的函数，用它们的原生函数名，在变量对象中创建一个属性，该属性里存放的是一个指向实际内存地址的指针。如果函数名称已经存在了，属性的引用指针将会被覆盖")]),v._v(" "),a("li",[v._v("扫描上下文找到所有 var 的变量声明：对于每个找到的变量声明，用它们的原生变量名，在变量对象中创建一个属性，并且使用 undefined 来初始化。如果变量名作为属性在变量对象中已存在，则不做任何处理并接着扫描")]),v._v(" "),a("li",[v._v("确定 this 值")])])]),v._v(" "),a("li",[v._v("进入执行上下文的执行阶段，在上下文中运行/解释函数代码，并在代码逐行执行时分配变量值。")])]),v._v(" "),a("h2",{attrs:{id:"es5规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5规范"}},[v._v("#")]),v._v(" ES5规范")]),v._v(" "),a("p",[v._v("ES5 规范又对 ES3 中执行上下文的部分概念做了调整，最主要的调整，就是去除了 ES3 中变量对象和活动对象，以 词法环境组件（ LexicalEnvironment component） 和 变量环境组件（ VariableEnvironment component） 替代")]),v._v(" "),a("h3",{attrs:{id:"词法环境-lexical-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-lexical-environment"}},[v._v("#")]),v._v(" 词法环境(Lexical Environment)")]),v._v(" "),a("p",[v._v("词法环境是用来定义 基于词法嵌套结构的ECMAScript代码内的标识符与变量值和函数值之间的关联关系 的一种规范类型。一个词法环境由环境记录（Environment Record）和一个可能为null的对外部词法环境的引用（outer）组成。一般来说，词法环境都与特定的ECMAScript代码语法结构相关联，例如函数、代码块、TryCatch中的Catch从句，并且每次执行这类代码时都会创建新的词法环境")]),v._v(" "),a("p",[v._v("词法环境有两部分组成：")]),v._v(" "),a("h4",{attrs:{id:"环境记录器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境记录器"}},[v._v("#")]),v._v(" 环境记录器")]),v._v(" "),a("ol",[a("li",[v._v("声明式环境记录器——包括函数环境记录器和模块环境记录")]),v._v(" "),a("li",[v._v("对象式环境记录器——来定义出现在全局上下文中的变量和函数的关系")])]),v._v(" "),a("h4",{attrs:{id:"外部词法环境的引用-outer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部词法环境的引用-outer"}},[v._v("#")]),v._v(" 外部词法环境的引用(outer)")]),v._v(" "),a("p",[v._v("外部词法环境的引用将一个词法环境和其外部词法环境链接起来，外部词法环境又拥有对其自身的外部词法环境的引用。这样就形成一个链式结构，这里我们称其为环境链（即ES6之前的作用域链），全局环境是这条链的顶端。")]),v._v(" "),a("ol",[a("li",[v._v("全局环境的外部词法环境引用为null。")]),v._v(" "),a("li",[v._v("一个词法环境可以作为多个词法环境的外部环境。例如全局声明了多个函数，则这些函数词法环境的外部词法环境引用都指向全局环境。")])]),v._v(" "),a("h3",{attrs:{id:"变量环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[v._v("#")]),v._v(" 变量环境")]),v._v(" "),a("p",[v._v("变量环境 它也是一个 词法环境 ，所以它有着词法环境的所有特性。在 ES6 中，词法环境组件和 变量环境 的一个不同就是前者被用来存储函数声明和变量（let 和 const）绑定，而后者只用来存储 var 变量绑定。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("全局作用域下的区别")]),v._v(" "),a("p",[a("code",[v._v("let")]),v._v(" "),a("code",[v._v("const")]),v._v(" 声明在词法环境中，"),a("code",[v._v("var")]),v._v(" 和 "),a("code",[v._v("Function")]),v._v(" 声明在变量环境中，在内存空间中的位置不同，"),a("code",[v._v("let")]),v._v(" "),a("code",[v._v("const")]),v._v(" 不能直接通过 "),a("code",[v._v("window")]),v._v(" 访问，而 "),a("code",[v._v("var a = 1")]),v._v(" 可以通过全局变量 "),a("code",[v._v("window")]),v._v(" 取到。"),a("code",[v._v("window.a === a(true)")])])]),v._v(" "),a("h3",{attrs:{id:"es5总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5总结"}},[v._v("#")]),v._v(" ES5总结")]),v._v(" "),a("ol",[a("li",[v._v("程序启动，全局上下文被创建\n"),a("ol",[a("li",[v._v("创建全局上下文的"),a("strong",[v._v("词法环境")])]),v._v(" "),a("li",[v._v("创建全局上下文的"),a("strong",[v._v("变量环境")])]),v._v(" "),a("li",[v._v("确定 this 值为全局对象（以浏览器为例，就是 window ）")])])]),v._v(" "),a("li",[v._v("函数被调用，函数上下文被创建\n"),a("ol",[a("li",[v._v("创建函数上下文的"),a("strong",[v._v("词法环境")]),v._v("（创建"),a("strong",[v._v("声明式环境记录器")]),v._v("，创建"),a("strong",[v._v("外部环境引用")]),v._v("）")]),v._v(" "),a("li",[v._v("创建函数上下文的"),a("strong",[v._v("变量环境")]),v._v("（创建"),a("strong",[v._v("声明式环境记录器")]),v._v("，创建"),a("strong",[v._v("外部环境引用")]),v._v("）")])])]),v._v(" "),a("li",[v._v("进入函数执行上下文的执行阶段，在上下文中运行/解释函数代码，并在代码逐行执行时分配变量值")])]),v._v(" "),a("h3",{attrs:{id:"变量提升和暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量提升和暂时性死区"}},[v._v("#")]),v._v(" 变量提升和暂时性死区")]),v._v(" "),a("ol",[a("li",[v._v("执行代码块内的 let const 和 class 声明的标识符合集记录为 lexNames")]),v._v(" "),a("li",[v._v("执行代码块内的 var 和 function 声明的标识符合集记录为 varNames")]),v._v(" "),a("li",[v._v("如果lexNames内的任何标识符在 varNames 或 lexNames 内出现过，则报错 SyntaxError (这就是为什么可以用var或function声明多个同名变量，但是不能用let、const和class声明多个同名变量。)")]),v._v(" "),a("li",[v._v("将 varNames 内的 var 声明的标识符实例化并初始化赋值 undefined，如果有同名标识符则跳过(这就是所谓的变量提升，我们用var声明的变量，在声明位置之前访问并不会报错，而是返回undefined)")]),v._v(" "),a("li",[v._v("将 lexNames 内的标识符实例化，但并不会进行初始化，在运行至其声明处代码时才会进行初始化，在初始化前访问都会报错。(这就是我们所说的暂时性死区， let const 和 class 声明的变量其实也提升了，只不过没有被初始化，初始化之前不可访问。)")]),v._v(" "),a("li",[v._v("最后将 varNames 内的函数声明实例化并初始化赋值对应的函数体，如果有同名函数声明，则前面的都会忽略，只有最后一个声明的函数会被初始化赋值。(函数声明会被直接赋值，所有我们在函数声明位置之前也可以调用函数)")])]),v._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5ebced85e51d454dc1467664",target:"_blank",rel:"noopener noreferrer"}},[v._v("面试官：说说执行上下文吧"),a("OutboundLink")],1)]),v._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903733495595016",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入JavaScript系列（一）：词法环境"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);