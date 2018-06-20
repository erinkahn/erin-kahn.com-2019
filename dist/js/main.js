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
//# sourceMappingURL=main.js.map
