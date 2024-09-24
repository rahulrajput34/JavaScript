// for each loop
const coding = ["Rk", "Rahul", "Rajput", "R", "Ram"];

// syntax
coding.forEach(item => {
    console.log(item);
});

coding.forEach( function(item){
    console.log(item);
});

// it also have access of index and arrayList
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "Javascript",
        fileName: "js"   
    },
    {
        languageName: "Java",
        fileName: "java"   
    },
    {
        languageName: "Python",
        fileName: "py"   
    }
]

myCoding.forEach(item => {
    console.log(item.languageName);
});

