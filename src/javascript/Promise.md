---
sidebarDepth: 0
---

# Promise

Promise 是异步编程的一种解决方案。可以看作一个容器，保存着某个未来才会结束的事件结果（异步操作）

## then catch

then是定义在原型对象上的方法。then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。方法返回的是一个新的Promise实例

catch 是 then 方法第二个参数的别名，如果 Promise 状态变成 rejected，就会调用catch()方法指定的回调函数。

* 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
* Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
* 如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

## finally

finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

:::tip 注意
finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
:::

## all、race、allSettled

### all

将多个 Promise 实例，包装成一个新的 Promise 实例

```javascript
const p = Promise.all([p1, p2, p3]);
```

* 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
* 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
* 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

### race

方法同 all，把多个 Promise 实例，包装成一个新的 Promise 实例。区别是数组中的 Promise 实例只要有一个先改变状态，p 就把那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

### allSettled

方法同 all，只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。

监听函数接收到的参数是一个数组，每个成员对应一个传入Promise.allSettled()的 Promise 实例。

## 面试题

### 使用Promise实现每隔1秒输出1,2,3

```javascript
[1, 2, 3].reduce((p, x) => {
    return p.then(() => {
        return new Promise((res, rej) => {
            return setTimeout(() => {
                console.log(x);
                res()
            }, 1000)
        })
    })
}, Promise.resolve())
```

### 红绿灯交替

红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：

```javascript
function red() {console.log('red')}
function yellow() {console.log('yellow')}
function green() {console.log('green')}

function light(time, fn) {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve();
        }, time)
    })
}

function step() {
    Promise.resolve()
        .then(() => {
            return light(3000, red)
        }).then(() => {
            return light(2000, yellow)
        }).then(() => {
            return light(1000, green)
        }).then(() => {
            return step();
        })
}

step();
```

### 手写 promise

## 总结

* `Promise` 的状态不受外界影响，一经改变就不能再改变
* `.then`和`.catch`都会返回一个新的`promise`
* `.catch`不管连接在哪，都能捕获上层未捕获的错误
* 在`promise`中，返回的非`promise`的值都会被包裹成`promise`对象
* `.then`和`.catch`可以被调用多次，但如果`Promise`内部的状态一经改变，并且有了一个值，那么后续每次调用`.then`或者`.catch`的时候都会直接拿到该值。(非链式调用)
* `.then`或者`.catch`中`return`一个`error`对象并不会抛出错误，所以不会被后续的`.catch`捕获。
* `.then` 或 `.catch` 返回的值不能是 `promise` 本身，否则会造成死循环。(见3.7)
* `.then` 或者 `.catch` 的参数期望是函数，传入非函数则会发生值透传。
* `.then` 方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为 `catch`是 `.then` 第二个参数的简便写法。
* `.finally` 方法也是返回一个 `Promise`，他在 `Promise` 结束的时候，无论结果为`resolved`还是`rejected`，都会执行里面的回调函数。
