// let li = document.querySelectorAll('li');

// let aa = document.querySelectorAll('a');
// let a = document.querySelector('a');
// let active = document.querySelector('.active');
// let div = document.querySelectorAll('div');


let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});

let ul = document.querySelector('ul');
let burger = document.querySelector('.burger');
let damn = 

burger.addEventListener('click', function(){
    ul.classList.toggle("damn");
})




















// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   } 