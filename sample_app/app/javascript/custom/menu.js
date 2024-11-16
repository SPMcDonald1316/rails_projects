// Menu manipulation

// Adds a toggle listener
const addToggleListener = (selectedId, menuId, toggleClass) => {
  let element = document.querySelector(`#${selectedId}`);
  element.addEventListener('click', (ev) => {
    ev.preventDefault();
    let menu = document.querySelector(`#${menuId}`);
    menu.classList.toggle(toggleClass);
  });
};

// Add toggle listeners to listen for clicks
document.addEventListener('turbo:load', () => {
  addToggleListener('hamburger', 'navbar-menu', 'collapse');
  addToggleListener('account', 'dropdown-menu', 'active');
});
