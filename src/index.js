import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', () => switchTab(loadHome));

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', () => switchTab(loadMenu));

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', () => switchTab(loadContact));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  header.appendChild(nav);

  return header;
}

function switchTab(tabLoader) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
  contentDiv.appendChild(tabLoader());
}

function initializeWebsite() {
  const body = document.body;
  const contentDiv = document.getElementById('content');

  body.insertBefore(createHeader(), contentDiv);

  switchTab(loadHome);
}

initializeWebsite();