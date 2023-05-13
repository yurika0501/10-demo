const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
    // // チェックボックスにチェックが入っているなら
    // if (isAgreed.checked){//「===true」は省略してもOK
    //     // ボタンの無効化をなしにする
    //     btn.disabled = false;
    //     // そうじゃないなら（チェックが入っていないなら）
    // } else {
    //     // ボタンを無効化する
    //     btn.disabled = true;
    // }
    
    // 上記を省略した記述
    btn.disabled = !isAgreed.checked;
});