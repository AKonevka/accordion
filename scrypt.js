const tab = document.querySelectorAll('.tab');
const text = document.querySelectorAll('.text');
const link = document.querySelectorAll('.link');


tab.addEventListener('click', (e) => {
    const targetElement = e.target;
    console.log(targetElement);
})

