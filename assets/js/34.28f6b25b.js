(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{393:function(a,e,s){"use strict";s.r(e);var t=s(44),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"es6-set-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-set-数据结构"}},[a._v("#")]),a._v(" ES6 Set 数据结构")]),a._v(" "),s("blockquote",[s("p",[a._v("作为ES6提供的一种新数据结构, "),s("code",[a._v("Set")]),a._v("    类似于数组,但其成员却是唯一的,不会有重复的成员出现."),s("code",[a._v("Set")]),a._v("    本身是一个构造函数,可以生成"),s("em",[a._v("Set")]),a._v("数据结构")])]),a._v(" "),s("h3",{attrs:{id:"实例化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例化"}},[a._v("#")]),a._v(" 实例化")]),a._v(" "),s("ul",[s("li",[a._v("方法1")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 接受数组作为参数\nconst arr = [1,2,3]\nconst s0 = new Set(arr)\nconsole.log(s0)  //Set(3) {1, 2, 3}\n")])])]),s("ul",[s("li",[a._v("方法2")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// html\n<span>1</span>\n<span>2</span>\n<span>3</span>\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 接受类似数组的对象作为参数\nconst spans = document.querySelectorAll('span')\nconsole.log(spans)\nconsole.log(new Set(spans))  //Set(3) {span, span, span}\n\n")])])]),s("ul",[s("li",[a._v("方法3")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 实例化后通过add()方法添加元素\nconst s = new Set()\ns.add(1).add(2).add(2).add('2')\nconsole.log(s) //Set(3) {1, 2, \"2\"}\n")])])]),s("p",[a._v("由此还可以看出来"),s("code",[a._v("Number")]),a._v("类型的"),s("code",[a._v("2")]),a._v("和"),s("code",[a._v("String")]),a._v("类型的 "),s("code",[a._v("'2'")]),a._v("是不一样的.Set内部判断两个值是否相等的算法类似于 全等运算符( === ) ,最主要的区别在于Set里面 NaN等于自身, 但是 === 比较中认为 NaN !== NaN,这个从下面的代码中可以看出来")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('s.add(NaN)\nconsole.log(s)  //Set(4) {1, 2, "2", NaN}\ns.add(NaN)\nconsole.log(s)  //Set(4) {1, 2, "2", NaN}\n')])])]),s("p",[a._v("第二次add(NaN)之后再次打印set的数据结构,发现没有变化,印证了上面的结论")]),a._v(" "),s("h3",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[a._v("#")]),a._v(" 实例方法")]),a._v(" "),s("h4",{attrs:{id:"操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作方法"}},[a._v("#")]),a._v(" 操作方法")]),a._v(" "),s("ul",[s("li",[a._v("add(value)\n说明: 添加值,返回Set本身,因此add可以链式调用")]),a._v(" "),s("li",[a._v("delete(value)\n说明: 删除值,返回一个Boolean表示删除是否成功")]),a._v(" "),s("li",[a._v("has(value)\n说明: 表示是否有这个成员,返回Boolean类型")]),a._v(" "),s("li",[a._v("clear()\n说明: 清除所有成员")])]),a._v(" "),s("h5",{attrs:{id:"add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" add()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const s2 = new Set()\ns2.add(1).add(2)\nconsole.log(s2)  //Set(2) {1, 2}\n")])])]),s("h5",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[a._v("#")]),a._v(" delete()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const isSuccess = s2.delete(2)\nconsole.log(isSuccess)  //true\nconsole.log(s2)  //Set(1) {1}\n")])])]),s("h5",{attrs:{id:"has"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#has"}},[a._v("#")]),a._v(" has()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("console.log(s2.has(1))  //true\nconsole.log(s2.has(2))  //false\n")])])]),s("h5",{attrs:{id:"clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[a._v("#")]),a._v(" clear()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("s2.clear()\nconsole.log(s2)  //Set(0) {}\n")])])]),s("h4",{attrs:{id:"遍历方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历方法"}},[a._v("#")]),a._v(" 遍历方法")]),a._v(" "),s("ul",[s("li",[a._v("keys()\n说明: 返回键名")]),a._v(" "),s("li",[a._v("values()\n说明: 返回键值")]),a._v(" "),s("li",[a._v("entries()\n说明: 返回键值对")]),a._v(" "),s("li",[a._v("forEach()\n说明: 使用回调遍历每个成员")])]),a._v(" "),s("h5",{attrs:{id:"keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[a._v("#")]),a._v(" keys()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const nameArr = ['zhangsan','lisi','wangwu']\nconst nameSet = new Set(nameArr)\nconsole.log(nameSet.keys())  //SetIterator {\"zhangsan\", \"lisi\", \"wangwu\"}\nfor(let item of nameSet.keys()){\n  console.log(item)\n}\n// zhangsan\n// lisi\n// wangwu\n")])])]),s("h5",{attrs:{id:"values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#values"}},[a._v("#")]),a._v(" values()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('console.log(nameSet.values())  //SetIterator {"zhangsan", "lisi", "wangwu"}\nfor(let item of nameSet.values()){\n  console.log(item)\n}\n// zhangsan\n// lisi\n// wangwu\n')])])]),s("h5",{attrs:{id:"entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entries"}},[a._v("#")]),a._v(" entries()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('console.log(nameSet.entries())  //SetIterator {"zhangsan" => "zhangsan", "lisi" => "lisi", "wangwu" => "wangwu"}\nfor(let item of nameSet.entries()){\n  console.log(item)\n}\n// ["zhangsan", "zhangsan"]\n// ["lisi", "lisi"]\n// ["wangwu", "wangwu"]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for(let item of nameSet){\n  console.log(item)\n}\n// zhangsan\n// lisi\n// wangwu\n")])])]),s("blockquote",[s("p",[s("em",[a._v("实例默认就可以被遍历,默认的就是values()方法")])])]),a._v(" "),s("h5",{attrs:{id:"foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[a._v("#")]),a._v(" forEach()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nameSet.forEach((v,k) => console.log('key: %s, value: %s',k,v))\n// key: zhangsan, value: zhangsan\n// key: lisi, value: lisi\n// key: wangwu, value: wangwu\n")])])]),s("h3",{attrs:{id:"set实现数组去重"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set实现数组去重"}},[a._v("#")]),a._v(" Set实现数组去重")]),a._v(" "),s("ul",[s("li",[a._v("方法1")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const tmpArr = [1,2,2,3]\nconsole.log([...new Set(tmpArr)])  // [1, 2, 3]\n")])])]),s("ul",[s("li",[a._v("方法2")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const tmpArr = [1,2,2,3]\nconsole.log(Array.from(new Set(tmpArr)))  // [1, 2, 3]\n")])])]),s("h3",{attrs:{id:"weakset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weakset"}},[a._v("#")]),a._v(" WeakSet")]),a._v(" "),s("blockquote",[s("p",[a._v("WeakSet()的成员只能是对象,而不能是其他的数据类型,这是它与Set()的第一点区别")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const wSet = new WeakSet()\nconsole.log(wSet)  // WeakSet {}\n\ntry{\n  wSet.add(1) \n}catch(e){\n  console.warn(e)  //TypeError: Invalid value used in weak set\n}\n\nwSet.add({}) \nconsole.log(wSet)  //WeakSet {{…}}\n")])])]),s("blockquote",[s("p",[a._v("第二点区别是WeakSet中对象都是弱引用,垃圾回收机制不考虑WeakSet对该对象的引用,因此WeakSet也是不可遍历的")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const wArr = [3,4]\ntry{\n  console.log(new WeakSet(wArr))  //TypeError: Invalid value used in weak set\n}catch(e){\n  console.warn(e)\n}\n\nconst wArr2 = [[1],[2]]\nconsole.log(new WeakSet(wArr2)) //WeakSet {Array(1), Array(1)}\n")])])]),s("p",[a._v("上面的例子说明数组的成员只能是对象")]),a._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[s("code",[a._v("Set")]),a._v("和 "),s("code",[a._v("WeakSet")]),a._v("    的关系类似于 "),s("code",[a._v("Map")]),a._v("    和 "),s("code",[a._v("WeakMap")]),a._v(" 的关系,想要了解 "),s("code",[a._v("Map")]),a._v("  数据结构,可以看另外一篇文章 链接: "),s("a",{attrs:{href:"https://juejin.im/post/5e54eec9e51d4526cf47fa5d",target:"_blank",rel:"noopener noreferrer"}},[a._v("ES6 Map 数据结构"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);