let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let hrotation = 30 * hours + min / 2;
  let mrotation = 6 * min;
  let srotation = 6 * sec;

  hourHand.style.transform = `rotate(${hrotation}deg)`;
  minHand.style.transform = `rotate(${mrotation}deg)`;
  secHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);
