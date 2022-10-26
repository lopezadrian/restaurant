import './style.css';
import generatePageButton from './pageButtons';
import generateMainPageContent from "./mainPage";
import generateMenuPageContent from "./menuPage";
import generateContactPageContent from "./contactPage";

generatePageButton('main');
generatePageButton('menu');
generatePageButton('contact');

document.addEventListener('click', chooseNewPage);

generateMainPageContent();

function chooseNewPage(e) {
    const clickedElement = e.target;
    
    if (clickedElement.matches('#main-page-button')) generateMainPageContent();
    if (clickedElement.matches('#menu-page-button')) generateMenuPageContent();
    if (clickedElement.matches('#contact-page-button')) generateContactPageContent();
}