const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click',function(e){
        if(e.target.id==='blue') {
            body.style.backgroundColor = e.target.id;
        }   
        if(e.target.id==='maroon') {
            body.style.backgroundColor = e.target.id;
        }  
        if(e.target.id==='pink') {
            body.style.backgroundColor = e.target.id;
        }  
        if(e.target.id==='green') {
            body.style.backgroundColor = e.target.id;
        }  
        if(e.target.id==='teal') {
            body.style.backgroundColor = e.target.id;
        }
    })
});

const resetButton = document.querySelector('#reset-btn');

resetButton.addEventListener('click',function(){
    document.body.style.backgroundColor = "white"
});