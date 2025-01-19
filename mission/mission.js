
const body = document.body;
const themeSelector = document.getElementById('theme-selector');
const logo = document.querySelector('.logo');

themeSelector.addEventListener('change', changeTheme);

// function, theme change
function changeTheme() {
    const selectedTheme = themeSelector.value; // get selected option

    if (selectedTheme === 'dark') {
        // apply dark theme
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; // change to white logo
    } else {
        // apply light theme
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp'; // change back to blue logo
    }
}