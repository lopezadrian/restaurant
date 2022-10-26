function generateContactPageContent() {
    const pageToRemove = document.querySelector('.current-page');
    if (pageToRemove) content.removeChild(pageToRemove);

    const contactPage = document.createElement('div');
    contactPage.id = 'contact-page';
    contactPage.className = 'current-page';
    content.appendChild(contactPage);
        
    const contactPageHeader = document.createElement('h1');
    const contactPageHeaderText = document.createTextNode('Contact Us');
    contactPageHeader.appendChild(contactPageHeaderText);
    contactPage.appendChild(contactPageHeader);

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = 'Contact Us, at our esteemed restaurant';
    contactPage.appendChild(description);
}

export default generateContactPageContent;