const btnBtn = document.getElementById('btn');
const textSecond = document.getElementById('text');

let clickCount = 0;

btnBtn.addEventListener('click', () => {
    textSecond.textContent = 'ボタンをクリックしました';
});