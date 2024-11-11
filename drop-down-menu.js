function dropDownMenu() {
  const mainContainer = document.querySelector('.main-container');
  const dropDownContainer = document.querySelector(".drop-down-container");
  const dropDownButton = document.querySelector('.drop-down-button');

  dropDownButton.addEventListener('click', () => {
    if (mainContainer.classList.contains('vis')) {
      mainContainer.classList.remove('vis');
      mainContainer.classList.add('hidden');
      // wait for the animation to finish before removing the container content
      setTimeout(() => {
        dropDownContainer.classList.remove("vis");
      }, 500);
    } else {
      mainContainer.classList.remove('hidden');
      mainContainer.classList.add('vis');
      dropDownContainer.classList.add("vis");
    }
  });
}

dropDownMenu();