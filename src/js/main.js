console.log(`Hello World from app.js!`)


//burger menu -------------------------------------------------------------------------
document.querySelector('.burger').addEventListener('click', function(){
    //show menu
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
})






// popup portfolio ---------------------------------------------------------------------


let popUp = document.querySelectorAll('.popUp');
let content = document.querySelectorAll('.content');


// loop through all the portfolio projects
for (let i=0; i< popUp.length; i++){

    // when one project is clicked...
    popUp[i].addEventListener('click', function() {
        console.log('you clicked a project' + i); // not showing in console

        //show the popup box
        document.querySelector('.portfolio-popUp').classList.add('show');
        document.querySelector('.portfolio-popUp-overlay').classList.add('show');

        // loop through the content 
        // hide all other content except for the one thats clicked

        for (let j=0;  j< content.length; j++){
            
            content[j].style.display = 'none'; // hide all other content
        }
        content[i].style.display = 'block'; // only show clicked - i 

    })
};






// close the popUp box ---------------------------------------------------------------


let x = document.querySelector('.x');
let popUpBox = document.querySelector('.portfolio-popUp');
let popUpOverlay = document.querySelector('.portfolio-popUp-overlay');

var closePopup = function() {
    console.log('x was clicked');
    popUpBox.classList.remove('show');
    popUpOverlay.classList.remove('show');
}

x.addEventListener('click', closePopup);
popUpOverlay.addEventListener('click', closePopup);

// if you click a key and the key is escape hide the popUp 
document.body.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closePopup()
    }
})






//  hero arrow down scroll----------------------------------------------------------


document.querySelector('.down').addEventListener('click', function() {
    console.log('down arrow clicked');
    event.preventDefault();
    
    let portfolio = document.querySelector('#portfolio');
    portfolio.scrollIntoView({block: 'start', behavior: 'smooth'});
});





// menu scroll to slowly---------------------------------------------------------

navButtons = document.querySelectorAll('.nav ul li a');

for (let m = 0; m < navButtons.length-1; m++) {
    navButtons[m].addEventListener('click', function() {
        event.preventDefault();

        let mainSections = document.querySelectorAll('.main');
        for (let l = 0; l < mainSections.length; l++) {
           console.log('mainSections[l]');
            
        }
        mainSections[m].scrollIntoView({block: 'start', behavior: 'smooth'});
    })
    
}


 
// fun page hover -----------------------------------

const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    imgContent[i].style.left = e.pageX + 'px';
    imgContent[i].style.top = e.pageY + 'px';
  }
};

document.addEventListener('mousemove', showImgContent);