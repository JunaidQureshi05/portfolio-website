const a = document.querySelectorAll('li a');
let time = 2.5;
a.forEach((el) => {
  el.style.animationDelay = time.toString() + 's';
  time += 0.5;
});
