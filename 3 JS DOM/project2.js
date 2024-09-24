// Here main things to learn is when we give event on the form that time we can target form and then give event lisnter by form.addevenlistner
// second thing is How to give isNAN(heightValue)
//Third is how we can validate our input


// +++++++++++++++++++++++++++++  My Method +++++++++++++++++++++++++++++++++
const form = document.querySelector('form');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const results = document.getElementById('results');
results.style.fontWeight = 'bold'
results.style.color = 'red'

form.addEventListener('submit', e => {
    e.preventDefault();
    let heightValue = parseInt(height.value);
    let weightValue = parseInt(weight.value);

    if(heightValue === "" || heightValue === null || isNaN(heightValue) || heightValue < 0){
        results.textContent = 'Please Enter a valid height';
    } else if(weightValue === "" || weightValue === null || weightValue === NaN || weightValue < 0){
        results.textContent = `Please Enter a valid weight`;
    } else{
        const BMI = (weightValue / ((heightValue*heightValue)/10000)).toFixed(2);
        results.textContent = `Your BMI is ${BMI}`
    }
})

// ++++++++++++++++++++++++++  Sir MEthod ++++++++++++++++++++++++++++++++

// const form = document.querySelector('form');
// // This usecase will give you empty value
// // const height = parseInt(document.querySelector('#height').value);   

// //when we click on the even that time we want the value that is why we have to privide this  all values inside the evenlistner
// form.addEventListener('submit', function(e){
//     e.preventDefault();   /// stop you default action do not submit antwhere
//     const height = parseInt(document.querySelector('#height').value);   // .value for get value
//     const weight = parseInt(document.querySelector('#weight').value);   // to check if given number is interger or not
//     const result = document.querySelector('#results');

//     if(height === '' || height <= 0 || isNaN(height)){  //isNaN is helpful for check is it is number or not
//         result.innerHTML = `Please give us Valid input Your given ${height} is not valid`
//     } else if (height === '' || height <= 0 || isNaN(height) ){
//         result.innerHTML = `Please give us Valid input Your given ${weight} is not valid`
//     } else{
//         const bmi = (weight / ((height*height)/10000).toFixed(2))  /// toFixed for round to 2 decimal place
//         result.innerHTML = `<span>${bmi}</span>`
//     }
// });