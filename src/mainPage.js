function generateMainPageContent() {
    const pageToRemove = document.querySelector('.current-page');
    if (pageToRemove) content.removeChild(pageToRemove);

    const mainPage = document.createElement('div');
    mainPage.id = 'main-page';
    mainPage.className = 'current-page';
    content.appendChild(mainPage);
        
    const mainPageHeader = document.createElement('h1');
    const mainPageHeaderText = document.createTextNode('Main Page');
    mainPageHeader.appendChild(mainPageHeaderText);
    mainPage.appendChild(mainPageHeader);

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = 'Welcome to Our Restaurant, proud to serve Food!';
    mainPage.appendChild(description);
}

export default generateMainPageContent;