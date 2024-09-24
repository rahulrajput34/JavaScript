// +++++++++++++++++++++++++++++ My Method ++++++++++++++++++++++++++
// const time = document.querySelector('#clock');

// setInterval(function() {
//     let date = new Date();
//     time.textContent = `${date.toLocaleTimeString()}`
// }, 1000);


// ++++++++++++++++++++++++++++++++  Sir Method +++++++++++++++++++++++++++

const clock = document.getElementById('clock')
// const clock = document.querySelector('clock')

// setInterval(function(){}, 1000)    always write like this it not going to give you any confusion
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);























