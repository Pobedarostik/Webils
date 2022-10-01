const container = document.querySelector('.main');
const background = document.querySelector('.wrapperBackgroundPhoto');
const links = document.querySelectorAll('.main a');
container.onmouseover = container.onmouseout = changeBack;

links.forEach(link => {
  link.addEventListener('mousemove', changeBack);
});

function changeBack(e) {
  switch (e.currentTarget.id) {
    case 'seo':
      background.style.backgroundImage =
        'linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(./seo.abdcf491.jpg)';
      break;
    case 'yandex':
      background.style.backgroundImage =
        'linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(./yandex.5019a1df.jpg)';
      break;
    case 'insta':
      background.style.backgroundImage =
        'linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(./insta.5724c782.jpg)';
      break;
    case 'gogl':
      background.style.backgroundImage =
        'linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(./gogl.c1a37877.jpg)';
      break;
    default:
      return (background.style.backgroundImage = '');
  }
}
