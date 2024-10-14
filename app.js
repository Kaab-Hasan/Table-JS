// get a number 
var tableNum = prompt('write any Number and Get Tables'); // 5
var i;
var j;
for ( i = tableNum; i >= 1; i--) { // 5 >= 1
    for ( j = 1; j <= 10; j++ ) { // 1 <= 10 | run 10 times
        // document.getElementById('box').innerHTML = `${j} x ${i} = ${j*i}`;
        document.write(`${i} x ${j} = ${j*i} <br>`) ;
        // console.log(`${j} x ${i} = ${j*i}`) ;
        // console.log(i);
        // console.log(j);
        
    }  // jab ye terminate ho gye ga to j ki dusri value k lien table print hoga, phir dosri, phir dosri..
    document.write('<br>','<hr>','<br>')
}
console.log('loop has end')
// var num = 2;
// var i = 1;
// for(let num = tableNum; tableNum  >= num > 0 ; num--){
//     // i++;
//     // console.log( `${num} x ${i} = ${num*i}`);
//     console.log(num);
// }
// for (let i = 1; i < 11; i++){
    
//     console.log( `${tableNum} x ${i} = ${tableNum*i}`)
//     tableNum--;
// }
// let num = 5;
// if(num = tableNum && tableNum  >= num > 0 ){
//     console.log('hello');
// }