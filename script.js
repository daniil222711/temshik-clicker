let count = 0;
const countElem = document.getElementById('count');
const button = document.getElementById('clicker-button');

button.addEventListener('click', () => {
  count += 1; // увеличиваем счётчик на 1
  countElem.textContent = count + ' рублей';
});
