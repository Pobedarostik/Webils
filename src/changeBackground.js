import sea from './img/seo.jpg';
import yandex from './img/yandex.jpg';
import insta from './img/insta.jpg';
import google from './img/google.jpg';

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
      background.style.backgroundImage = `linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(${sea})`;
      break;
    case 'yandex':
      background.style.backgroundImage = `linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(${yandex})`;
      break;
    case 'insta':
      background.style.backgroundImage = `linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(${insta})`;
      break;
    case 'gogl':
      background.style.backgroundImage = `linear-gradient(to right, rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)),url(${google})`;
      break;
    default:
      return (background.style.backgroundImage = '');
  }
}
