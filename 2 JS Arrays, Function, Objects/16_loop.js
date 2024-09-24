// loops in js
// For loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value ${j} and outer loop ${i}`); 
    }
}


// for each loop
let myHero = ["rk", "rahul", "Rajput"];
myHero.forEach(el => {
    console.log(el);
});


// Diffrence between break and contine
for (let i = 0; i <= 20; i++) {
    console.log(`Break ${i}`)
    if(i == 14){
        break;
    }    
}

for (let i = 0; i <= 20; i++) {
    console.log(`Contine ${i}`)
    if(i == 14){
        continue;
    } 
}

//while loop
let i = 0;
while(i <= 10){
    console.log(`value of index is ${i}`);
    i++;
}

// do while loop
// catch over here is the condition is going to run once at least
let t = 112;
do{
    console.log(`value of t is ${t}`);
    t++;
}while(t <= 10);