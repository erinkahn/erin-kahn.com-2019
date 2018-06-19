console.log(`Hello World from app.js!`);

document.querySelector('.burger').addEventListener('click', function () {
    //show menu
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
});

// popup portfolio 
let popUp = document.querySelectorAll('.popUp');

for (let i = 0; i < popUp.length; i++) {
    popUp[i].addEventListener('click', function () {
        document.querySelector('.portfolio-popUp').classList.add('show');
    });
}
//# sourceMappingURL=main.js.map
