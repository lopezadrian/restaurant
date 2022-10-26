function generateMenuPageContent() {
    const pageToRemove = document.querySelector('.current-page');
    if (pageToRemove) content.removeChild(pageToRemove);

    const menuPage = document.createElement('div');
    menuPage.id = 'menu-page';
    menuPage.className = 'current-page';
    content.appendChild(menuPage);
        
    const menuPageHeader = document.createElement('h1');
    const menuPageHeaderText = document.createTextNode('Menu');
    menuPageHeader.appendChild(menuPageHeaderText);
    menuPage.appendChild(menuPageHeader);

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = 'Take a look at our Menu, with various Food Items!';
    menuPage.appendChild(description);
}

export default generateMenuPageContent;