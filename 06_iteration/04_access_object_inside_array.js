const coding = [
    {
        languageName : "Java",
        languageFileName : "java",
        languageScope : "high" 
    },

    {
        languageName : "JavaScript",
        languageFileName : "js",
        languageScope : "medium" 
    },

    {
        languageName : "Python",
        languageFileName : "py",
        languageScope : "low" 
    }
]

coding.forEach( (item) =>{
    console.log(item.languageFileName);
} )

// java
// js
// py

coding.forEach( (item) =>{
    console.log(item.languageName);
} )
// Java
// JavaScript
// Python