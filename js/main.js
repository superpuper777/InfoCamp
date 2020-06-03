'use strict';

const cards = document.querySelector('.camp__standarts_cards_wr');
let columnOne = document.querySelector('.column-1');
let columnTwo = document.querySelector('.column-2');


function hideAndAppear() {
  columnTwo.hidden = true;
  columnOne.hidden = false
  setTimeout(function show() {
    columnTwo.hidden = false;

    columnOne.hidden = true;
    setTimeout(hideAndAppear, 5000)
  }, 5000);
}

if (window.innerWidth <= 890) {
  hideAndAppear();
  console.log("Screen < 890")
}