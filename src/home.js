export function loadHome() {
  const content = document.createElement('div');
  content.classList.add('home-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Gourmet Haven';

  const image = document.createElement('img');
  image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
  image.alt = 'Restaurant Interior';

  const description = document.createElement('p');
  description.textContent = 'At Gourmet Haven, we pride ourselves on serving freshly prepared, locally sourced dishes in a cozy, welcoming atmosphere. Join us for an unforgettable dining experience!';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);

  return content;
} 