const modal = document.getElementById('modal');
const openButton = document.getElementById('modal-open');

openButton.addEventListener('click', () => {
  modal.showModal();
});

// Закрытие по клику вне окна
modal.addEventListener('click', (event) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});
