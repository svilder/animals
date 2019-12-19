import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../stylesheets/application.scss';


const container = document.querySelector('.container');
const eye1 = container.querySelector('.move1');
const eye2 = container.querySelector('.move2');
const eye3 = container.querySelector('.move3');
const eye4 = container.querySelector('.move4');
const eye5 = container.querySelector('.move5');
const eye6 = container.querySelector('.move6');
const walk = 50;
const moustache = container.querySelector('.moustache');
const hair1 = moustache.querySelector('.move7');
const hair2 = moustache.querySelector('.move8');

function moveEyes(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  eye1.style.transform = `
    translate(${xWalk}px, ${yWalk}px)
  `;
  eye2.style.transform = `
    translate(${xWalk}px, ${yWalk}px)
  `;
  eye3.style.transform = `
    translate(${xWalk}px, ${yWalk}px)
  `;
  eye4.style.transform = `
    translate(${xWalk}px, ${yWalk}px)
  `;
  eye5.style.transform = `
    rotate(${xWalk - 20}deg)
  `;
  eye6.style.transform = `
    rotate(${yWalk + 20}deg)
  `;
}

function moveMoustache() {
  moustache.style.transition = `
    transform 4s ease-in-out
  `;
  moustache.style.transform = `
    matrix(0.586,0.8,-0.8,0.866,0,0)
  `;
}

container.addEventListener('mousemove', moveEyes);
window.addEventListener('click', moveMoustache);

//     left = ${yWalk * -1}px,
//     bottom = ${xWalk * -1}px

// eyes.style.right = `
//     ${yWalk}px
//   `;
//   eyes.style.top = `
//     ${xWalk}px
//   `;
