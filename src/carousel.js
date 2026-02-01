function slider() {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const image = document.querySelector('.images');
  const circles = document.querySelectorAll('.circle');
  let position = 0;
  left.addEventListener('click', () => {
    circles.forEach((circle) => {
      if (circle.classList.contains('active')) position = Number(circle.dataset.id);
    });
    if (position == 0) return;
    position += 100;
    image.style.transform = `translateX(${position}%)`;
    circles.forEach((circle) => {
      circle.classList.remove('active');
      if (Number(circle.dataset.id) === position) circle.classList.add('active');
    });
  });
  right.addEventListener('click', () => {
    circles.forEach((circle) => {
      if (circle.classList.contains('active')) position = Number(circle.dataset.id);
    });
    if (position == -400) return;
    position -= 100;
    image.style.transform = `translateX(${position}%)`;
    circles.forEach((circle) => {
      circle.classList.remove('active');
      if (Number(circle.dataset.id) === position) circle.classList.add('active');
    });
  });
}

function slideRight() {
  const image = document.querySelector('.images');
  const circles = document.querySelectorAll('.circle');
  let position = 0;
  circles.forEach((circle) => {
    if (circle.classList.contains('active')) position = Number(circle.dataset.id);
  });
  if (position == -400) position = 100;
  position -= 100;
  image.style.transform = `translateX(${position}%)`;
  circles.forEach((circle) => {
    circle.classList.remove('active');
    if (Number(circle.dataset.id) === position) circle.classList.add('active');
  });
}

function circleNav() {
  const circles = document.querySelectorAll('.circle');
  const image = document.querySelector('.images');
  let i = 0;
  circles.forEach((circle) => {
    circle.dataset.id = i;
    circle.addEventListener('click', (e) => {
      circles.forEach((circle) => {
        circle.classList.remove('active');
      });
      const id = e.target.dataset.id;
      e.target.classList.add('active');
      image.style.transform = `translateX(${id}%)`;
    });
    i -= 100;
  });
}

export { slider, circleNav, slideRight };
