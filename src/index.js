import menuItemsTpl from './templates/menu-items.hbs';
import menuItemsInfo from './menu.json';
import './css/styles.css';

// Шаблонизация
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItemsMarkup(menuItemsInfo);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItemsMarkup(menuItemsInfo) {
    return menuItemsTpl(menuItemsInfo);
}

// Тема
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('#theme-switch-toggle'),
};

refs.switcher.addEventListener('change', switchBox);

if (localStorage.getItem('theme')) {
  refs.body.classList.add(localStorage.getItem('theme'));
} else { 
  refs.body.classList.add(theme.LIGHT);
};

refs.switcher.cheked = localStorage.getItem('theme') === theme.DARK;
refs.switcher.checked = refs.body.classList.contains(theme.DARK)
? true
: false;

function switchBox() {
  if (this.checked) {
    refs.body.classList.add(theme.DARK);
    refs.body.classList.remove(theme.LIGHT);
    localStorage.setItem('theme', theme.DARK);
  } else {
    refs.body.classList.add(theme.LIGHT);
    refs.body.classList.remove(theme.DARK);
    localStorage.setItem('theme', theme.LIGHT);
  }
};