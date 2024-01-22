const openSize = () => {
    const button = document.querySelector(`.js-open-size`);
    if (!button) return;
  
    const sizeText = document.querySelector(`.js-size`);
    button.addEventListener(`click`, (evt) => {
      button.classList.toggle(`js-open-size--active`);
  
  
      if (evt.target.closest(`.card__select-item`)) {
          const block = evt.target.closest(`.card__select-item`)
        const text = block.innerHTML;
        sizeText.innerHTML = text;
      }
  
    })
  }
  
  openSize();