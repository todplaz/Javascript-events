//Fonctionnalité 1
/*
var foot = document.querySelector('footer');
foot.addEventListener('click',function(){
    this.innerText = 'clique';
    console.log(this);
}); */
//this ici pointe vers f1 donc on pouvait aussi ecrire console.log(f1)

//Fonctionnalité 1-bis
/*
var foot = document.querySelector('footer');
let i = 1;
foot.addEventListener('click',function() {
   console.log( this.innerText = `Clic numéro : ${i++}`);
   
});
*/

//Fonctionnalité 2
/*
let head = document.getElementById('navbarHeader');
let burger = document.querySelector('button');
    burger.addEventListener('click', function (){
    head.classList.toggle('collapse');
})
    console.log(head);
*/

//Fonctionnalité 3
/*
let carte = document.getElementsByClassName('card mb-4 box-shadow');
let editer = document.getElementsByClassName('btn btn-sm btn-outline-secondary');

editer[0].addEventListener('click',function(){
    carte[0].style.color = 'red';
});
*/

//Fonctionnalité 4
/*
let carte = document.getElementsByClassName('card mb-4 box-shadow');
let editer = document.getElementsByClassName('btn btn-sm btn-outline-secondary');

editer[1].addEventListener('click',function(){
    if (carte[1].style.color === 'black'){
        carte[1].style.color = 'green' 
    }else
    carte[1].style.color = 'black'
});
*/

//Fonctionnalité 5
/*
let head = document.getElementsByTagName('Header')[0];
let doubleClick = function() {
    let link = document.querySelector("link")
    if (link.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
      link.href = "";
    } else {
      link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
  };
  head.addEventListener("dblclick", doubleClick);
  */

  //Fonctionnalité 6

  let carte = document.getElementsByClassName('card mb-4 box-shadow');
  carte.addEventListener('mouseenter',function(event){
      event.target.style.heigth
  })
  

  
