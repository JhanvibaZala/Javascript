const dark = document.getElementById('dark')
const light = document.getElementById('light')

dark.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');

    dark.classList.add('active');
    light.classList.remove('active');

    // document.body.style.backgroundColor = 'black'
    // document.body.style.color = 'white'
})

light.addEventListener('click', function () {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');

    light.classList.add('active');
    dark.classList.remove('active');

    // document.body.style.backgroundColor = 'white'
    // document.body.style.color = 'black'
})