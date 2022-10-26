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

export default generatePageButton;