'use strict';

const selectingPage = document.querySelector('.selection');
const reviewPage = document.querySelector('.review');
const listEl = document.querySelectorAll('li');
const submit = document.querySelector('#submit');
const rate = document.querySelector('span');
let option = 0;

for (let i = 0; i < listEl.length; i++) {
  //   listEl[i].addEventListener('mouseover', () => {
  //     listEl[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
  //     listEl[i].style.color = 'hsl(0, 0%, 100%)';
  //   });

  //   listEl[i].addEventListener('mouseout', () => {
  //     listEl[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
  //     listEl[i].style.color = 'hsl(217, 12%, 63%)';
  //   });

  //   listEl[i].addEventListener('mousedown', () => {
  //     listEl[i].style.backgroundColor = 'hsl(216, 12%, 54%)';
  //     listEl[i].style.color = 'hsl(0, 0%, 100%)';
  //   });

  listEl[i].addEventListener('click', () => {
    option = listEl[i].textContent;

    for (let g = 0; g < listEl.length; g++) {
      listEl[g].style.backgroundColor = 'hsl(213, 19%, 18%)';
      listEl[g].style.color = 'hsl(217, 12%, 63%)';
    }
    listEl[i].style.backgroundColor = 'hsl(216, 12%, 54%)';
    listEl[i].style.color = 'hsl(0, 0%, 100%)';
  });
}

submit.addEventListener('click', () => {
  selectingPage.classList.add('hidden');
  reviewPage.classList.remove('hidden');
  rate.textContent = option;
});
