## Promise

### Promise三个状态以及变化

三种状态： pending、resolve、rejected

状态变化: pending -> resolve、pending -> rejected

==变化不可逆==

**状态表现**
1. pending状态，不会触发then和catch
2. resolved状态，会触发后续的then回调函数
3. rejected状态，会触发后续的catch回调函数