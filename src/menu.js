export function loadMenu() {
  const content = document.createElement('div');
  content.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const menuList = document.createElement('ul');

  const item1 = document.createElement('li');
  item1.textContent = 'Gourmet Pancakes - $9.99';

  const item2 = document.createElement('li');
  item2.textContent = 'Avocado & Poached Egg Toast - $12.50';

  const item3 = document.createElement('li');
  item3.textContent = 'Signature Trcuffle Burger - $16.00';

  menuList.appendChild(item1);
  menuList.appendChild(item2);
  menuList.appendChild(item3);

  content.appendChild(headline);
  content.appendChild(menuList);

  return content;
}