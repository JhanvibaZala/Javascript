const course = {
    courseName : "JS",
    courseInstructor : "Hitesh sir",
    price : "999"
}

const {courseInstructor : instructor} = course
console.log(instructor);        // Hitesh sir


// De-structure 
const navbar = ({company}) => {

}
console.log(company = "hitesh");
// O/P : hitesh