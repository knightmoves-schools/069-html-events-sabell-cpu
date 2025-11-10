function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    //add code here
       const num = Number(value);

    if (value === '' || isNaN(num)) {
        result.innerHTML = 'Invalid, please enter a number';
        return;
    }

    result.innerHTML = String(num * num);
}

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('calculate');
    if (btn) btn.addEventListener('click', calculateSquare);
});

  //should multiply the input with the id number with itself 
  // and display the squared value in the div with the id result

//should display 'Invalid, please enter a number' in the div 
// with the id result when the input is not a number.