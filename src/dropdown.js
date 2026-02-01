function drop(menu, items) {
  menu.addEventListener('click', () => {
    items.classList.toggle('hide');
  });
}

export { drop };
