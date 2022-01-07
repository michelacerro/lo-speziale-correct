// Store
import store from '../store';

// Actions
import {openFilters, closeFilters} from '../actions';


// used in:
// - components/Navbar.js
export const toggleMenu = () => {
    if (window.innerWidth < 800) {
    const bar1 = document.getElementById('icon-bar1');
    const bar2 = document.getElementById('icon-bar2');
    const bar3 = document.getElementById('icon-bar3');
    const navbarList = document.getElementById('navbar-list');
        if (navbarList.style.display === 'none') {
            bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
            bar2.style.opacity = '0';
            bar3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
            navbarList.style.display = 'flex';
        } else {
            bar1.style.transform = '';
            bar2.style.opacity = '';
            bar3.style.transform = '';
            navbarList.style.display = 'none';
        };
    };
};


// used in:
// - pages/Recipes.js
export const modifyQuery = (text) => {
    if (text !== undefined) {return text.replace(' ', '-')};
};


// used in:
// - pages/Recipes.js
export const toggleFilters = () => {
    const button = document.getElementById('open-filters-button');
    const input = document.getElementById('filters-input');
    
    const state = store.getState().filtersReducer;
    if (state) {
        store.dispatch(closeFilters())
    } else {
        store.dispatch(openFilters())
    };

    if (!state) {
        input.style.display = 'none';
        button.style.backgroundColor = '';
        button.style.borderBottom = 'none';
        button.style.padding = '0';
    } else {
        button.style.backgroundColor = '#ffffff';
        button.style.borderBottom = '1px solid var(--white)';
        button.style.padding = '20px';
        input.style.display = 'block';
    };
};