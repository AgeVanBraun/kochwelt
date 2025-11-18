'use strict';

let inputValue = document.getElementById('amount');

function calcBtn() {
  document.getElementById('element01').innerHTML = inputValue.value * document.getElementById('element01').innerHTML;
  document.getElementById('element02').innerHTML = inputValue.value * document.getElementById('element02').innerHTML;
  document.getElementById('element03').innerHTML = inputValue.value * document.getElementById('element03').innerHTML;
  document.getElementById('element04').innerHTML = inputValue.value * document.getElementById('element04').innerHTML;
  document.getElementById('element05').innerHTML = inputValue.value * document.getElementById('element05').innerHTML;
  document.getElementById('element06').innerHTML = inputValue.value * document.getElementById('element06').innerHTML;
  document.getElementById('element07').innerHTML = inputValue.value * document.getElementById('element07').innerHTML;
  document.getElementById('element08').innerHTML = inputValue.value * document.getElementById('element08').innerHTML;
}
