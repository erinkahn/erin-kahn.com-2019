console.log(`Hello World from app.js!`)



document.querySelector('.burger').addEventListener('click', function(){
    //show menu
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
})


// popup portfolio 
let popUp = document.querySelectorAll('.popUp');

for (let i=0; i< popUp.length; i++){
    popUp[i].addEventListener('click', function() {
        //loop through popup content
        let content = document.querySelectorAll('.content');
        document.querySelector('.portfolio-popUp').classList.add('show');

        // if the pop up is showing then loop through the content and show it in the popup box
        if (document.querySelector('.portfolio-popUp').style.display ==== 'block'){
            console.log('the class of show is on');
            //loop through content individually 
            for (let j=0;  j<content.length; j++){
                //show content one by one based on which project you click
                content[i].classList.add('contentShow');
            } 
        else {
            content[i].classList.remove('contentShow');

        }
    })  
};







// if class is show and you click X
// hide portfoio popUp
let x = document.querySelector('.x');
x.addEventListener('click', function() {
    console.log('x was clicked');
    document.querySelector('.portfolio-popUp').classList.remove('show');
});