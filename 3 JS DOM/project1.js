// +++++++++++++++++++++ Basic Method +++++++++++++++++++++++++
// const grayButton = document.querySelector('#grey');
// const whiteButton = document.querySelector('#white');
// const blueButton = document.querySelector('#blue');
// const yellowButton = document.querySelector('#yellow');
// const body = document.querySelector('body');


// grayButton.addEventListener('click', function(){
//     body.style.backgroundColor = 'grey'
// })
// whiteButton.addEventListener('click', function(){
//     body.style.backgroundColor = 'white'
// })
// yellowButton.addEventListener('click', function(){
//     body.style.backgroundColor = 'yellow'
// })
// blueButton.addEventListener('click', function(){
//     body.style.backgroundColor = 'blue'
// })


// +++++++++++++++++++++++++ Complex Method ++++++++++++++++++++++
// targetting all the span and body
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// going through with all the span
buttons.forEach(function(button){   // we can give anthing in place of button
    button.addEventListener('click', function(e){  //  e is a object of event we can give anything
        // console.log(e.target);  // e.target is helpful to know from where the even is come from
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id 
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id 
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id 
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id 
        }
    });
});


// Question : What element.target do??
// if
anything.addEventListener('click', e =>{
    e.target.innerText
})
// here we got the text of tag where the event is happned


