function a() {
    let b = 0;
    console.log(b);
}

a();

if(true) {
    let c = 1;
    
    const d = function() {
        console.log('d is called');
    }
}
// 関数宣言では、ブロックスコープは無視して実行できる（変数に代入すると呼び出すことはできなくなる）
d();
console.log(c);