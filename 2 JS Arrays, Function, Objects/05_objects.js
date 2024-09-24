// Part three of object
// Objects destructrings
const course = {
    courseName: "JavaScript in Hindi",
    price: "999",
    courseIntructor: "Rahul"
}

// we do not want to write like below everytime
// course.courseIntructor
// that is why make sysntax like below for ease of use and better readibilty
const {courseIntructor} = course
console.log(courseIntructor);

// we can also get same value from another given name
const {courseIntructor: instuctor} = course
console.log(instuctor);

// usecase of uppper one
// in react we see we wrote {company}
const navbar = ({company})  =>{

}

navbar(company = "Rahul");
