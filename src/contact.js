export function loadContact() {
  const content = document.createElement('div');
  content.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (555) 123-4567';

  const address = document.createElement('p');
  address.textContent = 'Address: 123 Gourmet Lane, Flavor Town';

  const hours = document.createElement('p');
  hours.textContent = 'Hours: Mon-Sun 8:00 AM - 10:00 PM';

  content.appendChild(headline);
  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(hours);

  return content;
}