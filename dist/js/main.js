console.log(`Hello World from app.js!`);

//burger menu -------------------------------------------------------------------------
document.querySelector('.burger').addEventListener('click', function () {
    //show menu
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
});

// popup portfolio ---------------------------------------------------------------------


let popUp = document.querySelectorAll('.popUp');
let content = document.querySelectorAll('.content');

// loop through all the portfolio projects
for (let i = 0; i < popUp.length; i++) {

    // when one project is clicked...
    popUp[i].addEventListener('click', function () {
        console.log('you clicked a project' + i); // not showing in console

        //shop the popup box
        document.querySelector('.portfolio-popUp').classList.add('show');

        // loop through the content 
        // hide all other content except for the one thats clicked

        for (let j = 0; j < content.length; j++) {

            content[j].style.display = 'none'; // hide all other content
        }
        content[i].style.display = 'block'; // only show clicked - i 
    });
};

// popup x button close ---------------------------------------------------------------

// if class is show and you click X
// hide portfoio popUp
let x = document.querySelector('.x');
x.addEventListener('click', function () {
    console.log('x was clicked');
    document.querySelector('.portfolio-popUp').classList.remove('show');
});

//  hero arrow down scroll----------------------------------------------------------


document.querySelector('.down').addEventListener('click', function () {
    console.log('down arrow clicked');
    event.preventDefault();

    let portfolio = document.querySelector('#portfolio');
    portfolio.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

// menu scroll to slowly---------------------------------------------------------

navButtons = document.querySelectorAll('.nav ul li a');

for (let m = 0; m < navButtons.length; m++) {
    navButtons[m].addEventListener('click', function () {
        event.preventDefault();

        let mainSections = document.querySelectorAll('.main');
        for (let l = 0; l < mainSections.length; l++) {
            console.log('mainSections[l]');
        }
        mainSections[m].scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
}
//# sourceMappingURL=main.js.map
