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

        //show the popup box
        document.querySelector('.portfolio-popUp').classList.add('show');
        // add a dimmed background behind popup
        document.body.classList.add('dim-bkg');

        // loop through the content 
        // hide all other content except for the one thats clicked

        for (let j = 0; j < content.length; j++) {

            content[j].style.display = 'none'; // hide all other content
        }
        content[i].style.display = 'block'; // only show clicked - i 
    });
};

// close the popUp box ---------------------------------------------------------------

// if class is show and you click X
// hide portfoio popUp
let x = document.querySelector('.x');
let popUpBox = document.querySelector('.portfolio-popUp');

x.addEventListener('click', function () {
    console.log('x was clicked');
    popUpBox.classList.remove('show');
    document.body.classList.remove('dim-bkg');
});

// var bodyTag = document.getElementsByTagName('body');
// var element = document.querySelector('.portfolio-popUp'); 
// function clickedOrNot(e) {
// 	if (e.target !== element) {
// 		// action in the case of click outside 
// 		bodyTag[0].removeEventListener('click', clickedOrNot, true);
// 	}	
// }
// bodyTag[0].addEventListener('click', clickedOrNot, true);


// Detect all clicks on the document
// document.addEventListener("click", function(event) {

//     // If user clicks inside the element, do nothing
//     if (event.target.closest(".portfolio-popUp")) return;

//     // If user clicks outside the element, hide it!
//         box.classList.add("js-is-hidden");

// });


// document.addEventListener("click", function(evt) {  
//     var popUpBox = document.querySelector('.portfolio-popUp'),
//         targetElement = evt.target;  // clicked element

//     do {
//         if (targetElement == popUpBox) {
//             // This is a click inside. Do nothing, just return.
//             console.log("Clicked inside!");
//             return;
//         }
//         // Go up the DOM
//         targetElement = targetElement.parentNode;
//     } while (targetElement);

//     // This is a click outside.
//     console.log("Clicked outside!");
// });


// let bigbox = document.querySelector('.portfolio-popUp')

// $('#showbox').click(function(){

//     $('#bigbox').show(function(){
//       document.body.addEventListener('click', boxCloser, false);
//     });

//   });

// function boxCloser(e){
//     if(e.target.id != 'bigbox'){
//        document.body.removeEventListener('click', boxCloser, false);
//        $('.portfolio-popUp').hide();
//     }
// }


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
