// 1.声明局部变量

for(let index=0;index<10;index++){

}
if(true){
    let c=12;
    console.log(c);
}




//for (let index = 0; index < 10; index++) {
//}
//if (true) {
//  let c = 12;
//}
//// 常量
//const PI = 3.14;
//
//// 2.字符串

let database = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'},
  {id: 4, name: 'd'},
  {id: 5, name: 'e'}
];
let x =`abc${database.map(v=> v.name).join('')}def`;
console.log(x);





//let str = 12;
//let x = `abc${database.map(v=>v.name).join('')}def`;
//console.log(x);
//var x1 = 12;
//var x2 = 13;
//// let className = (x1 > x2) ? `list${x1}` : `list${x2}`;
//let className = `list${(x1 > x2) ? x1 : x2}`;
//console.log(className);
//
//
//// 3. 函数
//var fn1 = ()=> {
//  console.log(1);
//};
//var add = (x, y) => x + y;
//var fn3 = x => ({x: x});
//var fn4 = y => fn3(y);
//
//console.log(fn4(12));
//
//console.log(database.map(v=>v.name).join(''));
