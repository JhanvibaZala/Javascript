const calculateBtn = document.querySelector('#calculate');

calculateBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    
    if(height===0 || height<0 ||isNaN(height)) {
        result.innerHTML = "please give valid height"
    }
    else if(weight===0 || weight<0 ||isNaN(weight)) {
        result.innerHTML = "please give valid weight"
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi<18.60) {
            result.innerHTML = `<span>BMI is ${bmi} (underweight)</span>`
        }
        else if(bmi>24.90) {
            result.innerHTML = `<span>BMI is ${bmi} (overweight)</span>`
        }
        else {
            result.innerHTML = `<span>BMI is ${bmi} (normal weight)</span>`
        }
    }
})