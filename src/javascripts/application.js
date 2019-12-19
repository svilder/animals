import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../stylesheets/application.scss';


const eyes = document.querySelectorAll('eye');
const walk = 500; // 500px
const body = document.querySelector('body');

function moveEyes() {
  eyes.classList.add('big');
}


window.addEventListener('click', moveEyes);

//     left = ${yWalk * -1}px,
//     bottom = ${xWalk * -1}px

// eyes.style.right = `
//     ${yWalk}px
//   `;
//   eyes.style.top = `
//     ${xWalk}px
//   `;
