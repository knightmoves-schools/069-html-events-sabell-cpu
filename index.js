function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
    
}
  const num = Number(value);

    if (value === '' || isNaN(num)) {
        result.innerHTML = 'Invalid, please enter a number';
        return;
    }

    result.innerHTML = String(num * num);


document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('calculate');
    if (btn) btn.addEventListener('click', calculateSquare);
});