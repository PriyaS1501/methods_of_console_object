// console.log() method
console.log("*****Console.log method*****");
console.log(1);
console.log("Hello JS");
console.log(true);
console.log(undefined);
console.log(null);
console.log([1,2,3,4,5]);
console.log({a:1, b:2, c:3, d:4, e:5});

// console.error() method
console.log("*****console.error method*****");
console.error("This is an error");

// console.warn() method
console.log("*****console.warn method*****");
console.warn("This is a warning");

// console.clear() method
//console.log("*****console.clear method*****");
//console.clear("console was cleared");

// console.time() and console.timeEnd() method
console.log("*****console.time() and console.timeEnd() method*****");
console.time('abc');
 let fun1 =  function(){
     console.log('function1 is running');
 }
 let fun2 = function(){
     console.log('function2 is running..');
 }
 let fun3 = function(){
    console.log('function3 is running..');
}
 fun1(); // calling fun1();
 fun2(); // calling fun2();
 fun3(); // calling fun3();
console.timeEnd('abc');

//console.table() method
console.log("*****console.table() method*****");
console.table({'a':1, 'b':2});


// console.count() method
console.log("*****console.count() method*****");
for(let numbers=0;numbers<=5;numbers++){
    console.count(numbers);
}

// console.group() and console.groupEnd() method
console.log("*****console.group() and console.groupEnd() method*****");
console.group('------first Session Started------');
console.warn('warning!');
console.error('error here');
console.table({'a':1, 'b':2});
console.groupEnd('end');
console.log('------Second Session started------');

//custom console logs method
const space = '15px';
const styles = `font-style:italic; color:red; font-weight:600; text-decoration:underline; font-size:25px;
text-transform: capitalize; padding:${space}; border:2px solid #ccc`;
console.log('%cHello World', styles);

