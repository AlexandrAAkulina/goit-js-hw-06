function main() {
  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');

  createBtn.addEventListener('click', () => {
    createBoxes(input.value);
  });
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const baseSize = 30;
    const newBox = [];
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      const size = baseSize + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      newBox.push(box);
    }
    boxes.append(...newBox);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

main();