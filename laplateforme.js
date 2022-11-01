
// TODO: Create a laPlateforme class

/**
 * Method that is called whenever laPlateforme is ready to be used.
 * This happens after the progress bar element in the Splash Screen reaches 100.
 */
laPlateforme.onReady = () => {
  
  // DEBUG [4dbsmaster]: tell me about it :)
  console.log(`[laPlateforme] (onReady): \x1b[34mI am ready!!!\x1b[0m`);

  // Install event Listeners
  installEventListeners();
};


/**
 * Method used to add event listeners to some main elements
 */
let installEventListeners = () => {
  // get the dark mode icon button element as `darkModeIconButtonEl`
  let darkModeIconButtonEl = document.getElementById('darkModeIconButton');
  // get the light mode icon button element as `lightModeIconButtonEl`
  let lightModeIconButtonEl = document.getElementById('lightModeIconButton');
  // get the search icon button element as `searchIconButtonEl`
  let searchIconButtonEl = document.getElementById('searchIconButton');


  // Listening to 'click' events...
  darkModeIconButtonEl.addEventListener('click', _handleDarkModeIconButtonClick);
  lightModeIconButtonEl.addEventListener('click', _handleLightModeIconButtonClick);
  searchIconButtonEl.addEventListener('click', _handleSearchIconButtonClick);
};

/**
 * Handler that is called whenever `darkModeIconButtonEl` is clicked or tapped
 */
let _handleDarkModeIconButtonClick = (event) => {
  // toggle theme
  toggleTheme();
  
  // DEBUG [4dbsmaster]: tell me about it :)
  console.log(`[_handleDarkModeIconButtonClick]: event.target => `, event.target);
};


/**
 * Handler that is called whenever `lightModeIconButtonEl` is clicked or tapped
 */
let _handleLightModeIconButtonClick = (event) => {
  // toggle theme
  toggleTheme();

  // DEBUG [4dbsmaster]: tell me about it :)
  console.log(`[_handleLightModeIconButtonClick]: event.target => `, event.target);
};

/**
 * Handler that is called whenever `searchIconButtonEl` is clicked or tapped
 */
let _handleSearchIconButtonClick = (event) => {
  // DEBUG [4dbsmaster]: tell me about it :)
  console.log(`[_handleSearchModeIconButtonClick]: event.target => `, event.target);
}



/**
 * ToggleTheme
 *
 * Method used to toggle the theme between 'light'(default) and 'dark'.
 */
let toggleTheme = () => {
  // get the body element as `bodyEl`
  let bodyEl = document.body;

  // TODO: Use a localStorage or something similar like firebase,
  // for persistent storage of the theme's value
  
  // get the current theme from <body>'s class list
  let currentTheme = _getCurrentTheme();
  // get the next theme
  let nextTheme = currentTheme == 'light' ? 'dark' : 'light';

  // replace the `currentTheme` w/ the `nextTheme`
  bodyEl.classList.replace(currentTheme, nextTheme);
  
  // Check browser support for Storage
  if (typeof(Storage) !== 'undefined') {
    // save theme to local storage
    localStorage.setItem('theme', nextTheme);

    // DEBUG [4dbsmster]: tell me about it :)
    console.log(`[toggleTheme](1): nextTheme => \x1b[1m${nextTheme}\x1b[0m has been saved to localStorage!!`);
  }

  // notify / update the theme icon buttons
  _notifyThemeIconButtons();

  // DEBUG [4dbsmaster]: tell me about it :)
  console.log(`[toggleTheme](2): current theme (${currentTheme}) has been changed to "${nextTheme}"`);
};


/**
 * Updates the `dark` and `light` mode icon buttons.
 */
let _notifyThemeIconButtons = () => {
  // get the dark mode icon button element as `darkModeIconButtonEl`
  let darkModeIconButtonEl = document.getElementById('darkModeIconButton');
  // get the light mode icon button element as `lightModeIconButtonEl`
  let lightModeIconButtonEl = document.getElementById('lightModeIconButton');


  // Get the current Theme
  let currentTheme = _getCurrentTheme();

  // if the current theme is 'light'...
  if (currentTheme == 'light') {
    // ...hide the light mode icon button
    lightModeIconButtonEl.hidden = true;
    // ...show or unhide the dark mode icon button
    darkModeIconButtonEl.hidden = false;

  }else {
    // ...hide the dark mode icon button
    darkModeIconButtonEl.hidden = true;
    // ...show or unhide the light mode icon button
    lightModeIconButtonEl.hidden = false;
  }

};



// fake getters....

/**
 * Returns the current Theme (i.e. 'light' or 'dark')
 *
 * @returns { String }
 * @private
 */
let _getCurrentTheme = () => document.body.classList.contains('light') ? 'light' : 'dark';
