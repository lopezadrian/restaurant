function generatePageButton (pageName) {
    const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const button = document.createElement('button');
    button.id = `${pageName}-page-button`;
    const buttonText = document.createTextNode(`${capitalizedPageName} Page`);
    button.appendChild(buttonText);
    content.appendChild(button);
    return button;
}

export default generatePageButton;