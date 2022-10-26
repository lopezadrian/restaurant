import './style.css';
import { generatePageButton, generateNewPage } from './makeHtml';

generatePageButton('main');
generatePageButton('menu');
generatePageButton('contact');

document.addEventListener('click', chooseNewPage);

generateNewPage('main');

function chooseNewPage(e) {
    const clickedElement = e.target;
    console.log(clickedElement);

    
    if (clickedElement.matches('#main-page-button')) generateNewPage('main');
    if (clickedElement.matches('#menu-page-button')) generateNewPage('menu');
    if (clickedElement.matches('#contact-page-button')) generateNewPage('contact');
}