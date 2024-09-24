// ++++++++++++++++++++++++ My Method ++++++++++++++++++++++++++++++

// const body = document.querySelector('body')
// const hex = "ABCDEF1234567890"

// let intervalID;
// let randomColor = function(){
//     let color = ""
//     for(let i = 0; i <= 5; i++){
//         let random = parseInt((Math.random()*16));
//         color += hex.charAt(random);
//     }
//     return color;
// }

// function changeBackGroundColor(){
//     let color = `#${randomColor()}`
//     body.style.backgroundColor = `${color}`
// }
    
// document.getElementById('start').addEventListener('click', function(){
//     intervalID = setInterval(changeBackGroundColor, 1000)
// })

// document.getElementById('stop').addEventListener('click', function(){
//     clearInterval(intervalID)
// })


// +++++++++++++++++++++++ Sir Method +++++++++++++++++++++++++++++

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];  
    }
    return color;
}

let intervalID;
const startChangingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalID){   // we can also do intervalID === null
        intervalID = setInterval(changeBgColor, 1000)
    } 
    // we gave if because we did null to intervalID 
};

const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null; // for optmise code
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);



