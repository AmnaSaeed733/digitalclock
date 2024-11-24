function showtime() {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.querySelector(".clock").textContent = `${h}:${m}:${s}`;
}


setInterval(showtime, 1000);
showtime();
