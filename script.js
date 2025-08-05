// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const categories = [
    {
      icon: 'fas fa-book-open',
      title: 'Learn & Explore Nature',
      desc: 'Discover the benefits of herbs, fruits, and vegetables for a healthier life.',
      link: 'learn.html'
    },
    {
      icon: 'fas fa-shopping-basket',
      title: 'Shop Natural Products',
      desc: 'Browse our collection of herbs, teas, and natural remedies.',
      link: 'shop.html'
    },
    {
      icon: 'fas fa-heart',
      title: 'Success Stories',
      desc: 'Read testimonials from people who embraced nature’s healing power.',
      link: 'testimonials.html'
    }
  ];

  const container = document.getElementById('categoriesContainer');
  categories.forEach(cat => {
    const card = document.createElement('a'); // clickable card
    card.href = cat.link;
    card.className = 'category-card';
    card.innerHTML = `
      <i class="${cat.icon}"></i>
      <h3>${cat.title}</h3>
      <p>${cat.desc}</p>
    `;
    container.appendChild(card);
  });
});
