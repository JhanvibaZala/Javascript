function outer() {
    let username = "jhanviba";
    function innerOne() {
        console.log(`innerOne : ${username}`);
    }
    function innerTwo() {
        console.log(`innerTwo : ${username}`);
    }
    innerOne();
    innerTwo();
}
// outer.username()        // error
outer()        // no error
// o/p:
// innerOne : jhanviba
// innerOne : jhanviba

// ++++++++++++++++++++++++  2nd  ++++++++++++++++++++++++++++++++
function outer2() {
    let username = "jhanviba";
    function innerOne1() {
        let name = "shakti"
        console.log(`innerOne1 : ${username}`);
        function innerTwo2() {
            console.log(`innerTwo2 : ${name}`);
        }
        innerTwo2();
    }
    innerOne1();
    
}
outer2()        // no error
// o/p :
// innerOne1 : jhanviba
// innerTwo2 : shakti 