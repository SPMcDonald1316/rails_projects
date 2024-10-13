// Menu manipulation

// Adds a toggle listener
const addToggleListener = (selected_id, menu_id, toggle_class) => {
  let element = document.querySelector(`#${selected_id}`);
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let menu = document.querySelector(`#${menu_id}`);
    menu.classList.toggle(toggle_class);
  });
};

// Add toggle listeners to listen for clicks
document.addEventListener('turbo:load', () => {
  addToggleListener('hamburger', 'navbar-menu', 'collapse');
  addToggleListener('account', 'dropdown-menu', 'active');
});
