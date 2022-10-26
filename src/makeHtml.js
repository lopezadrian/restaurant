import generateMainPageContent from "./mainPage";
import generateMenuPageContent from "./menuPage";
import generateContactPageContent from "./contactPage";

function capitalizeString (string) {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}

function generatePageButton (pageName) {
    const capitalizedPageName = capitalizeString(pageName);
    const button = document.createElement('button');
    button.id = `${pageName}-page-button`;
    const buttonText = document.createTextNode(`${capitalizedPageName} Page`);
    button.appendChild(buttonText);
    content.appendChild(button);
    return button;
}

function generateNewPage(pageName) {
/*     const pageToRemove = document.querySelector('.current-page');
    if (pageToRemove) content.removeChild(pageToRemove);

    const capitalizedPageName = capitalizeString(pageName);
    const newPage = document.createElement('div');
    newPage.id = `${pageName}-page`;
    newPage.className = 'current-page';
    content.appendChild(newPage);
        
    const newPageHeader = document.createElement('h1');
    const newPageHeaderText = document.createTextNode(`${capitalizedPageName} Page`);
    newPageHeader.appendChild(newPageHeaderText);
    newPage.appendChild(newPageHeader); */

    switch (pageName) {
        case 'main':
            generateMainPageContent();
            break;
        case 'menu':
            generateMenuPageContent();
            break;
        case 'contact':
            generateContactPageContent();
            break;
    }
}

export {generatePageButton, generateNewPage};